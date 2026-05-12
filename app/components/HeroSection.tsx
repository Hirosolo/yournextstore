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
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.18)] md:p-6">
        <div className="relative aspect-[16/7] overflow-hidden rounded-[1.5rem]">
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

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_30%)]" />

          <div className="absolute left-5 top-1/2 max-w-2xl -translate-y-1/2 text-left md:left-10">
            <div className="max-w-xl rounded-3xl border border-white/70 bg-white/85 p-5 backdrop-blur-md md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
                Curated storefront
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Launch your store
                <br />
                with bright clarity.
              </h1>
              <p className="mt-4 max-w-lg text-lg text-slate-600">Stripe-native commerce, richer storytelling, and a layout that feels complete without becoming crowded.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#products" className="inline-block rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                  Explore products
                </a>
                <a href="#about" className="inline-block rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
                  See the story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}