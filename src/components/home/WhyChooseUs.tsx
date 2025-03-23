import Heading from "../common/Heading";
import IconBox from "./IconBox";
import Testimonial from "./Testimonial";

const WhyChooseUs = () => {
  const iconData = [
    {
      id: 1,
      icon: "../..//favicon/loupe.svg",
      title: "Easy To Find",
      description:
        "Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.",
    },
    {
      id: 2,
      icon: "../..//favicon/tag.svg",
      title: "Affordable Prices",
      description:
        "Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.",
    },
    {
      id: 3,
      icon: "../..//favicon/quick.svg",
      title: "Quickly Process",
      description:
        "Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliquet dui pellentesque.",
    },
  ];

  return (
    <div className="bg-[#0d1117] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto p-4 sm:px-8 lg:px-16 max-w-6xl">
        <Heading
          level={2}
          text="Why To Choose Us"
          customHeadingStyle="!text-3xl !text-center !mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {iconData.map((data) => (
            <IconBox
              key={data.id}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>

        <Testimonial
          quote="Massa Semper Non Rutrum Orci Facilisi Sit. Lectus Porta Quam A Fringilla Eget Viverra Sem. Vulputate Massa Hendrerit Turpis Gravida Tempor, Porttitor."
          name="Elena Pravo"
          role="CEO, Uplinke"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
