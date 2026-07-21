import Home from "./home";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slider from "./slider";

export default function Page() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Home />

      <Hero />

      <Stats />

      <WhyChooseUs />

      <Services />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}
