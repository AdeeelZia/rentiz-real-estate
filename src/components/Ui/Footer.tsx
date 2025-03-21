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
  "/favicon/footer/facebook.svg",
  "/favicon/footer/instagram.svg",
  "/favicon/footer/twitter.svg",
  "/favicon/footer/youtube.svg",
];

const FooterLinksSection = ({ title, links }: any) => (
  <div className="text-[#ffffff] py-4">
    <div className="text-lg font-bold">{title}</div>
    <ul>
      {links.map((item: any, index: any) => (
        <li key={index}>
          <div className="flex items-center gap-x-2 py-1">
            <Link className="text-sm font-medium text-[#D6D6D6]" to={item.url}>
              {item.label}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-[#1A242F]">
    <div className="rt-container lg:flex">
      <div className="lg:w-2/5">
        <div className="text-[#ffffff]">
          <Heading
            level={1}
            text="Rentiz"
            customHeadingStyle="lg:!text-[36px]"
          />
          <p className="lg:w-2/3 text-sm font-medium text-justify py-4">
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi
            augue.
          </p>
        </div>

        <div className="Social_Links flex gap-x-4 justify-center lg:justify-start">
          {socialIcons.map((icon, index) => (
            <img
              width={20}
              height={20}
              key={index}
              src={icon}
              alt={`social-icon-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="Links py-4 sm:flex justify-around lg:w-[60%]">
        <FooterLinksSection title="Project" links={footerLinks.slice(0, 4)} />

        <FooterLinksSection title="Company" links={footerLinks.slice(4, 7)} />

        <FooterLinksSection title="Movement" links={footerLinks.slice(5, 7)} />

        <FooterLinksSection title="Help" links={footerLinks.slice(5, 9)} />
      </div>
    </div>

    <div className="w-full border border-[#303A44]"></div>

    <div className="rt-container h-12 p-4 flex flex-col justify-center md:flex-row md:justify-between items-center text-white">
      <p className="text-[.65rem] sm:text-sm font-normal leading-5">
        Copyright ©TemplatesJungle. 2022. All right reserved
      </p>
      <p className="text-[.65rem] sm:text-sm font-normal leading-5">
        Design by:
        <span className="text-[.80rem] lg:text-lg underline">
          TemplatesJungle
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
