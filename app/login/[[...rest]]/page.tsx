'use client';

import { SignIn } from '@clerk/nextjs';
import FlickeringGrid from '@/components/ui/flickering-grid';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        style={{ height: '100vh', width: '120vw' }}
      />
      <SignIn redirectUrl="./dashboard/" />
    </div>
  );
}
