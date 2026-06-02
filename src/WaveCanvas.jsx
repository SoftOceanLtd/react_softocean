import React, { useEffect, useRef } from 'react';

const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // FIXED: Now sizes itself based on the CSS parent container, not just the window.
    // This stops it from misaligning if the Hero section gets taller than the screen.
    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    let wave = {
      y: canvas.height * 0.85, // Shifted slightly from 0.90 so high-amplitude waves don't get clipped completely off-screen
      length: 0.01,
      amplitude: 100,
      frequency: 0.015
    };

    let increment = wave.frequency;

    const handleMouseMove = (e) => {
      // Added safety check for screen height division
      if (window.innerHeight > 0) {
        const relativeYPosition = e.clientY / window.innerHeight;
        wave.amplitude = relativeYPosition * 120 + 30;
      }
    };

    const handleResize = () => {
      setSize();
      wave.y = canvas.height * 0.85; 
    };

    window.addEventListener('resize', handleResize);
    
    // FIXED: Added missing event listener (it was only in your cleanup function before!)
    document.addEventListener('mousemove', handleMouseMove); 

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(2, 8, 19, 0.1)'; // Creates a trailing blur effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
      }

      // Sleek glowing line
      ctx.strokeStyle = 'rgba(79, 172, 254, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
      increment += wave.frequency;
    };

    animate();

    // Cleanup phase
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="waveCanvas" ref={canvasRef}></canvas>;
};

export default WaveCanvas;