"use client";

import { useEffect, useRef, useState } from "react";

type FavoriteButtonProps = {
  productId: string;
  productTitle: string;
};

const STORAGE_KEY = "favorite-products";

export default function FavoriteButton({
  productId,
  productTitle,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      const savedFavorites = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY) ?? "[]"
      ) as string[];

      return savedFavorites.includes(productId);
    } catch {
      return false;
    }
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const persistFavorite = (nextFavorite: boolean) => {
    try {
      const savedFavorites = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY) ?? "[]"
      ) as string[];
      const nextFavorites = nextFavorite
        ? Array.from(new Set([...savedFavorites, productId]))
        : savedFavorites.filter((favoriteId) => favoriteId !== productId);

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(nextFavorites)
      );
    } catch {
      // Ignore storage failures and keep the UI responsive.
    }
  };

  const handleClick = () => {
    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);
    persistFavorite(nextFavorite);

    if (nextFavorite) {
      setIsAnimating(true);

      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
      }, 480);
    }
  };

  return (
    <button
      type="button"
      aria-label={isFavorite ? `Remove ${productTitle} from favorites` : `Add ${productTitle} to favorites`}
      aria-pressed={isFavorite}
      onClick={handleClick}
      className={`group relative inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 ${
        isFavorite
          ? "border-red-200 bg-red-50 text-red-600 shadow-sm"
          : "border-slate-200 bg-white text-slate-500 shadow-sm hover:-translate-y-0.5 hover:border-red-200 hover:text-red-500 hover:shadow-md"
      } ${isAnimating ? "animate-favorite-pop" : ""}`}
    >
      {isAnimating ? (
        <span className="absolute inset-0 rounded-full bg-red-400/20 animate-favorite-burst" />
      ) : null}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 transition-transform duration-200 group-hover:scale-110"
      >
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
      </svg>

      <span className="sr-only">
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </span>
    </button>
  );
}