"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageGalleryProps = {
  mainImage: string;
  thumbnails: string[];
  productTitle: string;
};

export default function ProductImageGallery({
  mainImage,
  thumbnails,
  productTitle,
}: ProductImageGalleryProps) {
  const allImages = [mainImage, ...thumbnails];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prev = () =>
    setSelectedIndex((i) => (i - 1 + allImages.length) % allImages.length);
  const next = () => setSelectedIndex((i) => (i + 1) % allImages.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image with arrows */}
      <div className="relative w-full aspect-[4/5] bg-neutral-50 rounded-lg overflow-hidden">
        <Image
          src={allImages[selectedIndex]}
          alt={productTitle}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/80 shadow hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-md bg-white/80 shadow hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative flex-shrink-0 w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
              selectedIndex === idx
                ? "border-slate-900"
                : "border-neutral-200 hover:border-neutral-400"
            }`}
            aria-label={`View product image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${productTitle} view ${idx + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
