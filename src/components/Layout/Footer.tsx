import { Link } from "react-router-dom";
import Heading from "../common/Heading";

const footerLinks = [
  { label: "Houses", url: "/houses" },
  { label: "Rooms", url: "/rooms" },
  { label: "Flats", url: "/flats" },
  { label: "Appartments", url: "/appartments" },
  { label: "How we work ?", url: "/work" },
  { label: "Capital", url: "/capital" },
  { label: "Security", url: "/security" },
  { label: "Who are we", url: "/we" },
  { label: "Privacy", url: "/privacy" },
  { label: "Condition", url: "/condition" },
  { label: "Blog", url: "/blog" },
  { label: "FAQs", url: "/faq" },
];

const socialIcons = [
  "../..//favicon/facebook.svg",
  "../..//favicon/instagram.svg",
  "../..//favicon/Twitter.svg",
  "../..//favicon/youtube.svg",
];

interface FooterLinksSection {
  title: string;
  links: any;
}

const FooterLinksSection: React.FC<FooterLinksSection> = ({ title, links }) => (
  <section className="text-white py-4">
    <h2 className="text-lg font-bold">{title}</h2>
    <ul>
      {links.map((item: any, index: any) => (
        <li key={index}>
          <Link
            to={item.url}
            className="block py-1 text-sm font-medium text-[#D6D6D6]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
  return (
    <footer className="bg-[#1A242F]">
      <div className="container mx-auto p-4 sm:px-8 lg:px-16 lg:flex">
        <section className="lg:w-2/5 text-white">
          <Link to={"/"} className="relative inline-flex items-center">
            <div className="relative">
              <Heading
                level={1}
                text="Rentiz"
                customHeadingStyle="lg:!text-[36px] text-white font-bold relative z-50"
              />
              <img
                src="../image/Rectangle.png"
                alt="rectangle-icon"
                width={32}
                height={32}
                className="absolute top-5 left-0 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <p className="lg:w-2/3 text-sm font-medium text-justify py-4">
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
            augue.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            {socialIcons.map((icon, index) => (
              <Link key={index} to="#" aria-label={`social-icon-${index}`}>
                <img
                  src={icon}
                  width={20}
                  height={20}
                  alt={`social-icon-${index}`}
                />
              </Link>
            ))}
          </div>
        </section>

        <div className="py-4 sm:flex justify-around lg:w-full lg:flex-row">
          <FooterLinksSection title="Project" links={footerLinks.slice(0, 4)} />
          <FooterLinksSection title="Company" links={footerLinks.slice(4, 7)} />
          <FooterLinksSection
            title="Movement"
            links={footerLinks.slice(5, 7)}
          />
          <FooterLinksSection title="Help" links={footerLinks.slice(5, 9)} />
        </div>
      </div>

      <hr className="border-[#303A44]" />

      <div className="container mx-auto p-4 sm:px-8 lg:px-16 flex flex-col md:flex-row md:justify-between items-center text-[.70rem] sm:text-sm text-white">
        <p>Copyright © TemplatesJungle. 2022. All rights reserved.</p>
        <p>
          Design by:
          <span className="text-[.80rem] sm:text-sm underline">
            TemplatesJungle
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
