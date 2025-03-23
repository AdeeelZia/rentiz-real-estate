import Heading from "../common/Heading";
import Button from "../common/Button";

export default function HeroSection() {
  const images = [
    { src: "../..//image/find-home1.jpg", alt: "Modern building exterior" },
    { src: "../..//image/find-home2.jpg", alt: "Modern interior living space" },
  ];

  return (
    <section
      className="relative w-full bg-[#0d1117] py-12 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(270deg, #1A242F 0.01%, rgba(26, 36, 47, 0) 82.97%)",
      }}
    >
      <div className="container mx-auto p-4 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-8">
        <div className="flex gap-2 md:w-1/2">
          {images.map((image, index) => (
            <div className="w-1/2" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full max-w-[21.875rem] max-h-[34.438rem] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <Heading
            level={2}
            text="We Help People To Find Homes"
            customHeadingStyle="!text-3xl lg:!text-5xl !max-w-md !text-white !mb-4"
          />
          <p className="text-sm lg:text-base text-gray-400 mb-6">
            Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa
            consectetur. Neque, vestibulum sed varius magna et at. Eu,
            adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
            Blandit aliquam donec sed morbi congue eget lorem viverra porta id
            lobortis.
          </p>
          <Button
            type="button"
            text="Get in Touch"
            customButtonStyle="py-3 px-6 max-w-fit !text-white !bg-[#00b894]"
          />
        </div>
      </div>
    </section>
  );
}
