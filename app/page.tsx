import RangeSection from "./components/rang-section";
import HeroSection from "./components/hero-section";
import OurProduct from "./components/our-products";
import ExploreSection from "./components/explore-section";
import ShareSetup from "./components/share-setup";

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
