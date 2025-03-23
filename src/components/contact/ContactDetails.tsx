const contactDetails = [
    { icon: "/favicon/contact/phone.svg", phoneNumber: "+971 (0) 378 6662" },
    { icon: "/favicon/contact/whatsapp.svg", phoneNumber: "+971 (0) 753 1030" },
  ];
  
  export default function ContactDetails() {
    return (
      <div className="mt-4">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex items-center mb-2">
            <img
              src={contact.icon}
              alt="contact icon"
              className="p-1 rounded-full bg-white"
            />
            <p className="pl-2 text-white">{contact.phoneNumber}</p>
          </div>
        ))}
      </div>
    );
  }
  