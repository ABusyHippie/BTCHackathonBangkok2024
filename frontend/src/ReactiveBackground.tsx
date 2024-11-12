import React, { useEffect } from 'react';

const ReactiveBackground: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Calculate the rotation of the gradient based on mouse position
      const rotationDegree = (x * 90) - 45; // -45 to 45 degrees
      const saturation = 10 + (y * 10); // 10-20%
      
      document.body.style.background = `
        linear-gradient(
          ${rotationDegree}deg,
          hsl(240, ${saturation}%, 10%),
          hsl(260, ${saturation}%, 12%),
          hsl(280, ${saturation}%, 8%),
          hsl(300, ${saturation}%, 10%)
        )
      `;
      document.body.style.backgroundSize = '400% 400%';
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default ReactiveBackground;