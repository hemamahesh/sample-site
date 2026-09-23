import { HeroSection } from "@/sections/HeroSection";
import { HomepageStats } from "@/sections/HomepageStats";
import { CompanyOverview } from "@/sections/CompanyOverview";
import { Certifications } from "@/sections/Certifications";
import { ProductCategories } from "@/sections/ProductCategories";
import { ManufacturingCapability } from "@/sections/ManufacturingCapability";
import { IndustriesServed } from "@/sections/IndustriesServed";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { DealerCTA } from "@/sections/DealerCTA";
import { LocationMap } from "@/sections/LocationMap";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomepageStats />
      <CompanyOverview />
      <Certifications />
      <ProductCategories />
      <ManufacturingCapability />
      <IndustriesServed />
      <WhyChooseUs />
      <DealerCTA />
      <LocationMap />
    </>
  );
}
