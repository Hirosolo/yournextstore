import Header from "../../../components/Header";
import FavoriteButton from "../../../components/FavoriteButton";
import PageFooter from "../../../components/PageFooter";
import ProductImageGallery from "../../../components/ProductImageGallery";

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

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-600">{breadcrumb}</div>

        {/* Product Container - 2 Column Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Column - Image Gallery */}
          <div className="flex flex-col">
            <ProductImageGallery
              mainImage={product.mainImage}
              thumbnails={product.thumbnails}
              productTitle={product.title}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col gap-6">
            {/* Product Title */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl font-bold text-slate-900">
                {product.title}
              </h1>
              <FavoriteButton
                productId={product.id}
                productTitle={product.title}
              />
            </div>

            {/* Category/Brand (left) and Rating (right) */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                <div>{product.category}</div>
                <div className="mt-1">Brand: {product.brand}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(product.rating) ? "#FBBF24" : "#d1d5db"}
                      stroke="currentColor"
                      strokeWidth="0"
                    >
                      <polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.27 24.96 12 18.53 3.73 24.96 6.82 16.70 0 10.27 8.91 10.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-baseline gap-4">
                {isOnSale ? (
                  <>
                    <span className="text-4xl font-extrabold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-lg text-slate-500 line-through">
                      {product.originalPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-slate-900">
                    {product.price}
                  </span>
                )}
              </div>

              {isOnSale && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 text-sm font-semibold rounded-full">
                    {discount}% OFF
                  </span>
                </div>
              )}
            </div>

            {/* Short Description */}
            <p className="text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="text-sm font-medium">
                Quantity:
              </label>
              <select
                id="quantity"
                defaultValue="1"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
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
            <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              CHOOSE OPTIONS & BUY NOW
            </button>

            {/* Accepted Payment Methods */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">We accept:</h3>
              <div className="flex flex-wrap gap-3">
                {product.paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors"
                    title={method.name}
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-8 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Tags */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <div className="mx-auto max-w-7xl px-6">
        <PageFooter />
      </div>
    </div>
  );
}
