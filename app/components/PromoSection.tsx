import Image from "next/image";

type PromoCard = {
  title: string;
  description: string;
  img: string;
};

type PromoSectionProps = {
  cards: PromoCard[];
};

export default function PromoSection({ cards }: PromoSectionProps) {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="group overflow-hidden rounded-lg bg-neutral-50">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
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
  );
}