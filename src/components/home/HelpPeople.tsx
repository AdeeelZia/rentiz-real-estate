import Heading from "../common/Heading";
import Button from "../common/Button";
import home1 from "../../assets/image/find-home1.jpg"
import home2 from "../../assets/image/find-home2.jpg"

export default function HeroSection() {
  const images = [
    {src: home1, alt: "Modern building exterior"},
    {src: home2, alt: "Modern interior living space"},
  ];

  return (
    <section
      className="relative w-full bg-[#0d1117] py-12 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(270deg, #1A242F 0.01%, rgba(26, 36, 47, 0) 82.97%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex gap-2 md:w-1/2">
          {images.map((image, index) => (
            <div className="w-1/2" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                width={300}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <Heading
            level={2}
            text="We Help People To Find Homes"
            customHeadingStyle="!text-3xl !font-bold !text-white !mb-4"
          />
          <p className="text-sm text-gray-400 mb-6">
            Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa
            consectetur. Neque, vestibulum sed varius magna et at. Eu,
            adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
            Blandit aliquam donec sed morbi congue eget lorem viverra porta id
            lobortis.
          </p>
          <Button
            type="button"
            text="Get in Touch"
            customButtonStyle="!bg-[#00b894] !text-white !py-2 !px-6 !rounded"
          />
        </div>
      </div>
      {/* Additional decorative elements for the right side */}
      <div className="absolute -bottom-28 right-0">
        <img
          src="/image/box-pattern.png"
          alt="box-pattern"
          className="w-[60px] h-[182px]"
        />
      </div>
    </section>
  );
}
