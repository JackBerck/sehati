import FooterLink from "./FooterLink";
import SocialMediaLinkFooter from "./SocialMediaLink";
import { navigation } from "../../data/navigation";
import { legal } from "../../data/legal";
import { socialMedia } from "../../data/social-media";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="section-padding-x pt-4 pb-4 normal-font-size text-light-base bg-dark-base flex items-center justify-center"
    >
      <div className="max-w-screen-xl container py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/sehati.webp" className="h-8 me-3" alt="Sehati Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Sehati
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterLink title="Tautan" links={navigation} />
            <FooterLink title="Ikuti Kami" links={socialMedia} />
            <FooterLink title="Legal" links={legal} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-gray-500 sm:text-center">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              to="https://instagram.com/zakidzlfkr_"
              className="hover:underline"
            >
              Sehati&#8482;
            </Link>
            . All Rights Reserved.
          </span>
          <SocialMediaLinkFooter />
        </div>
      </div>
    </footer>
  );
}
