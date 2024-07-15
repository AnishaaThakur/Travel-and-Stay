import Navbar from "..//components/Navbar";
import Hero from "..//components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footerr from "./Footerr";
import Car from "../Photos/12.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Car}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footerr />
    </>
  );
}
export default Home;
