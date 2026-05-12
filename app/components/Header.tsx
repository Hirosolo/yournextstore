"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to real search - for now just log
    console.log("search:", q);
  }

  return (
    <header className=" sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <span className="font-semibold font-bold text-xl">Your Next Store</span>
        </div>

        <nav className="hidden md:flex justify-center gap-4 items-center text-sm text-slate-700">
          <a className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors" href="#category">Category</a>
          <a className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors" href="#brands">Brands</a>
          <a className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors" href="#about">About Us</a>
          <a className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors" href="#contact">Contact Us</a>
        </nav>

        <div className="flex items-center justify-end">
          <form className="flex items-center gap-2" onSubmit={onSubmit}>
            <div className="relative">
              <input
                type="search"
                name="q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search"
                aria-label="Search"
                className="rounded-full border bg-white/90 px-4 py-2 w-32 sm:w-44 md:w-56 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
              <button type="submit" className="absolute right-1 top-1 text-slate-700 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
