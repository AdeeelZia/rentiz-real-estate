import Button from "../common/Button";
import Heading from "../common/Heading";

// Reusable Dropdown Component
const SearchDropdown = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => (
  <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4">
    <p className="text-sm text-gray-500 mb-1">{label}</p>
    <select className="w-full font-semibold text-gray-800 bg-white focus:outline-none">
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  </div>
);

// Search Bar Component
const HeroSearchBar = () => {
  return (
    <div className="w-full max-w-[50rem] bg-white rounded-md shadow-md overflow-hidden flex flex-col md:flex-row">
      <SearchDropdown label="Purpose" options={["Buy", "Rent", "Sell"]} />
      <SearchDropdown
        label="Location"
        options={["Toronto, Canada", "Vancouver, Canada", "Montreal, Canada"]}
      />
      <SearchDropdown
        label="Type"
        options={["Industrial Home", "Apartment", "Villa"]}
      />
      <div className="flex items-center justify-center p-4 md:p-0">
        <Button
          type="button"
          text="Search"
          customButtonStyle="px-10 py-3 md:py-0 !bg-[#1AA090] w-full md:w-auto"
        />
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="rt-container py-12">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <Heading
            level={1}
            text="Perfect way to buy and sell a home"
            customHeadingStyle="!text-[2.5rem] sm:!text-[3.5rem] lg:!text-[4.25rem] leading-tight"
          />
          <p className="mt-4 text-[#D6D6D6] leading-relaxed max-w-xl">
            Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
            massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
            purus non.
          </p>
          <div className="mt-6">
            <HeroSearchBar />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/image/card-img.jfif"
            alt="Home search illustration"
            width={700}
            height={645}
            className="object-cover w-full h-auto max-w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
