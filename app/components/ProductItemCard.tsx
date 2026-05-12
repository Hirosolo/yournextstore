import Image from "next/image";

type Props = {
  title: string;
  price?: string;
  img?: string;
  tags?: string[];
};

export default function ProductItemCard({ title, price, img, tags = [] }: Props) {
  return (
    <article className="max-w-md overflow-hidden rounded-lg bg-neutral-50 shadow-sm">
      <div className="relative aspect-[4/5] w-full">
        {img ? (
          <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-200">No image</div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {price && <div className="text-sm text-slate-700">{price}</div>}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
