import { LuShieldCheck, LuCoins, LuTruck } from "react-icons/lu";

const details: string[] = [
  "M4 Max",
  "40-core GPU",
  "Up to 128GB unified memory",
  "3000-nit always-on",
  "Lossless USB-C audio",
  "8TB SSD configurations",
];

const items = [...details, ...details];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden}>
      {items.map((text, i) => (
        <div key={`${text}-${i}`} className="flex shrink-0 items-center">
          <span className="px-8 py-4 text-xs font-tech italic uppercase tracking-widest text-on-surface-variant">
            {text}
          </span>
          <span className="size-1.5 rounded-full bg-primary" />
        </div>
      ))}
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative border-t border-b border-surface-variant pb-20">
      <div className="overflow-hidden bg-outline-variant/20 border-b border-surface-variant">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>

      <div className="bg-outline-variant/20 h-10 inset-0" />

      <div className="mx-8 pt-6 md:mx-12 lg:mx-24 xl:mx-32 md:pt-10">
        <div>
          <span className="uppercase text-[11px] tracking-wide font-bold text-primary">
            The Sam Gadgets standard
          </span>
          <h1 className="text-4xl md:text-5xl mt-3 mb-10 font-tech">
            Why Choose Us?
          </h1>
        </div>

        {/* Card Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-6 [&_svg]:text-primary">
          {/* First Card */}
          <div className="w-full lg:w-1/4 py-6 px-6 rounded-2xl bg-surface-container-low dark:bg-surface-container shadow-2xl dark:shadow-[0_20px_50px_-15px_rgb(120_160_255/0.3)]">
            <LuTruck size={30} />
            <h2 className="font-bold font-tech mt-2 mb-3">
              Free shipping, easy returns
            </h2>
            <p className="text-sm">
              Free over $100, with 30 days to return your device (60 for
              members).
            </p>
          </div>

          {/* Second card */}
          <div className="w-full lg:w-1/4 bg-primary/15 rounded-2xl py-4 px-6 shadow-2xl lg:mt-20 dark:shadow-[0_20px_50px_-15px_rgb(120_160_255/0.3)]">
            <LuShieldCheck size={30} />
            <h2 className="font-bold font-tech mt-2 mb-3">
              Protected for 3 years
            </h2>
            <p className="text-sm">
              Add Care once to cover accidental damage and battery replacement.
              No renewals.
            </p>
          </div>

          {/* Third Card */}
          <div className="w-full lg:w-1/4 py-6 rounded-2xl px-6 bg-surface-container-low dark:bg-surface-container shadow-2xl dark:shadow-[0_20px_50px_-15px_rgb(120_160_255/0.3)]">
            <LuCoins size={30} />
            <h2 className="font-bold font-tech mt-2 mb-3">
              Rewarded for buying
            </h2>
            <p className="text-sm">
              Earn store credit on every device you buy. Spend it on your next
              order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
