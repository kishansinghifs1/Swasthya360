import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeatureSection";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <ServiceSection/>
      <Footer/>
    </>
  );
}

export default App;
