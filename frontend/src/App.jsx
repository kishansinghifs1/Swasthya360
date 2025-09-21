import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeatureSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landingpage from "./components/Landingpage";
import Symptoms from "./components/Symptoms";
import CheckSymptom from "./Check-Symptoms/CheckSymptom";
import VaccinationPage from "./Vaccination-info/VaccinationPage";
import UserDetails from "./User-Details/UserDetails";
import ChatbotParent from "./Health-Chatbot/ChatbotParent";

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
      <Route path="/symptoms" element={<Symptoms />} />
      <Route path="/check-symptoms" element={<CheckSymptom />} />
      <Route path="/user-details" element={<UserDetails/>} />
      <Route path="/health-chatbot" element={<ChatbotParent/>} />

      {/* Example profile page */}
      <Route
        path="/profile"
        element={<h1 className="p-6">Profile Page 1</h1>}
      />
    </Routes>
  );
}

export default App;
