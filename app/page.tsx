import RangeSection from "./components/sections/rang-section";
import HeroSection from "./components/sections/hero-section";
import OurProduct from "./components/sections/our-products";
import ExploreSection from "./components/sections/explore-section";
import ShareSetup from "./components/sections/share-setup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RangeSection />
      <OurProduct />
      <ExploreSection />
      <ShareSetup />
    </>
  );
}
