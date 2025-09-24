import React, { useState, useEffect } from "react";
import SignIn from "./Signin";
import SignUp from "./Signup";

const AuthModal = ({ onClose, initialView = "signin" }) => {
  const [view, setView] = useState(initialView); // signin | signup

  // Update view if initialView changes (e.g., navigating between /signin and /signup)
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  return (
    <>
      {view === "signin" ? (
        <SignIn onClose={onClose} onSwitch={() => setView("signup")} />
      ) : (
        <SignUp onClose={onClose} onSwitch={() => setView("signin")} />
      )}
    </>
  );
};

export default AuthModal;