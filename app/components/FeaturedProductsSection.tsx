import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  price: string;
  img: string;
  originalPrice?: string;
  reviews?: number;
  images?: string[];
  href?: string;
};

type FeaturedProductsSectionProps = {
  products: Product[];
};

export default function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  return (
    <section id="products" className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.18)] md:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Featured products</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">Popular picks with a stronger presence.</h2>
        </div>
        <div className="sm:ml-auto">
          <select
            id="product-sort"
            defaultValue="featured"
            className="h-10 w-full appearance-none rounded-full border border-slate-200 bg-white bg-[length:14px_14px] bg-[position:right_0.9rem_center] bg-no-repeat px-3.5 pr-10 text-sm text-slate-600 outline-none transition focus:border-sky-400/40 sm:w-[210px]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
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
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            originalPrice={product.originalPrice}
            reviews={product.reviews}
            images={product.images}
            img={product.img}
            href={product.href}
            productId={product.id.toString()}
          />
        ))}
      </div>
    </section>
  );
}