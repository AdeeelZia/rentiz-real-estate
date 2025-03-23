import Heading from "../common/Heading";

const contactEmails = [
  {
    department: "Rental Kart Activities",
    icon: "/favicon/contact/mail.svg",
    email: "sales@alainraceway.com",
  },
  {
    department: "Corporate Events",
    icon: "/favicon/contact/mail.svg",
    email: "events@alainraceway.com",
  },
  {
    department: "Customer Support",
    icon: "/favicon/contact/mail.svg",
    email: "support@alainraceway.com",
  },
  {
    department: "Media Inquiries",
    icon: "/favicon/contact/mail.svg",
    email: "media@alainraceway.com",
  },
  {
    department: "General Information",
    icon: "/favicon/contact/mail.svg",
    email: "info@alainraceway.com",
  },
];

export default function ContactEmails() {
  return (
    <div className="mt-6">
      <Heading
        level={2}
        text="Send Us an E-mail"
        customHeadingStyle="italic"
      />
      <div className="mt-2">
        {contactEmails.map((email, index) => (
          <div key={index} className="mb-2">
            <p>{email.department}</p>
            <div className="flex items-center">
              <img
                src={email.icon}
                alt="email icon"
                className="inline-flex p-1.5 rounded-full bg-white"
              />
              <span className="pl-2.5">{email.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
