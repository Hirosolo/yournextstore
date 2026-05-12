import Image from "next/image";
import Link from "next/link";
import { HeartButton } from "./HeartButton";

type ProductCardProps = {
  title: string;
  price: string; // sale price / displayed price
  originalPrice?: string; // optional original price to show struck-through
  img: string;
  images?: string[]; // optional gallery images (shows 2x2 grid when provided)
  href?: string;
  productId?: string;
  category?: string;
  collection?: string;
  discount?: string; // e.g. "18% OFF"
  rating?: number; // 0-5
  reviews?: number; // number of reviews
};

export default function ProductCard({
  title,
  price,
  originalPrice,
  img,
  images,
  href,
  productId,
  category,
  collection,
  discount,
  rating = 0,
  reviews,
}: ProductCardProps) {
  const gallery = images && images.length > 0 ? images.slice(0, 4) : [img];

  // compute discount percent if originalPrice is provided but discount prop is not
  const parsePrice = (s?: string) => {
    if (!s) return NaN;
    const n = parseFloat(String(s).replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : NaN;
  };

  const saleNum = parsePrice(price);
  const origNum = parsePrice(originalPrice);
  let discountText = discount;
  if (!discountText && !Number.isNaN(origNum) && !Number.isNaN(saleNum) && origNum > saleNum) {
    const pct = Math.round((1 - saleNum / origNum) * 100);
    if (pct > 0) discountText = `${pct}% OFF`;
  }

  const cardContent = (
    <>
      {productId && <HeartButton productId={productId} productTitle={title} />}

      <div className="relative w-full">
        {/* Discount badge */}
        {discountText && (
          <span className="absolute z-20 left-3 top-3 rounded-full bg-rose-500 px-2 py-1 text-xs font-semibold text-white shadow-sm">{discountText}</span>
        )}

        {/* Image area: show 2x2 grid when 4 images provided, otherwise single image */}
        {gallery.length >= 4 ? (
            <div className="grid grid-cols-2 gap-1 aspect-[4/5]">
            {gallery.map((src, i) => (
              <div key={i} className="relative w-full overflow-hidden rounded-t-lg">
                <Image src={src} alt={`${title} ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative aspect-[4/5] w-full">
            <Image src={gallery[0]} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors duration-200 group-hover:bg-slate-950/15" />
          </div>
        )}
      </div>

      <div className="px-4 pb-4 pt-4">
        {/* category / collection row */}
        <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
          {category && <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-200">{category}</span>}
          {category && collection && <span className="mx-1">•</span>}
          {collection && <span className="text-xs text-slate-300">{collection}</span>}
        </div>

        <h3 className="text-left text-lg font-bold text-white line-clamp-2">{title}</h3>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.round(rating);
                return (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f8fafc" : "none"} stroke="#f8fafc" strokeWidth="1.2" className="inline-block">
                    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.602L19.335 24 12 19.897 4.665 24l1.585-8.648L.5 9.75l7.832-1.732z" />
                  </svg>
                );
              })}
              {typeof reviews === "number" && <span className="ml-1 text-sm text-slate-300">{reviews}</span>}
            </div>
          </div>

          {/* price */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-slate-950">{price}</span>
            {originalPrice && <span className="text-sm text-slate-400 line-through">{originalPrice}</span>}
          </div>
        </div>
      </div>
    </>
  );

  return href ? (
    <Link href={href}>
      <article className="group relative min-h-[500px] overflow-hidden rounded-3xl border border-slate-200 bg-white cursor-pointer shadow-[0_14px_40px_-28px_rgba(15,23,42,0.2)]">
        {cardContent}
      </article>
    </Link>
  ) : (
    <article className="group relative min-h-[500px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_-28px_rgba(15,23,42,0.2)]">
      {cardContent}
    </article>
  );
}