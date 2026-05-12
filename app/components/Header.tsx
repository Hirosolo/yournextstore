"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import MegaPopup from "./MegaPopup";

const BRANDS: { title: string; items: string[] }[] = [
  {
    title: "Business",
    items: [
      "Budweiser",
      "Chevrolet",
      "Coca-Cola",
      "Ducati",
      "Grey Goose",
      "Guinness",
      "Harley-Davidson",
      "Indian Motorcycle",
      "Jack Daniel's",
      "Jeep",
      "Marlboro",
      "Monster Energy",
      "Starbucks",
      "The Famous Grouse",
      "The Kraken",
    ],
  },
  {
    title: "Culture",
    items: [
      "Alpha Kappa Alpha",
      "America",
      "Bob Kevoian",
      "Calvin and Hobbes",
      "Captain Morgan",
      "Father's Day",
      "Independence Hall",
      "Mother's Day",
      "Peanuts",
      "Route 66",
      "Royal Navy",
      "Smokey Bear",
      "US Marine Corps",
      "US Navy",
      "USA",
      "Veteran Day",
    ],
  },
  { title: "K-Pop", items: ["Aespa", "BTS", "G-Dragon"] },
  {
    title: "Movie",
    items: [
      "Avatar",
      "Batman",
      "Dragon Ball",
      "Godzilla",
      "Harry Potter",
      "James Bond 007",
      "Marty Supreme",
      "Naruto",
      "One Piece",
      "Peanut",
      "Pokémon",
      "Scream",
      "Star Trek",
      "Star Wars",
      "Stranger Things",
      "The Lord of the Rings",
      "The Muppet Show",
      "The Simpsons",
      "Top Gun",
      "Winnie the Pooh",
      "Zootopia",
    ],
  },
  {
    title: "Music",
    items: [
      "Bruce Springsteen",
      "Clint Black",
      "Dolly Parton",
      "Elvis Presley",
      "Freddie Mercury",
      "Jimmy Buffett",
      "Kenny Chesney",
      "Michael Jackson",
      "Prince",
      "Rock the Country",
      "Westlife",
      "Willie Nelson",
    ],
  },
  {
    title: "Other",
    items: [
      "Animals",
      "Bad Omens",
      "Charlie Puth",
      "Chris Brown",
      "DC",
      "DMX",
      "Doctor Who",
      "Five Finger Death Punch",
      "Foo Fighters",
      "Friday The 13th",
      "G.I. Joe",
      "Game of Thrones",
      "Gundam",
      "House of the Dragon",
      "Jujutsu Kaisen",
      "Justin Bieber",
      "La La Land",
      "Magic The Gathering",
      "Marvel",
      "Mission Impossible",
      "My Hero Academia",
      "Noah Kahan",
      "Pepe Aguilar",
      "Phil Campbell",
      "Pirates of the Caribbean",
      "Predator",
      "Rat Fink",
      "Slash",
      "Snoop Dogg",
      "Taxi Driver",
      "The Texas Chainsaw Massacre",
    ],
  },
  {
    title: "Rock Band",
    items: [
      "AC/DC",
      "Aerosmith",
      "Black Stone Cherry",
      "Guns N' Roses",
      "Iron Maiden",
      "KISS",
      "Led Zeppelin",
      "Megadeth",
      "Metallica",
      "Pink Floyd",
      "Queen",
      "RUSH",
      "Sleep Token",
      "The Beatles",
      "The Eagles",
      "The Rolling Stones",
      "Thirty Seconds to Mars",
      "Van Halen",
      "Wu-Tang Clan",
    ],
  },
  {
    title: "Sport",
    items: ["MLB", "NBA", "NCAA", "NFL", "NHL", "Other Sport", "Soccer"],
  },
  { title: "Tabletop", items: ["Dungeons & Dragons"] },
  { title: "Video Game", items: ["Fallout", "Sonic The Hedgehog", "World of Warcraft", "Zelda"] },
];

const CATEGORIES: string[] = [
  "Accessories",
  "Clothing",
  "Footwear",
  "Home Decor",
  "Sale",
];

export default function Header() {
  const [q, setQ] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const brandsCloseTimeout = useRef<number | null>(null);
  const catCloseTimeout = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  function clearBrandsCloseTimeout() {
    if (brandsCloseTimeout.current) {
      clearTimeout(brandsCloseTimeout.current);
      brandsCloseTimeout.current = null;
    }
  }

  function clearCatCloseTimeout() {
    if (catCloseTimeout.current) {
      clearTimeout(catCloseTimeout.current);
      catCloseTimeout.current = null;
    }
  }

  function openBrands() {
    clearBrandsCloseTimeout();
    setBrandsOpen(true);
  }

  function openCategories() {
    clearCatCloseTimeout();
    setCatOpen(true);
  }

  function scheduleCloseBrands(delay = 150) {
    clearBrandsCloseTimeout();
    // window.setTimeout returns a number in browser
    brandsCloseTimeout.current = window.setTimeout(() => {
      setBrandsOpen(false);
      brandsCloseTimeout.current = null;
    }, delay) as unknown as number;
  }

  function scheduleCloseCategories(delay = 150) {
    clearCatCloseTimeout();
    catCloseTimeout.current = window.setTimeout(() => {
      setCatOpen(false);
      catCloseTimeout.current = null;
    }, delay) as unknown as number;
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function updateHeaderVisibility() {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const nearTop = currentScrollY < 12;

      if (nearTop || scrollingUp) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    }

    function onScroll() {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      window.requestAnimationFrame(updateHeaderVisibility);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearBrandsCloseTimeout();
      clearCatCloseTimeout();
    };
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to real search - for now just log
    console.log("search:", q);
  }

  return (
    <header
      className={`sticky top-0 z-30 transform-gpu overflow-hidden backdrop-blur-md transition-transform duration-300 ease-in-out will-change-transform ${isHeaderVisible ? "translate-y-0 shadow-[0_10px_30px_rgba(15,23,42,0.08)]" : "-translate-y-[110%] shadow-none pointer-events-none"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 items-center bg-white/90">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold font-bold text-xl">Your Next Store</Link>
        </div>

        <nav className="hidden md:flex justify-center gap-4 items-center text-sm text-slate-700">
          <div>
            <a
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              href="#category"
              onMouseEnter={() => { openCategories(); setBrandsOpen(false); }}
              onMouseLeave={() => scheduleCloseCategories()}
            >
              Category
            </a>
          </div>

          <div>
            <a
              className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              href="#brands"
              onMouseEnter={() => { openBrands(); setCatOpen(false); }}
              onMouseLeave={() => scheduleCloseBrands()}
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
        <MegaPopup
          open={catOpen}
          onMouseEnter={() => openCategories()}
          onMouseLeave={() => scheduleCloseCategories()}
          groups={[{ title: "ALL CATEGORIES", items: CATEGORIES }]}
          viewAllPath="/categories"
        />
        <MegaPopup
          open={brandsOpen}
          onMouseEnter={() => openBrands()}
          onMouseLeave={() => scheduleCloseBrands()}
          groups={BRANDS.map((g) => ({ title: g.title, items: g.items }))}
          viewAllPath="/brands"
        />
    </header>
  );
}
