import laptopAvif from "../../../assets/category/laptop.avif";
import laptopWebp from "../../../assets/category/laptop.webp";
import phoneAvif from "../../../assets/category/phones.avif";
import phoneWebp from "../../../assets/category/phones.webp";
import audioAvif from "../../../assets/category/audio.avif";
import audioWebp from "../../../assets/category/audio.webp";
import watchAvif from "../../../assets/category/watch.avif";
import watchWebp from "../../../assets/category/watch.webp";
import { Button } from "../../../components/Button";
import { Link } from "react-router";

function Categories() {
  return (
    <section className="mx-6 md:mx-8 xl:mx-32 py-8 md:py-16 lg:py-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-tech tracking-wide">
          Explore our Entire Collection
        </h1>

        <p className="text-lg md:text-xl mt-4">
          From everyday essentials to premium technology, find the right devices
          for the way you live and work.
        </p>

        <Button to="/products" className="uppercase mt-5">
          Find your next device
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-24 mt-20">
        {categories.map((category, index) => (
          <CategoriesRow
            key={category.title}
            {...category}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

export { Categories };

interface CategoriesRowProps {
  title: string;
  description: string;
  highlights: string[];
  image: {
    avif: string;
    webp: string;
    alt: string;
  };
  reverse?: boolean;
  buttonLabel: string;
  to: string;
  imageDetails: {
    imageDesciption: string;
    imageTitle: string;
    callToAction: string;
  };
}

const categories = [
  // laptop
  {
    title: "Performance without limits",
    description:
      "From everyday productivity to demanding workloads, explore laptops designed to keep you productive, creative and connected.",
    highlights: [
      "Latest-generation processors",
      "Fast SSD storage",
      "High-resolution displays",
      "Configurations with different RAM capacities",
    ],
    image: { avif: laptopAvif, webp: laptopWebp, alt: "A laptop" },
    buttonLabel: "View Laptops",
    to: "/products",
    imageDetails: {
      imageDesciption: "Powerful performance, wherever you work.",
      imageTitle: "Laptops",
      callToAction: "Explore laptops",
    },
  },

  // phone
  {
    title: "Your next phone starts here",
    description:
      "Discover the latest smartphoneAvifs from trusted brands, with options ranging from everyday essentials to premium flagship performance.",
    highlights: [
      "Advanced camera systems",
      "High-refresh-rate displays",
      "Fast charging and long-lasting batteries",
      "Powerful processors",
    ],
    image: { avif: phoneAvif, webp: phoneWebp, alt: "A phone" },
    buttonLabel: "View Phones",
    to: "/products",
    imageDetails: {
      imageDesciption: "Pocket-Sized. Power-Packed",
      imageTitle: "Phones",
      callToAction: "Explore phones",
    },
  },

  // audio
  {
    title: "Experience Better Sound",
    description:
      "Explore headphoneAvifs and earbuds with rich sound, crystal-clear calls and noise cancellation for a more immersive listening experience.",
    highlights: [
      "Immersive sound quality",
      "Crystal-clear calls",
      "Active noise cancellation",
    ],
    image: { avif: audioAvif, webp: audioWebp, alt: "A Headphone" },
    buttonLabel: "View Audios",
    to: "/products",
    imageDetails: {
      imageDesciption: "Every beat. Every detail.",
      imageTitle: "Audio",
      callToAction: "Explore audio",
    },
  },

  // wearables
  {
    title: "Stay connected to your day",
    description:
      "Discover smartwatchAvifes and fitness trackers that help you monitor activity, track workouts and stay on top of everyday notifications.",
    highlights: [
      "Activity and fitness tracking",
      "Health monitoring sensors",
      "Smart notifications",
    ],
    image: { avif: watchAvif, webp: watchWebp, alt: "A watch" },
    buttonLabel: "View Wearables",
    to: "/products",
    imageDetails: {
      imageDesciption: "Smarter ways to stay connected",
      imageTitle: "Wearables",
      callToAction: "Explore wearables",
    },
  },
];

function CategoriesRow({
  title,
  description,
  highlights,
  image,
  imageDetails,
  reverse = false,
  buttonLabel,
  to,
}: CategoriesRowProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
      <Link
        to={to}
        className={`group ${reverse ? "" : "lg:order-last"} relative block rounded-xl overflow-hidden`}
      >
        <picture>
          <source srcSet={image.avif} type="image/avif" />
          <source srcSet={image.webp} type="image/webp" />
          <img
            src={image.webp}
            alt={image.alt}
            className="w-full h-auto rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </picture>
        <div className="image-blur pointer-events-none absolute inset-x-0 bottom-0 h-2/5" />
        <div className="image-scrim pointer-events-none absolute inset-x-0 bottom-0 h-2/5" />

        <div className="absolute left-8 bottom-8 text-white">
          <span className="font-mono uppercase tracking-wide text-sm">
            {imageDetails.imageDesciption}
          </span>
          <h3 className="text-3xl mt-2 mb-2">{imageDetails.imageTitle}</h3>
          <span className="font-sans text-sm">{imageDetails.callToAction}</span>
        </div>
      </Link>

      <div>
        <h3 className="text-3xl lg:text-4xl font-sans mb-3">{title}</h3>
        <p className="text-md mb-6">{description}</p>
        <div>
          <p className="font-sans text-md">Feature Highlights:</p>
          <ul className="list-disc pl-5 text-md mb-8">
            {highlights.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
        <Button to={to}>{buttonLabel}</Button>
      </div>
    </div>
  );
}
