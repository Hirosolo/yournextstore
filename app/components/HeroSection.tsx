import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-8">
      <div className="rounded-xl bg-neutral-50 p-6 shadow-sm">
        <div className="relative flex items-center justify-center">
          <Image
            src="/OpenAI20Playground202026-01-1420at2013.png"
            alt="hero"
            width={1600}
            height={700}
            className="w-full rounded-lg object-cover"
          />

          <div className="absolute left-6 top-1/2 max-w-2xl -translate-y-1/2 text-left md:left-16">
            <div className="rounded-md p-6">
              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Launch your store
                <br />
                in minutes.
              </h1>
              <p className="mt-4 text-lg text-slate-600">Stripe-native. Built for the agentic future.</p>
              <div className="mt-6">
                <a href="#products" className="inline-block rounded-full bg-slate-900 px-6 py-3 text-white">
                  Try it today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}