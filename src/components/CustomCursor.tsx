import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail effect
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        // Keep only last 5 trail points
        return newTrail.slice(-5);
      });

      // Remove old trail points
      setTimeout(() => {
        setTrail((prev) => prev.slice(1));
      }, 200);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('[tabindex]') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Check if device supports hover (not touch)
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', updateCursor);
      document.addEventListener('mouseover', handleMouseOver, true);

      return () => {
        window.removeEventListener('mousemove', updateCursor);
        document.removeEventListener('mouseover', handleMouseOver, true);
      };
    }
  }, []);

  // Check if device supports hover
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="custom-cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trail.length * 0.5,
            transition: 'opacity 0.2s ease',
          }}
        />
      ))}
    </>
  );
}

