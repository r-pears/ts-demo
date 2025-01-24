import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import CounterSection from "./Components/CounterSection/CounterSection";
import FormSection from "./Components/FormSection/FormSection";
import HeroSection from "./Components/HeroSection/HeroSection";

function Main() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FormSection />
      <CounterSection />
      <ContactSection />
    </main>
  );
}

export default Main;
