// Importing necessary components for the Home page
import HeroSection from "../../components/home/HeroSection";
import Feature from "../../components/home/Feature";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import HelpPeople from "../../components/home/HelpPeople";
import BeginSection from "../../components/home/BeginSection";
import PropertyListing from "../../components/home/PropertyListing";

// Home component definition
export default function Home() {
  return (
    <>
      {/* HeroSection displays the main banner or introductory section */}
      <HeroSection />

      {/* Feature showcases the key features of the product or service */}
      <Feature />

      {/* PropertyListing presents a list of available properties */}
      <PropertyListing />

      {/* WhyChooseUs highlights the reasons to choose the service */}
      <WhyChooseUs />

      {/* HelpPeople provides assistance or support information */}
      <HelpPeople />

      {/* BeginSection encourages users to take the next step */}
      <BeginSection />
    </>
  );
}
