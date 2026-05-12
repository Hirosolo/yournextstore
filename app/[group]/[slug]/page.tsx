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
  const breadcrumb = `${group.toUpperCase()} / ${slug.toUpperCase()}`;

  const sampleProducts = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: `${slug.replace(/[-_]/g, " ")} Product ${i + 1}`,
    price: "$29.99",
    img: "/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785433426165473547536d4e57625668366255527366475a735833526c63335266546a597a636b645a61474a7a5a6c566c57466c6f62324578656d51775155683.avif",
    tags: ["sample"],
  }));

  return (
    <div className=" bg-white text-[#0f172a] min-h-screen">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-600">{breadcrumb}</div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProducts.map((p) => (
            <ProductItemCard key={p.id} title={p.title} price={p.price} img={p.img} tags={p.tags} />
          ))}
        </section>
      </main>

      <div className="mx-auto max-w-7xl px-6">
        <PageFooter />
      </div>
    </div>
  );
}
