

import Image from "next/image";
import Header from "./components/Header";

const products = [
  {
    id: 1,
    title: "Everyday Tote",
    price: "$49",
    img: "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
  },
  {
    id: 2,
    title: "Classic Bottle",
    price: "$24",
    img: "/Default_product_image_of_a_bottle_for_ecommerce_website_minim_2-GOjCmiuwEPPLwzFxtjnHCNSJ7Zy5Ut.jpg",
  },
  {
    id: 3,
    title: "Soft Tee",
    price: "$29",
    img: "/Default_product_image_of_a_tshirt_for_ecommerce_website_minim_32028129-JHMZe8xJ28tll9bGQINl0AXFfYByFc.jpg",
  },
  {
    id: 4,
    title: "Limited Cap",
    price: "$19",
    img: "/Default_product_imag_of_a_yellow_bag_for_ecommerce_website_1-3dgyNymA8r5pCl7OG4nEirKWxLjj3Y.jpg",
  },
];

const promoCards = [
  {
    title: "Limited time offer",
    description: "Fresh picks with exclusive savings for your next order.",
    img: "/OpenAI20Playground202026-01-1420at2013.png",
  },
  {
    title: "New arrivals",
    description: "Discover curated products designed to stand out this season.",
    img: "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
  },
  {
    title: "Best sellers",
    description: "Shop the latest drops and unlock special pricing this week.",
    img: "/Default_product_image_of_a_tshirt_for_ecommerce_website_minim_32028129-JHMZe8xJ28tll9bGQINl0AXFfYByFc.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <section className="mt-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-xl bg-neutral-50 p-6 shadow-sm">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/OpenAI20Playground202026-01-1420at2013.png"
                  alt="hero"
                  width={1600}
                  height={700}
                  className="w-full rounded-lg object-cover"
                />

                <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 max-w-2xl text-left">
                  <div className=" rounded-md p-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
                      Launch your store
                      <br />
                      in minutes.
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">Stripe-native. Built for the agentic future.</p>
                    <div className="mt-6">
                      <a href="#products" className="inline-block bg-slate-900 text-white rounded-full px-6 py-3">Try it today</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <article key={p.id} className="group relative min-h-[500px] overflow-hidden rounded-lg bg-neutral-50">
                <button aria-label="favorite" className="absolute right-4 top-4 text-slate-400 hover:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
                  </svg>
                </button>

                <div className="relative aspect-[4/5] w-full">
                  <Image src={p.img} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="pointer-events-none absolute inset-0 bg-slate-200/0 transition-colors duration-200 group-hover:bg-slate-200/25" />
                </div>

                <div className="px-4 pb-4 pt-4 text-center">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <div className="mt-1 text-sm text-slate-700">{p.price}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {promoCards.map((card) => (
              <article key={card.title} className="group overflow-hidden rounded-lg bg-neutral-50">
                <div className="group relative aspect-[4/5] w-full overflow-hidden bg-white">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-95"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-slate-200/0 transition-colors duration-300 group-hover:bg-slate-200/30" />
                </div>
                <div className="px-4 pb-5 pt-4 text-left">
                  <h2 className="text-lg font-bold text-slate-900">{card.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer id="about" className="mt-20 border-t pt-8 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} YourNextStore — Built with care.</div>
            <div className="flex gap-4">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
