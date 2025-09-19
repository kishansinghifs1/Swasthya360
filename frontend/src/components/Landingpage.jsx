import Hero from "./Hero";
import Header from "./Header";
import Dashboard from "./dashboard";
import { useState } from "react";

import Footer from "./footer";

const Landingpage = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <>
      <Header onMenuClick={() => setIsDashboardOpen(true)} />
      {/* Dashboard Sidebar */}
      <Dashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />{" "}
      <Hero />
      <Footer />
    </>
  );
};
export default Landingpage;
