"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");
  const [catOpen, setCatOpen] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to real search - for now just log
    console.log("search:", q);
  }

  return (
    <header className="relative sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <span className="font-semibold font-bold text-xl">Your Next Store</span>
        </div>

        <nav className="hidden md:flex justify-center gap-4 items-center text-sm text-slate-700">
          <div>
            <a
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              href="#category"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              Category
            </a>
          </div>

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
        {/* Full-width category popup (positioned relative to header) */}
        <div
          className={`absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-md z-50 transition-all duration-150 ${catOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
          onMouseEnter={() => setCatOpen(true)}
          onMouseLeave={() => setCatOpen(false)}
        >
          <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-700">
            <div className="mb-2">
              <span className="font-semibold">ALL CATEGORIES</span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <a className="block hover:underline" href="#accessories">Accessories</a>
              <a className="block hover:underline" href="#clothing">Clothing</a>
              <a className="block hover:underline" href="#footwear">Footwear</a>
              <a className="block hover:underline" href="#homedecor">Home Decor</a>
              <a className="block hover:underline" href="#sale">Sale</a>
            </div>

            <div className="mt-3">
              <a href="/categories" className="inline-block font-semibold text-sm hover:underline">View all Categories</a>
            </div>
          </div>
        </div>
    </header>
  );
}
