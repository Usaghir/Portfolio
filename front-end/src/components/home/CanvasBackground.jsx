import React, { useRef, useEffect } from 'react';

const SimplifiedConstellation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const stars = [];
    const numStars = 30;

    class Star {
      constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.speed.x;
        this.y += this.speed.y;
        if (this.x > canvas.width || this.x < 0) this.speed.x *= -1;
        if (this.y > canvas.height || this.y < 0) this.speed.y *= -1;
      }

      connectTo(otherStar) {
        const distance = Math.sqrt(
          (this.x - otherStar.x) ** 2 + (this.y - otherStar.y) ** 2
        );
        if (distance < 80) {
          // Smaller radius for connections
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 80})`;
          ctx.lineWidth = 0.5; // Thinner lines
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(otherStar.x, otherStar.y);
          ctx.stroke();
        }
      }
    }

    function initStars() {
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = {
          x: (Math.random() - 0.5) * 0.5, // Slower speed
          y: (Math.random() - 0.5) * 0.5,
        };
        stars.push(new Star(x, y, speed));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star, index) => {
        star.update();
        star.draw();
        for (let j = index + 1; j < stars.length; j++) {
          star.connectTo(stars[j]);
        }
      });
      requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0;
      initStars();
    }

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default SimplifiedConstellation;
