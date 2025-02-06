import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { navigation } from "../../data/navigation";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className={`section-padding-x fixed top-0 w-full z-[998] text-dark-base normal-font-size transition-all duration-300 bg-light-base shadow-md`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:px-0 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/sehati.png" className="w-10" alt="Sehati Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="text-green-base">Se</span>
            <span className="text-blue-base">hati</span>
          </span>
        </Link>
        <button
          type="button"
          className="lg:hidden text-dark-base relative z-[999] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row rtl:space-x-reverse lg:mt-0 lg:border-0 gap-2 lg:gap-0">
            {navigation.map((route, index) => (
              <NavigationLink
                key={index}
                url={route.path}
                addClass={
                  route.title.toLowerCase() === "daftar" &&
                  "bg-green-base text-light-base"
                }
              >
                {route.title}
              </NavigationLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
