'use client';

import React, { useState } from "react";
import SideBar from "../sidebar";

export default function AfterAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main
        className={`flex-1 bg-gray-100 transition-all duration-300}`}
      >
        {children}
      </main>
    </div>
  );
}
