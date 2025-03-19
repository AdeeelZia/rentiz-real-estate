import Heading from "../common/Heading";

const featureIcons = [
  "/favicon/logo1.svg",
  "/favicon/logo1.svg",
  "/favicon/logo1.svg",
  "/favicon/logo1.svg",
  "/favicon/logo1.svg",
];

const Feature = () => {
  return (
    <div className="rt-container py-8">
      <Heading level={2} text="Featured In" customHeadingStyle="mb-8 text-center" />
      
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
