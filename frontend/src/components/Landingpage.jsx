import { useState } from "react";
import Header from "./header";
import Dashboard from "./dashboard";
import Hero from "./hero";
import Footer from "./footer";
const Landingpage = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  return (
    <>
      {" "}
      <Header onMenuClick={() => setIsDashboardOpen(true)} />
      {/* Dashboard Sidebar */}
      <Dashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
      <Hero />
      <Footer />
    </>
  );
};
export default Landingpage;
