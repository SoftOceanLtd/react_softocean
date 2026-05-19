import React, { useEffect, useRef } from 'react';

const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    let wave = {
      y: canvas.height * 0.75,
      length: 0.01,
      amplitude: 100,
      frequency: 0.015
    };

    let increment = wave.frequency;

    const handleMouseMove = (e) => {
      const relativeYPosition = e.clientY / window.innerHeight;
      wave.amplitude = relativeYPosition * 120 + 30;
    };

    window.addEventListener('resize', () => {
      setSize();
      wave.y = canvas.height * 0.75;
    });
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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return <canvas id="waveCanvas" ref={canvasRef}></canvas>;
};

export default WaveCanvas;