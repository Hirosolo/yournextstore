"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BANNERS = [
  {
    src: "/OpenAI20Playground202026-01-1420at2013.png",
    alt: "Hero banner showing a premium store showcase",
  },
  {
    src: "/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfUnYydHRDRUNnb2dxSVhiOEtueEw4NGhk00gGycRyUx-oA5kIVgdS3KV66mv5BGQ9QcWFneSw2.avif",
    alt: "Hero banner featuring a lifestyle product composition",
  },
  {
    src: "/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfVkxjN29KOEF1TG9NR0hLQlZwblRDWlJM00MJ1j137t-bnJi98uwa5mJ73gdBQ6jxyMZrERJks.avif",
    alt: "Hero banner featuring an alternate storefront creative",
  },
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % BANNERS.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mt-8">
      <div className="rounded-xl bg-neutral-50 p-6 shadow-sm">
        <div className="relative aspect-[16/7] overflow-hidden rounded-lg">
          {BANNERS.map((banner, index) => (
            <Image
              key={banner.src}
              src={banner.src}
              alt={banner.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 1280px, 100vw"
              className={`object-cover transition-opacity duration-700 ease-in-out ${index === activeBanner ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />

          <div className="absolute left-6 top-1/2 max-w-2xl -translate-y-1/2 text-left md:left-16">
            <div className="rounded-md p-6">
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Launch your store
                <br />
                in minutes.
              </h1>
              <p className="mt-4 text-lg text-slate-600">Stripe-native. Built for the agentic future.</p>
              <div className="mt-6">
                <a href="#products" className="inline-block rounded-full bg-slate-900 px-6 py-3 text-white">
                  Try it today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}