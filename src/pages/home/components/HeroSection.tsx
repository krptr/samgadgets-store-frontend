import phone from "../../../assets/hero/phones.png";
// import laptop from "../../../assets/hero/laptop.png";
// import earbuds from "../../../assets/hero/earbuds.png";
// import smartwatch from "../../../assets/hero/smartwatch.png";
// import headPhones from "../../../assets/hero/Headphones.png";

function HeroSection() {
  // const { theme } = useTheme();
  return (
    <section className="relative flex flex-col justify-between items-center pt-32">
      {/* Hero Texts */}
      <div className="text-center">
        <h1 className="text-5xl mb-4">
          The Gadgets You Want. The Value You Need.
        </h1>
        <p>
          Phones, laptops, audio and wearables for the way you work, create and
          connect.
          <br />
          Add optional 3-year protection for extra peace of mind.
        </p>
      </div>

      {/* Hero Images */}
      <div className="relative h-122 w-full overflow-hidden">
        <img
          src={phone}
          alt="A Phone"
          className="relative z-10 mx-auto block drop-shadow-[0_20px_10px_rgb(0_0_0/0.4)]"
        />

        {/* <img
          src={laptop}
          alt="A laptop"
          className="absolute left-0 top-10 w-48"
        /> */}

        {/* <img
          src={smartwatch}
          alt="A smartwatch"
          className="absolute left-0 top-10 w-48"
        /> */}

        {/* <img
          src={earbuds}
          alt=" A pair of earbuds"
          className="absolute left-0 top-10 w-48"
        /> */}

        {/* <img
          src={headPhones}
          alt="Headphones"
          className="absolute right-0 top-10 w-48"
        /> */}

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-120 transition-transform duration-300 scale-110 animate-nudge motion-reduce:animate-none hover:[animation-play-state:paused]
         filter-[drop-shadow(0_0_6px_rgb(120_160_255/0.9))_drop-shadow(0_25px_30px_rgb(0_0_0/0.5))]"
        >
          <div
            className="flex gap-4 justify-center py-10 bg-tertiary-container/60 backdrop-blur-3xl border-2 border-primary
           [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]"
          >
            <button className="bg-primary py-3 px-5 rounded-3xl text-on-primary text-sm font-tech">
              Shop all devices
            </button>
            <button className="bg-secondary border-2 border-surface-variant rounded-3xl py-3 px-5 text-sm font-tech text-on-secondary">
              Join Rewards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
