import Heading from "../common/Heading";

const featureIcons = [
  "../..//favicon/logo1.svg",
  "../..//favicon/logo2.svg",
  "../..//favicon/logo3.svg",
  "../..//favicon/logo4.svg",
  "../..//favicon/logo5.svg",
];

const Feature: React.FC = () => {
  return (
    <div className="container mx-auto p-4 sm:px-8 lg:px-16 py-8">
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
