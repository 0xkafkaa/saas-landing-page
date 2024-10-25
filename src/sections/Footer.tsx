import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative   before:content-['']  before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2B0B1,#2FD8FE)] before:absolute">
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
      </div>
      <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customers</a>
        <a href="#">Pricing</a>
        <a href="#">Help</a>
        <a href="#">Careers</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialInsta />
        <SocialLinkedin />
        <SocialPin />
        <SocialYoutube />
      </div>
      <p className="mt-6">Made by Kafkaa</p>
      <p className="mt-1">Thanks to Frontend Tribe for the Design</p>
    </footer>
  );
};
