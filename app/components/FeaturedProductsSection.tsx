import ProductCard from "./ProductCard";

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
          <ProductCard key={product.id} title={product.title} price={product.price} img={product.img} />
        ))}
      </div>
    </section>
  );
}