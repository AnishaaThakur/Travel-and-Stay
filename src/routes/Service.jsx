import Navbar from "..//components/Navbar";
import Hero from "..//components/Hero";
import Trip from "../components/Trip";
import Footerr from "./Footerr";
import tree from "../Photos/1.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={tree}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footerr />
    </>
  );
}
export default Service;
