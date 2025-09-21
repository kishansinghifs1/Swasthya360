import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeatureSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landingpage from "./components/Landingpage";

import CheckSymptom from "./Check-Symptoms/CheckSymptom";
import VaccinationPage from "./Vaccination-info/VaccinationPage";
import OutBreakPage from "./Disease-Outbreak/OutBreakPage";
import UserDetails from "./User-Details/UserDetails";

function App() {
  return (
    <Routes>
      {/* Public Home page */}
      <Route
        path="/"
        element={
          <div>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <ServiceSection />
            <Footer />
          </div>
        }
      />

      {/* Auth routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* After login routes */}
      <Route path="/landing" element={<Landingpage />} />

      <Route path="/check-symptoms" element={<CheckSymptom />} />
      <Route path="/vaccination-info" element={<VaccinationPage />} />
      <Route path="/disease-outbreaks" element={<OutBreakPage />} />
      <Route path="/user-details" element={<UserDetails/>} />
      {/* Example profile page */}
      <Route
        path="/profile"
        element={<h1 className="p-6">Profile Page 1</h1>}
      />
    </Routes>
  );
}

export default App;
