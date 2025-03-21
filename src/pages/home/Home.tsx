import HeroSection from "../../components/home/HeroSection";
import Feature from "../../components/home/Feature";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import HelpPeople from "../../components/home/HelpPeople";
import BeginSection from "../../components/home/BeginSection";
import PropertyListing from "../../components/home/PropertyListing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <PropertyListing />
      <WhyChooseUs />
      <HelpPeople />
      <BeginSection />
    </>
  );
}
