#!/usr/bin/env python3
"""
Code Snap Utility
=================

This script generates a markdown snapshot of a repository's directory structure
and file contents. It provides two sections:

1. **Directory Structure:** A tree-like view of the repository, excluding names
   that match the specified patterns.
2. **File Snippets:** For each file (that passes the filtering rules), the script
   outputs the relative file path along with its content in a markdown code block.
   - Empty files are annotated as *(Empty file)*.
   - Omitted files are annotated as *(Omitted - too large or not relevant)*.
   - A line count is shown in the file header.
   - If a file exceeds a specified maximum number of lines, its output is truncated
     with a note indicating how many lines were omitted.

Usage
-----
Generate a snapshot with default exclusions and limit code snippets to 1000 lines:

.. code-block:: bash

   python code_snap.py ./ --exclude runner.py *.tx --include *.py --max-lines 1000 --omit *.log *.json > snap.md

Command-line Arguments
----------------------
- **directory**: The repository's root directory.
- **--exclude**: Patterns to exclude completely (applied to both files and directories).
- **--omit**: Patterns to omit from file content but show in tree structure.
- **--include**: Only include files matching these patterns (e.g., *.py). If not provided,
  all files not excluded are processed.
- **--max-lines**: Maximum number of lines per file to include (0 for no limit, default: 1000).

This utility is optimized for LLM/AI prompts by reducing token count while preserving
essential structural and code information.
"""

import os
import sys
import argparse
import fnmatch
from pathlib import Path

# Global exclusion patterns (applied to both file and directory names).
EXCLUDE_PATTERNS = {
    '__pycache__', 'venv', '.venv', '.pytest_cache', '.mypy_cache', '*.egg-info',
    'back_folder', 'coverage_html', 'htmlcov', 
    '.git', '.github', '.vscode', '.idea', '.cursor', 
    '__MACOSX', '.ipynb_checkpoints', 'node_modules',
    '*.pyc', '*dis-*',
    '.gitignore', '.gitattributes',
    '.coverage', '.coveragerc', '.gitmodules',
    'snap.md', 'code.txt', '*.codesnap',
    '.env'
}

# Common patterns that are typically large or not relevant for code analysis
COMMON_OMIT_PATTERNS = {
    '*.log', '*.txt', '*.md', '*.json', '*.xml', '*.csv', '*.sql',
    'package-lock.json', 'yarn.lock', '*.lock', 
    '*.min.js', '*.min.css', 'dist/*', 'build/*',
    '*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg', '*.ico',
    '*.pdf', '*.doc', '*.docx', '*.xls', '*.xlsx'
}

def should_exclude(name, patterns):
    """
    Check if a given name matches any exclusion pattern.

    :param name: File or directory name.
    :param patterns: A collection of patterns.
    :return: True if the name matches any pattern; False otherwise.
    """
    return any(fnmatch.fnmatch(name, pattern) for pattern in patterns)

def should_omit(name, patterns):
    """
    Check if a given name matches any omit pattern.

    :param name: File or directory name.
    :param patterns: A collection of patterns.
    :return: True if the name matches any pattern; False otherwise.
    """
    return any(fnmatch.fnmatch(name, pattern) for pattern in patterns)

def get_file_extension(filename):
    """Get the file extension for syntax highlighting."""
    ext = Path(filename).suffix.lower()
    ext_map = {
        '.py': 'python',
        '.js': 'javascript',
        '.ts': 'typescript',
        '.jsx': 'jsx',
        '.tsx': 'tsx',
        '.java': 'java',
        '.cpp': 'cpp',
        '.c': 'c',
        '.h': 'c',
        '.hpp': 'cpp',
        '.cs': 'csharp',
        '.php': 'php',
        '.rb': 'ruby',
        '.go': 'go',
        '.rs': 'rust',
        '.swift': 'swift',
        '.kt': 'kotlin',
        '.scala': 'scala',
        '.sql': 'sql',
        '.html': 'html',
        '.css': 'css',
        '.scss': 'scss',
        '.sass': 'sass',
        '.less': 'less',
        '.xml': 'xml',
        '.yaml': 'yaml',
        '.yml': 'yaml',
        '.json': 'json',
        '.toml': 'toml',
        '.ini': 'ini',
        '.cfg': 'ini',
        '.conf': 'ini',
        '.sh': 'bash',
        '.bash': 'bash',
        '.zsh': 'zsh',
        '.fish': 'fish',
        '.ps1': 'powershell',
        '.bat': 'batch',
        '.cmd': 'batch',
        '.dockerfile': 'dockerfile',
        '.r': 'r',
        '.R': 'r',
        '.m': 'matlab',
        '.pl': 'perl',
        '.lua': 'lua',
        '.vim': 'vim',
        '.tex': 'latex'
    }
    return ext_map.get(ext, '')

def get_tree_lines(root, prefix, exclude_patterns, omit_patterns):
    """
    Recursively generate tree-like lines for the repository structure.

    Files or directories matching the exclusion patterns are skipped entirely.
    Files matching omit patterns are shown in the tree but marked as omitted.

    :param root: The directory to traverse.
    :param prefix: The prefix string used for indentation.
    :param exclude_patterns: A set of patterns to exclude completely.
    :param omit_patterns: A set of patterns to omit from content but show in tree.
    :return: A list of strings representing the tree structure.
    """
    lines = []
    try:
        entries = sorted(os.listdir(root))
    except PermissionError:
        lines.append(prefix + "└── [Permission Denied]")
        return lines

    # Filter out excluded entries, but keep omitted ones
    filtered_entries = []
    for entry in entries:
        if not should_exclude(entry, exclude_patterns):
            filtered_entries.append(entry)

    count = len(filtered_entries)
    for i, entry in enumerate(filtered_entries):
        full_path = os.path.join(root, entry)
        if i == count - 1:
            connector = '└── '
            new_prefix = prefix + '    '
        else:
            connector = '├── '
            new_prefix = prefix + '│   '
        
        # Mark omitted files in the tree
        if os.path.isfile(full_path) and should_omit(entry, omit_patterns):
            lines.append(prefix + connector + entry + " [OMITTED]")
        else:
            lines.append(prefix + connector + entry)
            
        if os.path.isdir(full_path):
            lines.extend(get_tree_lines(full_path, new_prefix, exclude_patterns, omit_patterns))
    return lines

def is_binary_file(file_path):
    """
    Check if a file is binary by reading a small chunk and looking for null bytes.
    """
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
            return b'\x00' in chunk
    except:
        return True

def generate_file_snippets(repo_root, exclude_patterns, omit_patterns, include_patterns, max_lines):
    """
    Walk through the repository and generate file snippets.

    For each file that is not excluded (and, if provided, matches an inclusion pattern),
    the file's content is read. Files matching omit patterns are marked as omitted.
    If the content exceeds max_lines (when max_lines > 0), it is truncated and a note 
    is appended. Files that cannot be read are annotated with an error.

    :param repo_root: The repository root directory.
    :param exclude_patterns: A set of patterns to exclude completely.
    :param omit_patterns: A set of patterns to omit from content.
    :param include_patterns: A set of file patterns to include (if non-empty, only matching files are processed).
    :param max_lines: Maximum number of lines per file to include (0 means no limit).
    :return: A list of tuples (relative_path, code, total_lines, is_omitted, file_type).
    """
    snippets = []
    total_files = 0
    omitted_files = 0
    
    for root, dirs, files in os.walk(repo_root):
        # Prune directories matching exclusion patterns.
        dirs[:] = [d for d in dirs if not should_exclude(d, exclude_patterns)]
        for file in files:
            if should_exclude(file, exclude_patterns):
                continue
            # If include_patterns is provided, only process files that match.
            if include_patterns and not any(fnmatch.fnmatch(file, pat) for pat in include_patterns):
                continue

            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, repo_root)
            total_files += 1
            
            # Check if file should be omitted
            is_omitted = should_omit(file, omit_patterns)
            file_ext = get_file_extension(file)
            
            if is_omitted:
                omitted_files += 1
                snippets.append((rel_path, "", 0, True, file_ext))
                continue
                
            # Check if file is binary
            if is_binary_file(full_path):
                snippets.append((rel_path, "[Binary file]", 0, False, file_ext))
                continue
            
            try:
                with open(full_path, "r", encoding="utf-8", errors="ignore") as f:
                    code = f.read()
            except Exception as e:
                code = f"[Error reading file: {e}]"
                
            lines = code.splitlines()
            total_lines = len(lines)
            
            if max_lines > 0 and total_lines > max_lines:
                omitted = total_lines - max_lines
                code = "\n".join(lines[:max_lines]) + f"\n\n[... truncated, {omitted} more lines omitted]"
            
            snippets.append((rel_path, code, total_lines, False, file_ext))
    
    return snippets, total_files, omitted_files

def format_file_size(size_bytes):
    """Format file size in human readable format."""
    if size_bytes == 0:
        return "0B"
    size_names = ["B", "KB", "MB", "GB"]
    i = 0
    while size_bytes >= 1024 and i < len(size_names) - 1:
        size_bytes /= 1024.0
        i += 1
    return f"{size_bytes:.1f}{size_names[i]}"

def main():
    """
    Parse arguments and generate the markdown snapshot.

    The output consists of a directory tree followed by file snippets (with code content).
    """
    # Ensure stdout uses UTF-8 to support Unicode tree characters.
    if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
        sys.stdout.reconfigure(encoding="utf-8")

    parser = argparse.ArgumentParser(
        description="Generate a markdown snapshot of a repository's structure and file snippets.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s ./ --exclude node_modules *.log --include *.py --max-lines 500
  %(prog)s ./ --omit *.json *.md --max-lines 1000
  %(prog)s ./ --exclude .git --omit package-lock.json *.min.js
        """
    )
    parser.add_argument("directory", help="Repository root directory.")
    parser.add_argument(
        "--exclude",
        nargs="*",
        default=[],
        help="Patterns to exclude completely (applied to both files and directories)."
    )
    parser.add_argument(
        "--omit",
        nargs="*",
        default=[],
        help="Patterns to omit from file content but show in tree structure."
    )
    parser.add_argument(
        "--include",
        nargs="*",
        default=[],
        help="Only include files matching these patterns (e.g., *.py)."
    )
    parser.add_argument(
        "--max-lines",
        type=int,
        default=1000,
        help="Maximum number of lines per file to include (0 for no limit)."
    )
    parser.add_argument(
        "--auto-omit",
        action="store_true",
        help="Automatically omit common non-code files (logs, images, etc.)."
    )
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"Error: '{args.directory}' is not a valid directory.")
        sys.exit(1)

    # Combine global exclusions with command-line exclusions.
    exclude_patterns = EXCLUDE_PATTERNS.union(args.exclude)
    
    # Combine omit patterns
    omit_patterns = set(args.omit)
    if args.auto_omit:
        omit_patterns = omit_patterns.union(COMMON_OMIT_PATTERNS)
    
    include_patterns = set(args.include)

    repo_root = os.path.abspath(args.directory)
    repo_name = os.path.basename(repo_root)
    
    # Generate tree and file snippets
    tree_lines = [repo_name] + get_tree_lines(repo_root, '', exclude_patterns, omit_patterns)
    tree_output = "\n".join(tree_lines)
    file_snippets, total_files, omitted_files = generate_file_snippets(
        repo_root, exclude_patterns, omit_patterns, include_patterns, args.max_lines
    )

    # Calculate statistics
    included_files = total_files - omitted_files
    
    # Print optimized markdown output.
    print("<!-- CODE SNAPSHOT START -->")
    print(f"# Code Repository Snapshot: {repo_name}")
    print(f"*Generated from: {repo_root}*\n")
    print(f"**Summary:** {total_files} files total, {included_files} included, {omitted_files} omitted\n")
    
    print("## Directory Structure")
    print("```")
    print(tree_output)
    print("```\n")
    
    print("## File Contents")
    
    # Group files by type for better organization
    code_files = []
    config_files = []
    other_files = []
    omitted_list = []
    
    for rel_path, code, total_lines, is_omitted, file_ext in file_snippets:
        if is_omitted:
            omitted_list.append((rel_path, total_lines))
        elif file_ext in ['python', 'javascript', 'typescript', 'java', 'cpp', 'c', 'go', 'rust']:
            code_files.append((rel_path, code, total_lines, file_ext))
        elif file_ext in ['json', 'yaml', 'toml', 'ini', 'xml']:
            config_files.append((rel_path, code, total_lines, file_ext))
        else:
            other_files.append((rel_path, code, total_lines, file_ext))
    
    # Output code files first (most important)
    if code_files:
        print("### Source Code Files")
        for rel_path, code, total_lines, file_ext in code_files:
            print(f"\n**`{rel_path}`** *({total_lines} lines)*")
            if total_lines > 0 and code.strip() and not code.startswith("["):
                print(f"```{file_ext}")
                print(code)
                print("```")
            elif code.startswith("["):
                print(f"*{code}*")
            else:
                print("*(Empty file)*")
    
    # Output configuration files
    if config_files:
        print("\n### Configuration Files")
        for rel_path, code, total_lines, file_ext in config_files:
            print(f"\n**`{rel_path}`** *({total_lines} lines)*")
            if total_lines > 0 and code.strip() and not code.startswith("["):
                print(f"```{file_ext}")
                print(code)
                print("```")
            elif code.startswith("["):
                print(f"*{code}*")
            else:
                print("*(Empty file)*")
    
    # Output other files
    if other_files:
        print("\n### Other Files")
        for rel_path, code, total_lines, file_ext in other_files:
            print(f"\n**`{rel_path}`** *({total_lines} lines)*")
            if total_lines > 0 and code.strip() and not code.startswith("["):
                if file_ext:
                    print(f"```{file_ext}")
                else:
                    print("```")
                print(code)
                print("```")
            elif code.startswith("["):
                print(f"*{code}*")
            else:
                print("*(Empty file)*")
    
    # List omitted files
    if omitted_list:
        print("\n### Omitted Files")
        print("*The following files are shown in the directory tree but omitted from content:*\n")
        for rel_path, total_lines in omitted_list:
            line_info = f" ({total_lines} lines)" if total_lines > 0 else ""
            print(f"- `{rel_path}`{line_info}")
    
    print("\n<!-- CODE SNAPSHOT END -->")
    
if __name__ == "__main__":
    main()