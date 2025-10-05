'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OctopusMascot() {
  const pathname = usePathname();
  const [position, setPosition] = useState({ x: 20, y: 80 });

  useEffect(() => {
    // Randomly position octopus on route change
    setPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
    });
  }, [pathname]);

  return (
    <div
      className="fixed pointer-events-none z-40 animate-float"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="text-8xl animate-wave opacity-80 hover:opacity-100 transition-opacity">
        🐙
      </div>
    </div>
  );
}
