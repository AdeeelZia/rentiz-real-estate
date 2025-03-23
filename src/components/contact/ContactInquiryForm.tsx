import Button from "../common/Button";
import InputField from "../common/Input";

function ContactInquiryForm() {
  return (
    <form className="mt-4">
      <div className="my-4 lg:flex lg:flex-wrap lg:items-center lg:gap-4">
        <div className="lg:w-[48%]">
          <InputField
            placeholder="First Name"
            customStyleInput="h-11 w-full my-2 px-4"
          />
        </div>
        <div className="lg:w-[48%]">
          <InputField
            placeholder="Last Name"
            customStyleInput="h-11 w-full my-2 px-4"
          />
        </div>
        <div className="lg:w-[48%]">
          <InputField
            placeholder="Email"
            customStyleInput="h-11 w-full my-2 px-4"
          />
        </div>
        <div className="lg:w-[48%]">
          <InputField
            placeholder="Phone Number"
            customStyleInput="h-11 w-full my-2 px-4"
          />
        </div>
      </div>
      <InputField
        placeholder="Message"
        customStyleInput="w-full h-36 p-3 my-3"
      />
      <Button
        type="submit"
        text="Submit"
        customButtonStyle="!h-10 !w-full !text-sm !font-medium !leading-[21px] !tracking-wider !rounded-md !bg-[#FD0000] !hover:opacity-85"
      />
    </form>
  );
}

export default ContactInquiryForm;
