import Header from "../../../components/Header";
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
    mainImage:
      "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
    thumbnails: [
      "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
      "/Default_product_image_of_a_bag_for_ecommerce_website_12028129-BHMR9OOrV50zy2Wg0XeiKWDIKdVTNB.jpg",
      "/Default_product_imag_of_a_yellow_bag_for_ecommerce_website_1-3dgyNymA8r5pCl7OG4nEirKWxLjj3Y.jpg",
    ],
    description:
      "Elegantly crafted leather tote bag perfect for everyday use. Features premium Italian leather, spacious interior compartments, and durable handles.",
    details: [
      "Material: 100% Premium Leather",
      "Dimensions: 14\" x 12\" x 6\"",
      "Weight: 2.1 lbs",
      "Color: Cognac Brown",
      "Compartments: 2 main sections, 4 interior pockets",
    ],
    inStock: true,
    quantity: 15,
  };
};

export default async function ProductPage({ params }: Props) {
  const { group, slug, productId } = await params;
  const product = getProductData(productId);
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
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {product.title}
              </h1>
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
                      fill={i < Math.floor(product.rating) ? "#D6C19A" : "#d1d5db"}
                      stroke="currentColor"
                      strokeWidth="1"
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
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-900">
                {product.price}
              </span>
              <span className="text-lg text-slate-500 line-through">
                {product.originalPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-700 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="space-y-2 py-6 border-t border-b">
              {product.details.map((detail, idx) => (
                <p key={idx} className="text-sm text-slate-700">
                  {detail}
                </p>
              ))}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  product.inStock ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-sm font-medium text-slate-700">
                {product.inStock
                  ? `In Stock (${product.quantity} available)`
                  : "Out of Stock"}
              </span>
            </div>

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
              Add to Cart
            </button>

            {/* Wishlist Button */}
            <button className="w-full border-2 border-slate-900 text-slate-900 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
              </svg>
              Add to Wishlist
            </button>

            {/* Additional Info */}
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>✓ Free shipping on orders over $100</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Genuine product warranty</p>
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
