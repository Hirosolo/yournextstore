
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
        <HeroSection />
        <FeaturedProductsSection products={products} />
        <PromoSection cards={promoCards} />
        <PageFooter />
      </main>
    </div>
  );
}
