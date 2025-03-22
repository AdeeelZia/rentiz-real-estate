import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import facebook from "../../assets/favicon/facebook.svg";
import instagram from "../../assets/favicon/instagram.svg";
import twitter from "../../assets/favicon/Twitter.svg";
import youtube from "../../assets/favicon/youtube.svg";

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

const socialIcons = [facebook, instagram, twitter, youtube];

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
      <div className="rt-container lg:flex">
        <section className="lg:w-2/5 text-white">
          <Heading
            level={1}
            text="Rentiz"
            customHeadingStyle="lg:!text-[36px]"
          />
          <p className="lg:w-2/3 text-sm font-medium text-justify py-4">
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
            augue.
          </p>
          <nav
            className="flex gap-x-4 justify-center lg:justify-start"
            aria-label="Social Media"
          >
            {socialIcons.map((icon, index) => (
              <a key={index} href="#" aria-label={`social-icon-${index}`}>
                <img
                  src={icon}
                  width={20}
                  height={20}
                  alt={`social-icon-${index}`}
                />
              </a>
            ))}
          </nav>
        </section>

        <nav
          className="py-4 sm:flex justify-around lg:w-[60%]"
          aria-label="Footer Navigation"
        >
          <FooterLinksSection title="Project" links={footerLinks.slice(0, 4)} />
          <FooterLinksSection title="Company" links={footerLinks.slice(4, 7)} />
          <FooterLinksSection title="Movement" links={footerLinks.slice(5, 7)} />
          <FooterLinksSection title="Help" links={footerLinks.slice(5, 9)} />
        </nav>
      </div>

      <hr className="border-[#303A44]" />

      <div className="rt-container h-12 p-4 flex flex-col md:flex-row md:justify-between items-center text-white text-[.65rem] sm:text-sm font-normal leading-5">
        <p>Copyright © TemplatesJungle. 2022. All rights reserved.</p>
        <p>Design by:<span className="underline text-[.80rem] lg:text-lg">TemplatesJungle</span></p>
      </div>
    </footer>
  );
};

export default Footer;
