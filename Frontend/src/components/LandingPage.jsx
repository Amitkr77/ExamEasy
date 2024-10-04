import Features from "./Features";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Login from "./Authentication/Login";
import Page from "./page";
import Testonomial from "./Testonomial";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Login />
      <Features />
      <Page />
      <Testonomial />
      <Footer />
    </>
  );
}

export default LandingPage;
