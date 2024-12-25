import React, { useEffect, useRef } from "react";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvas.width = "100%";
    // canvas.height = window.innerHeight;

    // Particle array
    const particles = [];

    // Particle constructor
    class Particle {
      constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        // ctx.shadowBlur = 0.2;

        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce particles within the canvas
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.speedY = -this.speedY;
        }

        this.draw();
      }
    }

    // Create particles
    function createParticles() {
      for (let i = 0; i < 1500; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2 + canvas.height / 4; // Keep particles centered
        const radius = Math.random() * 1 + 0.51;
        const color = `rgba(${50 + Math.random() * 150}, ${50 + Math.random() * 150}, 255, 0.8)`; // Blue-ish colors
        const speedX = (Math.random() - 0.5) * 0.95;
        const speedY = (Math.random() - 0.5) * 0.3;

        particles.push(new Particle(x, y, radius, color, speedX, speedY));
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
      });

      requestAnimationFrame(animate);
    }

    // Initialize
    createParticles();
    animate();

  
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "black",
        width:"100%",
        height: "100%",
        
      }}
    ></canvas>
  );
};

export default ParticleAnimation;











