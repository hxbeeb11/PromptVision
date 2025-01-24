'use client';

import { SignIn } from '@clerk/nextjs';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { useEffect, useState } from 'react';

export default function Login() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth * 1.2,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        width={dimensions.width}
        height={dimensions.height}
      />
      <SignIn redirectUrl="./dashboard/" />
    </div>
  );
}
