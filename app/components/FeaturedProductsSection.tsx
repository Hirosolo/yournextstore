import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  img: string;
};

type FeaturedProductsSectionProps = {
  products: Product[];
};

export default function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  return (
    <section id="products" className="mt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Featured products</h2>
        <div className="sm:ml-auto">
          <select
            id="product-sort"
            defaultValue="featured"
            className="h-10 w-full appearance-none rounded-md border border-slate-900 bg-white bg-[length:14px_14px] bg-[position:right_0.9rem_center] bg-no-repeat px-3.5 pr-10 text-sm text-slate-500 outline-none transition focus:border-slate-300 sm:w-[210px]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="featured" disabled>
              Sort products
            </option>
            <option value="price-low-high">Price from low to high</option>
            <option value="price-high-low">Price from high to low</option>
            <option value="name-ascending">Name ascending</option>
            <option value="name-descending">Name descending</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group relative min-h-[500px] overflow-hidden rounded-lg bg-neutral-50">
            <button aria-label="favorite" className="absolute right-4 top-4 text-slate-400 hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
              </svg>
            </button>

            <div className="relative aspect-[4/5] w-full">
              <Image src={product.img} alt={product.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
              <div className="pointer-events-none absolute inset-0 bg-slate-200/0 transition-colors duration-200 group-hover:bg-slate-200/25" />
            </div>

            <div className="px-4 pb-4 pt-4 text-center">
              <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
              <div className="mt-1 text-sm text-slate-700">{product.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}