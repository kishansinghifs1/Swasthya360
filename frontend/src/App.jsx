import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeatureSection";
import SignIn from "./components/Signin";
import SignUp from "./components/signup";
import Landingpage from "./components/Landingpage";
import Symptoms from "./components/Symptoms";
import CheckSymptom from "./Check-Symptoms/CheckSymptom";
import VaccinationPage from "./Vaccination-info/VaccinationPage";
import UserDetails from "./User-Details/UserDetails";
import ChatbotParent from "./Health-Chatbot/ChatbotParent";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <>
      <Routes>
        {/* Public Home page */}
        <Route
          path="/"
          element={
            <div>
              <Header
                onSignUpClick={() => setShowSignUp(true)}
                onSignInClick={() => setShowSignIn(true)}
              />
              <HeroSection />
              <FeaturesSection />
              <ServiceSection />
              <Footer />

              {/* Modals on homepage */}
              {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
              {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
            </div>
          }
        />

        {/* Direct SignIn page (full page) */}
        <Route
          path="/signin"
          element={
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <SignIn onClose={() => {}} /> {/* modal not needed, full page */}
              <Footer />
            </div>
          }
        />

        {/* Direct SignUp page (optional) */}
        <Route
          path="/signup"
          element={
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <SignUp onClose={() => {}} />
              <Footer />
            </div>
          }
        />

        {/* After login routes */}
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/check-symptoms" element={<CheckSymptom />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/health-chatbot" element={<ChatbotParent />} />

        {/* Example profile page */}
        <Route path="/profile" element={<h1 className="p-6">Profile Page 1</h1>} />
      </Routes>
    </>
  );
}

export default App;
