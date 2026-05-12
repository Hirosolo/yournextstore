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
    <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.18)] md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-95"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent transition-colors duration-300 group-hover:from-white/10" />
            </div>
            <div className="px-5 pb-6 pt-4 text-left">
              <h2 className="text-lg font-bold text-slate-900">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}