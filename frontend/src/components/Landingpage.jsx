import { useState } from "react";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import Footer from "./Footer.jsx";
import AboutSwasthya from "./AboutSwasthya.jsx";

const Landingpage = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // 🔥 Replace this with real auth check later
  const isAuthenticated = true;
  const onSignOutClick=true;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Profile Icon */}
      <Header
        onMenuClick={() => setIsDashboardOpen(true)}
        isAuthenticated={isAuthenticated}
        onSignOutClick={onSignOutClick}
      />

      {/* Dashboard Sidebar */}
      <Dashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
      </main>
      <AboutSwasthya />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landingpage;
