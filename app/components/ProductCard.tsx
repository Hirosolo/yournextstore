import Image from "next/image";
import Link from "next/link";
import { HeartButton } from "./HeartButton";

type ProductCardProps = {
  title: string;
  price: string;
  img: string;
  href?: string;
  productId?: string;
};

export default function ProductCard({ title, price, img, href, productId }: ProductCardProps) {
  const cardContent = (
    <>
      {productId && <HeartButton productId={productId} productTitle={title} />}

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