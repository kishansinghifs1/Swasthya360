import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeatureSection";
import Landingpage from "./components/Landingpage";
import CheckSymptom from "./Check-Symptoms/CheckSymptom";
import UserDetails from "./User-Details/UserDetails";
import ChatbotParent from "./Health-Chatbot/ChatbotParent";
import OutBreakPage from "./Disease-Outbreak/OutBreakPage";
import VaccinationPage from "./Vaccination-info/VaccinationPage";
import AuthModal from "./components/AuthModal";
import WhatsappBot from "./components/WhatsappBot"

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authView, setAuthView] = useState("signin"); // default modal view

  return (
    <>
      <Header
        onSignUpClick={() => {
          setAuthView("signup");
          setShowAuth(true);
        }}
        onSignInClick={() => {
          setAuthView("signin");
          setShowAuth(true);
        }}
      />

      <Routes>
        {/* Public Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <ServiceSection />
              <Footer />
            </>
          }
        />

        {/* Full-page SignIn */}
        <Route
          path="/signin"
          element={
            <>
              <AuthModal onClose={() => {}} initialView="signin" />
              <Footer />
            </>
          }
        />

        {/* Full-page SignUp */}
        <Route
          path="/signup"
          element={
            <>
              <AuthModal onClose={() => {}} initialView="signup" />
              <Footer />
            </>
          }
        />

        {/* After login routes */}
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/check-symptoms" element={<CheckSymptom />} />
        <Route path="/doctor-appointment" element={<UserDetails />} />
        <Route path="/health-chatbot" element={<ChatbotParent />} />
        <Route path="/vaccination-info" element={<VaccinationPage />} />
        <Route path="/disease-outbreaks" element={<OutBreakPage />} />
        <Route path="/profile" element={<h1 className="p-6">Profile Page</h1>} />
        <Route path="/whatsapp-chatbot" element={<WhatsappBot />} />
      </Routes>

      {/* Home page modal */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          initialView={authView}
        />
      )}
    </>
  );
}

export default App;