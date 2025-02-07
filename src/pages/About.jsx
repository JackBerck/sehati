import HeroAbout from "../components/About/Hero";
import SehatiAbout from "../components/About/Sehati";
import ProgramsAbout from "../components/About/Programs";
import WhatWeDoAbout from "../components/About/WhatWeDo";
import DonateAbout from "../components/About/Donate";
import ContactAbout from "../components/About/Contact";
import SocialMediaAbout from "../components/About/SocialMedia";

export default function About() {
  return (
    <main>
      <HeroAbout />
      <SehatiAbout />
      <ProgramsAbout />
      <WhatWeDoAbout />
      <DonateAbout />
      <ContactAbout />
      <SocialMediaAbout />
    </main>
  );
}
