import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Landingpage from "./components/Landingpage";
import Symptoms from "./components/Symptoms";
import CheckSymptom from "./Check-Symptoms/CheckSymptom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route
            path="/profile"
            element={<h1 className="p-6">Profile Page 1</h1>}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/check-symptoms" element={<CheckSymptom />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
