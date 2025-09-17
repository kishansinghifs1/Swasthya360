import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Hero from "./components/hero";
import Footer from "./components/footer";
function App() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <Router>
      {/* Header */}
      <Header onMenuClick={() => setIsDashboardOpen(true)} />

      {/* Dashboard Sidebar */}
      <Dashboard isOpen={isDashboardOpen} onClose={() => setIsDashboardOpen(false)} />
        <Hero/>
        <Footer/>
      {/* Main Routes */}
      <Routes>
        <Route path="/profile" element={<h1 className="p-6">Profile Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
