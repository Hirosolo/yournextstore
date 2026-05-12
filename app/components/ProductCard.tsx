import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  price: string;
  img: string;
  href?: string;
};

export default function ProductCard({ title, price, img, href }: ProductCardProps) {
  const cardContent = (
    <>

      <button aria-label="favorite" className="absolute right-4 top-4 text-slate-400 hover:text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
        </svg>
      </button>

      <div className="relative aspect-[4/5] w-full">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="pointer-events-none absolute inset-0 bg-slate-200/0 transition-colors duration-200 group-hover:bg-slate-200/25" />
      </div>

      <div className="px-4 pb-4 pt-4 text-center">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <div className="mt-1 text-sm text-slate-700">{price}</div>
      </div>
    </>
  );

  return href ? (
    <Link href={href}>
      <article className="group relative min-h-[500px] overflow-hidden rounded-lg bg-neutral-50 cursor-pointer">
        {cardContent}
      </article>
    </Link>
  ) : (
    <article className="group relative min-h-[500px] overflow-hidden rounded-lg bg-neutral-50">
      {cardContent}
    </article>
  );
}