import Heading from "../../components/common/Heading";
import CircuitTimings from "../../components/contact/CircuitTimings";
import ContactDetails from "../../components/contact/ContactDetails";
import ContactEmails from "../../components/contact/ContactEmails";
import ContactInquiryForm from "../../components/contact/ContactInquiryForm";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto p-4 sm:px-8 lg:px-16">
        <section className="py-[45px] rounded-[10px]">
          <div className="flex gap-5">
            <article className="text-white bg-[#1a2536] py-[25px] px-[20px] rounded-[10px] lg:w-1/2">
              <Heading level={3} text="Get in Touch" />
              <p className="text-white">
                Would you like to discuss hosting an event at Al Ain Raceway or
                find out about availability? Maybe you just want to stop by and
                have a look around? You can send us a message using our
                enquiries form, or reach us using the below contact information.
              </p>
              <Heading
                level={3}
                text="Al Ain Raceway"
                customHeadingStyle="italic"
              />
              <p>P.O BOX: 85393, Al Ain, UAE.</p>
              <ContactDetails />
              <ContactEmails />
              <p>Coordinates: 24.1936 55.8193</p>
            </article>
            <article className="bg-[#1a2536] p-4 rounded-md lg:w-[50%]">
              <CircuitTimings />
              <ContactInquiryForm />
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
