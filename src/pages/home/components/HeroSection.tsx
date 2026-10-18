import heroLight from "../../../assets/hero/hero-light.png";
import heroDark from "../../../assets/hero/hero-dark.png";
// import heroLightMobile from "../../../assets/hero/hero-light-mobile.png";
// import heroDarkMobile from "../../../assets/hero/hero-light-mobile.png";
import { useTheme } from "../../../hooks/useTheme";

function HeroSection() {
  const { theme } = useTheme();
  return (
    <section className="relative px-32">
      <img
        src={theme === "dark" ? heroDark : heroLight}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div></div>
    </section>
  );
}

export { HeroSection };
