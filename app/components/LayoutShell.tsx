"use client";

import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close side nav on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsSideNavOpen(false);
      }
    };

    if (isSideNavOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSideNavOpen]);

  return (
    <div>
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 shadow-md bg-indigo-600 text-white z-50">
        <div className="flex items-center gap-4">
          {/* Menu Toggle */}
          <button
            onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            className="p-2 bg-gray-800 text-white rounded-md"
          >
            {isSideNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Fantasy Cricket
          </Link>
        </div>

        {/* Auth Button */}
        <div>
          {status === "loading" ? (
            <span>Loading...</span>
          ) : session ? (
            <button
              onClick={() => signOut()}
              className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* SideNav */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 h-full w-64 bg-slate-100 text-slate-800 shadow-lg z-40 transform transition-transform duration-300 ease-in-out pt-20 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsSideNavOpen(false)} className="text-lg">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsSideNavOpen(false)} className="text-lg">
            About
          </Link>
          <Link href="/profile" onClick={() => setIsSideNavOpen(false)} className="text-lg">
            Profile
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setIsSideNavOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-20 px-4">{children}</main>
    </div>
  );
}
