import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-glow"
        animate={{
          x: mousePos.x - 10,
          y: mousePos.y - 10,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#7c3aed' : '#7c3aed88',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
}
