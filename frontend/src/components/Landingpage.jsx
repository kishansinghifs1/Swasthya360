import { useState } from "react";
import Hero from "./hero";
import Header from "./Header";
import Dashboard from "./dashboard";
import Footer from "./footer";
import AboutSwasthya from "./AboutSwasthya";

const Landingpage = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // 🔥 Replace this with real auth check later
  const isAuthenticated = true;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Profile Icon */}
      <Header 
        onMenuClick={() => setIsDashboardOpen(true)} 
        isAuthenticated={isAuthenticated} 
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
      <AboutSwasthya/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landingpage;
