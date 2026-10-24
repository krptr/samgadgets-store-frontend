const details: string[] = [
  "M4 Max",
  "40-core GPU",
  "Up to 128GB unified memory",
  "3000-nit always-on",
  "Lossless USB-C audio",
  "8TB SSD configurations",
];

// Repeated so one copy is always wider than the screen
const items = [...details, ...details];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden}>
      {items.map((text, i) => (
        <div key={`${text}-${i}`} className="flex shrink-0 items-center">
          <span className="px-8 py-4 text-xs font-tech uppercase tracking-widest text-on-surface-variant">
            {text}
          </span>
          <span className="size-1.5 rounded-full bg-primary" />
        </div>
      ))}
    </div>
  );
}

function ExtraDetail() {
  return (
    <section className="border-t-2 border-b-2 border-surface-variant">
      <div className="overflow-hidden bg-outline-variant/20 border-b border-surface-variant">
        <div className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
      <div>Warranty</div>
    </section>
  );
}

export { ExtraDetail };
