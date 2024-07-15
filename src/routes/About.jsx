import Navbar from "..//components/Navbar";
import Hero from "..//components/Hero";
import AboutUs from "../components/AboutUs";
import Footerr from "./Footerr";
import Nights from "../Photos/night.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Nights}
        title="About"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Footerr />
    </>
  );
}
export default About;
