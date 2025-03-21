import Button from "../common/Button";
import Heading from "../common/Heading";

const BeginSection = () => {
  return (
    <section className="rt-container relative py-36 overflow-hidden">
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-start lg:items-center">
        <Heading
          level={2}
          text="Let's Simply Begin With Rentiz."
          customHeadingStyle="!text-4xl lg:!text-[4.25rem]"
        />
        <div className="max-w-lg">
          <p className="text-sm mb-4 text-[#D6D6D6]">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore.
          </p>
          <Button
            type="button"
            text="Get Started"
            customButtonStyle="!bg-[#00b894] !text-white !py-2 !px-6"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src="/image/lines.png"
          alt="decorative lines"
          className="w-48 h-48 object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default BeginSection;
