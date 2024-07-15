import Navbar from "..//components/Navbar";
import Hero from "..//components/Hero";
import Footerr from "./Footerr";
import ContactForm from "../components/ContactForm";
import river from "../Photos/2.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={river}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footerr />
    </>
  );
}
export default Contact;
