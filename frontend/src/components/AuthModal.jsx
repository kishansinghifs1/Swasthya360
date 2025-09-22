import React, { useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

const AuthModal = ({ onClose }) => {
  const [view, setView] = useState("signin"); // signin | signup

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
