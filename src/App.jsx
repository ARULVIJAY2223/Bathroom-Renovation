import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import QuickEstimate from "./components/QuickEstimate";
import WorkTypes from "./components/WorkTypes";
import Portfolio from "./components/Portfolio";
import Calculator from "./components/Calculator";
import FinalCTA from "./components/FinalCTA";
import Pricing from "./components/Pricing";
import Description from "./components/Description";
import Testimonials from "./components/Testimonials";
import CallMeasurer from "./components/CallMeasurer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <QuickEstimate />
      <WorkTypes />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="calculator">
        <Calculator />
      </div>
      <FinalCTA />
      <div id="pricing">
        <Pricing />
      </div>
      <Description />
      <div id="testimonials">
        <Testimonials />
      </div>
      <CallMeasurer />
      <Footer />

    </>
  );
}