import phone from "../../../assets/hero/phones.png";
import { useNavigate } from "react-router";
// import laptop from "../../../assets/hero/laptop.png";
// import earbuds from "../../../assets/hero/earbuds.png";
// import smartwatch from "../../../assets/hero/smartwatch.png";
// import headPhones from "../../../assets/hero/Headphones.png";

function HeroSection() {
  // const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col justify-between items-center mx-8 lg:mx-0 pt-16 md:pt-24 lg:pt-32">
      {/* Hero Texts */}
      <div className="relative text-center">
        <div className="relative">
          <h1 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-black font-tech tracking-wide">
            The Gadgets You Want. <br />
            <span className="text-primary tracking-wide">
              The Value You Need.
            </span>
          </h1>
          <p className="text-sm lg:text-base mb-5">
            Phones, laptops, audio and wearables for the way you work, create
            and connect.
            <br />
            Add optional 3-year protection for accidental damages.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => navigate("/products")}
              className="rounded-3xl bg-primary px-6 py-3 font-tech text-sm text-on-primary transition-transform duration-300 hover:scale-105"
            >
              Shop all devices
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="rounded-3xl border border-outline-variant px-6 py-3 font-tech text-sm transition-colors hover:text-primary"
            >
              Join Rewards
            </button>
          </div>
        </div>
      </div>

      {/* Hero Images */}
      <div className="relative h-40 md:h-70 lg:h-120 w-full overflow-hidden">
        <img
          src={phone}
          alt="A Phone"
          className="z-10 mx-auto block drop-shadow-[0_20px_10px_rgb(0_0_0/0.4)] lg:scale-105"
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
      </div>
    </section>
  );
}

export { HeroSection };
