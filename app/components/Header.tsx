"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [q, setQ] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

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
              onMouseEnter={() => { setCatOpen(true); setBrandsOpen(false); }}
              onMouseLeave={() => setCatOpen(false)}
            >
              Category
            </a>
          </div>

          <div>
            <a
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              href="#brands"
              onMouseEnter={() => { setBrandsOpen(true); setCatOpen(false); }}
              onMouseLeave={() => setBrandsOpen(false)}
            >
              Brands
            </a>
          </div>
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
        {/* Full-width brands popup (grouped) */}
        <div
          className={`absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-md z-50 transition-all duration-150 ${brandsOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-700">
            <div className="mb-2">
              <span className="font-semibold">ALL BRANDS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Business */}
              <div>
                <div className="font-medium mb-1">Business</div>
                <ul className="space-y-1 text-sm">
                  <li>Budweiser</li>
                  <li>Chevrolet</li>
                  <li>Coca-Cola</li>
                  <li>Ducati</li>
                  <li>Grey Goose</li>
                  <li>Guinness</li>
                  <li>Harley-Davidson</li>
                  <li>Indian Motorcycle</li>
                  <li>Jack Daniel's</li>
                  <li>Jeep</li>
                  <li>Marlboro</li>
                  <li>Monster Energy</li>
                  <li>Starbucks</li>
                  <li>The Famous Grouse</li>
                  <li>The Kraken</li>
                </ul>
              </div>

              {/* Culture */}
              <div>
                <div className="font-medium mb-1">Culture</div>
                <ul className="space-y-1 text-sm">
                  <li>Alpha Kappa Alpha</li>
                  <li>America</li>
                  <li>Bob Kevoian</li>
                  <li>Calvin and Hobbes</li>
                  <li>Captain Morgan</li>
                  <li>Father's Day</li>
                  <li>Independence Hall</li>
                  <li>Mother's Day</li>
                  <li>Peanuts</li>
                  <li>Route 66</li>
                  <li>Royal Navy</li>
                  <li>Smokey Bear</li>
                  <li>US Marine Corps</li>
                  <li>US Navy</li>
                  <li>USA</li>
                  <li>Veteran Day</li>
                </ul>
              </div>

              {/* K-Pop */}
              <div>
                <div className="font-medium mb-1">K-Pop</div>
                <ul className="space-y-1 text-sm">
                  <li>Aespa</li>
                  <li>BTS</li>
                  <li>G-Dragon</li>
                </ul>
              </div>

              {/* Movie */}
              <div>
                <div className="font-medium mb-1">Movie</div>
                <ul className="space-y-1 text-sm">
                  <li>Avatar</li>
                  <li>Batman</li>
                  <li>Dragon Ball</li>
                  <li>Godzilla</li>
                  <li>Harry Potter</li>
                  <li>James Bond 007</li>
                  <li>Marty Supreme</li>
                  <li>Naruto</li>
                  <li>One Piece</li>
                  <li>Peanut</li>
                  <li>Pokémon</li>
                  <li>Scream</li>
                  <li>Star Trek</li>
                  <li>Star Wars</li>
                  <li>Stranger Things</li>
                  <li>The Lord of the Rings</li>
                  <li>The Muppet Show</li>
                  <li>The Simpsons</li>
                  <li>Top Gun</li>
                  <li>Winnie the Pooh</li>
                  <li>Zootopia</li>
                </ul>
              </div>

              {/* Music */}
              <div>
                <div className="font-medium mb-1">Music</div>
                <ul className="space-y-1 text-sm">
                  <li>Bruce Springsteen</li>
                  <li>Clint Black</li>
                  <li>Dolly Parton</li>
                  <li>Elvis Presley</li>
                  <li>Freddie Mercury</li>
                  <li>Jimmy Buffett</li>
                  <li>Kenny Chesney</li>
                  <li>Michael Jackson</li>
                  <li>Prince</li>
                  <li>Rock the Country</li>
                  <li>Westlife</li>
                  <li>Willie Nelson</li>
                </ul>
              </div>

              {/* Other */}
              <div>
                <div className="font-medium mb-1">Other</div>
                <ul className="space-y-1 text-sm">
                  <li>Animals</li>
                  <li>Bad Omens</li>
                  <li>Charlie Puth</li>
                  <li>Chris Brown</li>
                  <li>DC</li>
                  <li>DMX</li>
                  <li>Doctor Who</li>
                  <li>Five Finger Death Punch</li>
                  <li>Foo Fighters</li>
                  <li>Friday The 13th</li>
                  <li>G.I. Joe</li>
                  <li>Game of Thrones</li>
                  <li>Gundam</li>
                  <li>House of the Dragon</li>
                  <li>Jujutsu Kaisen</li>
                  <li>Justin Bieber</li>
                  <li>La La Land</li>
                  <li>Magic The Gathering</li>
                  <li>Marvel</li>
                  <li>Mission Impossible</li>
                  <li>My Hero Academia</li>
                  <li>Noah Kahan</li>
                  <li>Pepe Aguilar</li>
                  <li>Phil Campbell</li>
                  <li>Pirates of the Caribbean</li>
                  <li>Predator</li>
                  <li>Rat Fink</li>
                  <li>Slash</li>
                  <li>Snoop Dogg</li>
                  <li>Taxi Driver</li>
                  <li>The Texas Chainsaw Massacre</li>
                </ul>
              </div>

              {/* Rock Band */}
              <div>
                <div className="font-medium mb-1">Rock Band</div>
                <ul className="space-y-1 text-sm">
                  <li>AC/DC</li>
                  <li>Aerosmith</li>
                  <li>Black Stone Cherry</li>
                  <li>Guns N' Roses</li>
                  <li>Iron Maiden</li>
                  <li>KISS</li>
                  <li>Led Zeppelin</li>
                  <li>Megadeth</li>
                  <li>Metallica</li>
                  <li>Pink Floyd</li>
                  <li>Queen</li>
                  <li>RUSH</li>
                  <li>Sleep Token</li>
                  <li>The Beatles</li>
                  <li>The Eagles</li>
                  <li>The Rolling Stones</li>
                  <li>Thirty Seconds to Mars</li>
                  <li>Van Halen</li>
                  <li>Wu-Tang Clan</li>
                </ul>
              </div>

              {/* Sport */}
              <div>
                <div className="font-medium mb-1">Sport</div>
                <ul className="space-y-1 text-sm">
                  <li>MLB</li>
                  <li>NBA</li>
                  <li>NCAA</li>
                  <li>NFL</li>
                  <li>NHL</li>
                  <li>Other Sport</li>
                  <li>Soccer</li>
                </ul>
              </div>

              {/* Tabletop */}
              <div>
                <div className="font-medium mb-1">Tabletop</div>
                <ul className="space-y-1 text-sm">
                  <li>Dungeons &amp; Dragons</li>
                </ul>
              </div>

              {/* Video Game */}
              <div>
                <div className="font-medium mb-1">Video Game</div>
                <ul className="space-y-1 text-sm">
                  <li>Fallout</li>
                  <li>Sonic The Hedgehog</li>
                  <li>World of Warcraft</li>
                  <li>Zelda</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <a href="/brands" className="inline-block font-semibold text-sm hover:underline">View all Brands</a>
            </div>
          </div>
        </div>
    </header>
  );
}
