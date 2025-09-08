// import Navbar from "./components/Navbar";

import HeroAnimated from "./components/HeroAnimated";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Features from "../Features";
// import Features from "./components/features";
export default function Home() {
  return (
    <>
      {/* Navbar stays fixed at the top */}
      {/* <Navbar /> */}

      {/* Hero Section */}

      <HeroAnimated />
      <Features />
      <CTA />
      <Footer />


    </>
  );
}


