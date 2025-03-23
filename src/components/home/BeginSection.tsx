import Button from "../common/Button";
import Heading from "../common/Heading";

const BeginSection = () => {
  return (
    <section className="container mx-auto p-4 sm:px-8 lg:px-16 py-36 overflow-hidden">
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-start lg:items-center px-16">
        <Heading
          level={2}
          text="Let's Simply Begin With Rentiz."
          customHeadingStyle="!text-4xl lg:w-[48%] lg:text-balance lg:!text-[4.25rem]"
        />
        <div className="max-w-lg">
          <p className="text-lg mb-4 text-[#D6D6D6]">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur. Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore.
          </p>
          <Button
            type="button"
            text="Get Started"
            customButtonStyle="py-3 px-6 !text-white !bg-[#00b894]"
          />
        </div>
      </div>
    </section>
  );
};

export default BeginSection;
