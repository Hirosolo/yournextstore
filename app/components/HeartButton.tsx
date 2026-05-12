"use client";

import { useEffect, useRef, useState } from "react";

type HeartButtonProps = {
  productId: string;
  productTitle: string;
};

const STORAGE_KEY = "favorite-products";

export function HeartButton({ productId }: HeartButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Populate `isFavorite` on mount to avoid differing server/client markup
  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY) ?? "[]"
      ) as string[];

      if (savedFavorites.includes(productId)) {
        // Defer state update to avoid synchronous setState inside effect
        window.setTimeout(() => setIsFavorite(true), 0);
      }
    } catch {
      // ignore
    }
  }, [productId]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sparks, setSparks] = useState<Array<{ id: number; angle: number }>>([]);
  const animationTimeoutRef = useRef<number | null>(null);
  const sparkIdRef = useRef(0);

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

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites));
    } catch {
      console.error("Failed to persist favorite");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);
    persistFavorite(nextFavorite);

    if (nextFavorite) {
      // Generate sparks
      const newSparks = Array.from({ length: 8 }).map((_, i) => ({
        id: sparkIdRef.current++,
        angle: (i / 8) * Math.PI * 2,
      }));
      setSparks(newSparks);

      setIsAnimating(true);
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
      animationTimeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
        setSparks([]);
      }, 600);
    }
  };

  return (
    <>
      <style>{`
        @keyframes heartPop {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes sparkFly {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }

        .heart-animate {
          animation: heartPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .spark {
          animation: sparkFly 0.6s ease-out forwards;
        }
      `}</style>
      
      <button
        aria-label="favorite"
        onClick={handleClick}
        className={`absolute right-4 top-4 z-10 transition-colors duration-300 ${
          isAnimating ? "heart-animate" : ""
        } ${isFavorite ? "text-red-500" : "text-slate-400 hover:text-red-500"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={isFavorite ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
        </svg>

        {/* Sparks */}
        {sparks.map((spark) => {
          const distance = 40;
          const tx = Math.cos(spark.angle) * distance;
          const ty = Math.sin(spark.angle) * distance;

          return (
            <div
              key={spark.id}
              className="spark absolute w-1 h-1 bg-red-500 rounded-full pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                "--tx": `${tx}px`,
                "--ty": `${ty}px`,
              } as React.CSSProperties & { "--tx": string; "--ty": string }}
            />
          );
        })}
      </button>
    </>
  );
}
