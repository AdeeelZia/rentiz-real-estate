import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Heading from "../common/Heading";
import Button from "../common/Button";

export default function Navbar() {
  const NavLinks = [
    { NavTxt: "Home", Path: "/" },
    { NavTxt: "About Us", Path: "/about" },
    { NavTxt: "Buying", Path: "/buying" },
    { NavTxt: "Renting", Path: "/renting" },
    { NavTxt: "Selling", Path: "/selling" },
    { NavTxt: "Contact Us", Path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="rt-container">
      <nav className="flex justify-between items-center">
        <Link to={"/"}>
          <Heading
            level={1}
            text="Rentiz"
            customHeadingStyle="lg:!text-[36px]"
          />
        </Link>
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1">
          <ul className="flex flex-grow justify-center space-x-8">
            {NavLinks.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.Path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[13px] font-semibold uppercase leading-[19.5px] text-white underline-offset-4 underline decoration-[#1AA090] decoration-2"
                      : "text-[13px] font-semibold uppercase leading-[19.5px] text-white underline-offset-4 decoration-2 decoration-[#1AA090] hover:underline"
                  }
                >
                  {item.NavTxt}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex">
            <Button
              type="button"
              text="Login"
              customButtonStyle="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white rounded-[4px] transition duration-300 ease-in-out"
            />
            <Button
              type="button"
              text="Sign Up"
              customButtonStyle="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white bg-[#1AA090] transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden absolute top-[76px] left-0 w-[100%] pb-12 h-[100vh] bg-[#121b25] text-white z-30 rounded-[5px] ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-4">
          {NavLinks.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.Path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[13px] font-semibold uppercase leading-[19.5px] text-white px-3 py-2 rounded-md underline-offset-4 underline decoration-2 decoration-[#1AA090]"
                    : "text-[13px] font-semibold uppercase leading-[19.5px] text-white underline-offset-4 decoration-2 hover:underline decoration-[#1AA090] px-3 py-2 rounded-md"
                }
              >
                {item.NavTxt}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center p-4">
          <button className="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white rounded-[4px] transition duration-300 ease-in-out">
            Login
          </button>
          <button className="h-8 px-4 text-sm font-semibold flex items-center gap-x-[10px] text-white bg-[#1AA090] rounded-[4px] transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
