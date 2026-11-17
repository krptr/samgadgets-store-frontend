import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Categories } from "./components/Categories";
import { ProductsShowCase } from "./components/ProductsShowCase";

function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Categories />
      <ProductsShowCase />
    </>
  );
}

export { HomePage };
