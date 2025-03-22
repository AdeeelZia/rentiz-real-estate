import IconBox from "./IconBox";
import Testimonial from "./Testimonial";
import loupe from "../../assets/favicon/loupe.svg";
import tag from "../../assets/favicon/tag.svg";
import quick from "../../assets/favicon/quick.svg";

const WhyChooseUs = () => {
  const iconData = [
    {
      id: 1,
      icon: loupe,
      title: "Easy To Find",
      description:
        "Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.",
    },
    {
      id: 2,
      icon: tag,
      title: "Affordable Prices",
      description:
        "Urna, massa aliquet dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.",
    },
    {
      id: 3,
      icon: quick,
      title: "Quickly Process",
      description:
        "Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliquet dui pellentesque.",
    },
  ];

  return (
    <div className="bg-[#0d1117] text-white py-16 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <svg
          width="120"
          height="300"
          viewBox="0 0 120 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150L80 80M0 200L120 80"
            stroke="#1cd6c9"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why To Choose Us
        </h2>

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
