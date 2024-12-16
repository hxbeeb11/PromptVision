'use client';

import { cn } from "@/lib/utils"; 
import Link from "next/link";

interface SideBarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-gray-800 text-white transition-all duration-300",
        isCollapsed ? "w-10" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-2">
        {!isCollapsed && <h1 className="text-xl font-bold p-5">hxbeeb11 AI</h1>}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-400"
        >
          {isCollapsed ? "➡" : "⬅"}
        </button>
      </div>

      {/* Render navigation only if not collapsed */}
      {!isCollapsed && (
        <nav className="flex flex-col ">
          <Link href="./dashboard" className="px-4 py-2 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="../chat" className="px-4 py-2 hover:bg-gray-700">
            Chat LLM
          </Link>
          <Link href="../image" className="px-4 py-2 hover:bg-gray-700">
            Image Generator
          </Link>
        </nav>
      )}
    </div>
  );
};

export default SideBar;
