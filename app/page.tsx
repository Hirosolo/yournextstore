

import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import PromoSection from "./components/PromoSection";
import PageFooter from "./components/PageFooter";

const products = [
  {
    id: 1,
    title: "Everyday Tote",
    price: "$49",
    img: "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
    href: "/bags/totes/1",
  },
  {
    id: 2,
    title: "Classic Bottle",
    price: "$24",
    img: "/Default_product_image_of_a_bottle_for_ecommerce_website_minim_2-GOjCmiuwEPPLwzFxtjnHCNSJ7Zy5Ut.jpg",
    href: "/bottles/drinkware/2",
  },
  {
    id: 3,
    title: "Soft Tee",
    price: "$29",
    img: "/Default_product_image_of_a_tshirt_for_ecommerce_website_minim_32028129-JHMZe8xJ28tll9bGQINl0AXFfYByFc.jpg",
    href: "/apparel/tees/3",
  },
  {
    id: 4,
    title: "Limited Cap",
    price: "$19",
    img: "/Default_product_imag_of_a_yellow_bag_for_ecommerce_website_1-3dgyNymA8r5pCl7OG4nEirKWxLjj3Y.jpg",
    href: "/apparel/caps/4",
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

const trustPoints = [
  "Fast shipping on every order",
  "Curated drops refreshed weekly",
  "Secure checkout powered by Stripe",
  "Easy returns on all essentials",
];

const shopStories = [
  {
    title: "Weekend carry",
    description: "Totes, bottles, and everyday picks built for quick grabs and long days.",
    img: "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
  },
  {
    title: "Studio essentials",
    description: "Minimal layers and clean accessories that keep the look simple and sharp.",
    img: "/Default_product_image_of_a_tshirt_for_ecommerce_website_minim_32028129-JHMZe8xJ28tll9bGQINl0AXFfYByFc.jpg",
  },
  {
    title: "Bottle & go",
    description: "Portable favorites with an elevated finish for work, travel, and home.",
    img: "/MDB8YWNjdF8xT3BaeG5GSmNWbVh6bURsfGZsX3Rlc3RfVkxjN29KOEF1TG9NR0hLQlZwblRDWlJM00MJ1j137t-bnJi98uwa5mJ73gdBQ6jxyMZrERJks.avif",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-900">
      <Header />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-12 md:py-16">
        <HeroSection />

        <section className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-7 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.22)] backdrop-blur md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                Why shoppers come back
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                A storefront that feels active, curated, and ready to browse.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                Add the essentials, surface the best sellers, and give visitors a few clear reasons to keep exploring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 shadow-sm">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Shop by mood</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                A few more paths into the catalog.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {shopStories.map((story) => (
              <article key={story.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.18)]">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={story.img} alt={story.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="space-y-2 px-5 py-5">
                  <h3 className="text-lg font-semibold text-slate-900">{story.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FeaturedProductsSection products={products} />

        <section className="rounded-3xl border border-slate-200 bg-sky-50 px-6 py-8 text-slate-900 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.18)] md:px-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Start here</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                Build a landing page that keeps moving after the hero.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                A short narrative, a few trust signals, and a secondary call-to-action make the page feel intentional instead of empty.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Browse products
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <PromoSection cards={promoCards} />
        <PageFooter />
      </main>
    </div>
  );
}
