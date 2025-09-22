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

// 🔹 Import the AuthModal wrapper
import AuthModal from "./components/AuthModal";

function App() {
  const [showAuth, setShowAuth] = useState(false); // controls modal open
  const [authView, setAuthView] = useState("signin"); // signin | signup

  return (
    <Routes>
      {/* Public Home page */}
      <Route
        path="/"
        element={
          <div>
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
            <HeroSection />
            <FeaturesSection />
            <ServiceSection />
            <Footer />

            {/* ✅ Auth Modal */}
            {showAuth && (
              <AuthModal
                onClose={() => setShowAuth(false)}
                initialView={authView}
              />
            )}
          </div>
        }
      />

      {/* Full-page SignIn */}
      <Route
        path="/signin"
        element={
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <AuthModal onClose={() => {}} initialView="signin" />
            <Footer />
          </div>
        }
      />

      {/* Full-page SignUp */}
      <Route
        path="/signup"
        element={
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <AuthModal onClose={() => {}} initialView="signup" />
            <Footer />
          </div>
        }
      />

      {/* After login routes */}
      <Route path="/landing" element={<Landingpage />} />
      <Route path="/check-symptoms" element={<CheckSymptom />} />
      <Route path="/user-details" element={<UserDetails />} />
      <Route path="/health-chatbot" element={<ChatbotParent />} />
      <Route path="/vaccination-info" element={<VaccinationPage />} />
      <Route path="/disease-outbreaks" element={<OutBreakPage />} />

      {/* Example profile page */}
      <Route path="/profile" element={<h1 className="p-6">Profile Page 1</h1>} />
    </Routes>
  );
}

export default App;
