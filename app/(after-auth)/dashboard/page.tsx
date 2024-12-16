'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Globe from '@/components/ui/globe';
import React from "react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Welcome to the Dashboard{user ? `, ${user.firstName || user.fullName}` : ''}!
        </h1>
        <SignedIn>
          <div className="flex items-center space-x-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <p className="text-gray-500">You are signed out. Please sign in to continue.</p>
        </SignedOut>
      </header>
      <div className="relative flex-1 w-full h-screen items-center justify-center overflow-hidden rounded-lg border bg-background pt-8 pb-40 md:pb-60 md:shadow-xl">
        {/* Globe Text - Hidden on small devices */}
        <span className="hidden sm:block pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          hxbeeb11 AI
        </span>
        
        {/* Globe Component - Ensures it stays centered */}
        <Globe className="absolute inset-0 w-full h-full object-contain" />
        
        {/* Background Overlay */}
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
      {/*Dashboard content here*/}
    </div>
  );
}
