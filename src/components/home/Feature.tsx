import Heading from "../common/Heading";
import logo1 from "../../assets/favicon/logo1.svg";
import logo2 from "../../assets/favicon/logo2.svg";
import logo3 from "../../assets/favicon/logo3.svg";
import logo4 from "../../assets/favicon/logo4.svg";
import logo5 from "../../assets/favicon/logo5.svg";

const featureIcons = [logo1, logo2, logo3, logo4, logo5];

const Feature: React.FC = () => {
  return (
    <div className="rt-container py-8">
      <Heading
        level={2}
        text="Featured In"
        customHeadingStyle="mb-8 text-center"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {featureIcons.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Featured logo ${index + 1}`}
            className="w-24 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
