import Header from "../../../components/Header";
import FavoriteButton from "../../../components/FavoriteButton";
import PageFooter from "../../../components/PageFooter";
import ProductImageGallery from "../../../components/ProductImageGallery";
import Image from "next/image";

type Props = {
  params: Promise<{
    group: string;
    slug: string;
    productId: string;
  }>;
};

// Sample product data - in a real app, this would come from your database or API
const getProductData = (productId: string) => {
  return {
    id: productId,
    title: "Premium Leather Tote Bag",
    price: "$89.99",
    originalPrice: "$129.99",
    category: "Bags & Accessories",
    brand: "Cognac Co.",
    rating: 4.5,
    reviews: 128,
    quantity: 8,
    mainImage:
      "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
    thumbnails: [
      "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
      "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
      "/Default_product_imag_of_a_yellow_bag_for_ecommerce_website_1-3dgyNymA8r5pCl7OG4nEirKWxLjj3Y.jpg",
    ],
    description:
      "Elegantly crafted leather tote bag perfect for everyday use. Features premium Italian leather, spacious interior compartments, and durable handles.",
    paymentMethods: [
      { name: "Visa", image: "/payment/visa.png" },
      { name: "Mastercard", image: "/payment/mastercard.png" },
      { name: "American Express", image: "/payment/americanexpress.png" },
      { name: "Discover", image: "/payment/discover.png" },
      { name: "PayPal", image: "/payment/paypal.png" },
      { name: "Apple Pay", image: "/payment/applepay.png" },
      { name: "Google Pay", image: "/payment/ggpay.png" },
      { name: "Afterpay", image: "/payment/afterpay.png" },
    ],
    tags: ["Drinkware", "Batman"],
  };
};

export default async function ProductPage({ params }: Props) {
  const { group, slug, productId } = await params;
  const product = getProductData(productId);
  const priceNum = parseFloat(String(product.price).replace(/[^0-9.]/g, "")) || 0;
  const originalPriceNum =
    parseFloat(String(product.originalPrice).replace(/[^0-9.]/g, "")) || 0;
  const isOnSale = originalPriceNum > priceNum && priceNum > 0;
  const discount = isOnSale
    ? Math.round(((originalPriceNum - priceNum) / originalPriceNum) * 100)
    : 0;
  const breadcrumb = `${group.toUpperCase()} / ${slug.toUpperCase()} / ${product.title}`;

  return (
    <div className="bg-white text-[#0f172a] min-h-screen">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-xs text-slate-600">{breadcrumb}</div>

        {/* Product Container - 2 Column Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {/* Left Column - Image Gallery */}
          <div className="flex flex-col">
            <ProductImageGallery
              mainImage={product.mainImage}
              thumbnails={product.thumbnails}
              productTitle={product.title}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col gap-4">
            {/* Product Title */}
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {product.title}
              </h1>
              <FavoriteButton
                productId={product.id}
                productTitle={product.title}
              />
            </div>

            {/* Category/Brand (left) and Rating (right) */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-600">
                <div>{product.category}</div>
                <div className="mt-0.5">Brand: {product.brand}</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? "#FBBF24" : "#d1d5db"}
                      stroke="currentColor"
                      strokeWidth="0"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 24.96 12 18.53 3.73 24.96 6.82 16.70 0 10.27 8.91 10.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div className="flex items-baseline gap-3">
                {isOnSale ? (
                  <>
                    <span className="text-3xl font-extrabold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-base text-slate-500 line-through">
                      {product.originalPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-slate-900">
                    {product.price}
                  </span>
                )}
              </div>

              {isOnSale && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 px-2 py-0.5 text-xs font-semibold rounded-full">
                    {discount}% OFF
                  </span>
                </div>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2">
              <label htmlFor="quantity" className="text-xs font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                defaultValue="1"
                className="rounded-md border border-slate-300 px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                {Array.from({ length: Math.min(10, product.quantity) }).map(
                  (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors">
              CHOOSE OPTIONS & BUY NOW
            </button>

            {/* Accepted Payment Methods */}
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-xs font-semibold text-slate-900 mb-2">We accept:</h3>
              <div className="flex flex-wrap gap-2">
                {product.paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-1 border border-slate-200 rounded-md bg-white hover:bg-slate-50 transition-colors"
                    title={method.name}
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-6 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Tags */}
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-xs font-semibold text-slate-900 mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Product Details / FAQ / Reviews */}
        <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Product details
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Designed for everyday carry
                </h2>
              </div>

              <p className="text-sm leading-7 text-slate-700">
                This premium leather tote is built to handle workdays, weekend
                errands, and travel with ease. The reinforced handles, structured
                base, and spacious interior make it a reliable daily essential.
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={product.mainImage}
                    alt={`${product.title} detail view`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-600">
                  Premium grain leather with durable stitching and a soft
                  structured silhouette.
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Most asked questions
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      question: "How much does it hold?",
                      answer:
                        "It fits a tablet, notebook, wallet, phone, keys, and daily essentials without losing its shape.",
                    },
                    {
                      question: "Is the leather genuine?",
                      answer:
                        "Yes. The tote uses premium Italian leather with a smooth finish and reinforced stitching.",
                    },
                    {
                      question: "How should I clean it?",
                      answer:
                        "Wipe gently with a soft dry cloth and keep it away from prolonged moisture or direct heat.",
                    },
                  ].map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-xl border border-slate-200 bg-white px-4 py-3"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Reviews
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Customer Reviews
                </h2>
              </div>
              <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                Write a Review
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-4xl font-bold text-slate-900">5/5</div>
                <div className="mt-2 flex gap-1 text-yellow-400" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 24.96 12 18.53 3.73 24.96 6.82 16.70 0 10.27 8.91 10.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-teal-500">
                  100% would recommend
                </p>
                <p className="text-sm text-slate-600">this product to a friend</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:w-[340px] sm:grid-cols-1">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Filter by star rating</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sm:pt-2">
                  <div className="text-sm font-semibold text-slate-900">Sort by</div>
                  <select className="mt-3 h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-700 shadow-sm outline-none">
                    <option>Highest Rating</option>
                    <option>Most Recent</option>
                    <option>Most Helpful</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              {[
                {
                  name: "A***h",
                  handle: "@anonymous",
                  date: "4 months ago",
                  text: "Goods as described, excellent, recommendation",
                },
                {
                  name: "P***y",
                  handle: "@anonymous",
                  date: "5 months ago",
                  text: "Great quality and fast delivery.",
                },
              ].map((review) => (
                <article key={review.name} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 24.96 12 18.53 3.73 24.96 6.82 16.70 0 10.27 8.91 10.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-slate-900">{review.name}</h3>
                      <p className="text-sm text-slate-500">{review.handle}</p>
                    </div>
                    <p className="text-sm text-slate-500">{review.date}</p>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-slate-700">{review.text}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <span>Helpful?</span>
                    <button className="rounded-md border border-slate-200 px-3 py-1 text-slate-700 transition hover:bg-slate-50">
                      👍 0
                    </button>
                    <button className="rounded-md border border-slate-200 px-3 py-1 text-slate-700 transition hover:bg-slate-50">
                      👎 0
                    </button>
                    <button className="font-medium text-slate-500 hover:text-slate-700">
                      Report review
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-4">
        <PageFooter />
      </div>
    </div>
  );
}
