import React, { useEffect, useRef } from 'react';

const WaveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let wave = {
      y: canvas.height * 0.8,
      length: 0.01,
      amplitude: 100,
      frequency: 0.01
    };

    let increment = wave.frequency;

    const handleMouseMove = (e) => {
      const relativeYPosition = e.clientY / window.innerHeight;
      wave.amplitude = relativeYPosition * 100 + 50;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      wave.y = canvas.height * 0.8;
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, wave.y);

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
      }

      ctx.strokeStyle = 'rgb(212, 212, 212)';
      ctx.lineWidth = 3;
      ctx.stroke();
      increment += wave.frequency;
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas id="waveCanvas" ref={canvasRef}></canvas>;
};

export default WaveCanvas;