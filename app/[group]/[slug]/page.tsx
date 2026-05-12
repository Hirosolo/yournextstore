import Header from "../../components/Header";
import PageFooter from "../../components/PageFooter";
import ProductItemCard from "../../components/ProductItemCard";

type Props = {
  params: Promise<{
    group: string;
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { group, slug } = await params;
  const breadcrumb = `<${group}/${slug}>`;

  const sampleProduct = {
    id: 1,
    title: `${slug.replace(/[-_]/g, " ")}`,
    price: "$29.99",
    img: "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
    tags: ["tag"],
  };

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-600">{breadcrumb}</div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <ProductItemCard title={sampleProduct.title} price={sampleProduct.price} img={sampleProduct.img} tags={sampleProduct.tags} />
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Details</h4>
              <p className="mt-2 text-sm text-slate-600">Sample detail text for {sampleProduct.title}.</p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">More from</h4>
              <p className="mt-2 text-sm text-slate-600">Showing more items from {group} / {slug}</p>
            </div>
          </div>
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-6">
        <PageFooter />
      </div>
    </>
  );
}
