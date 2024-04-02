import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import NurseHomePage from "./pages/NurseHomePage/NurseHomePage";
import PatientDetailNurse from "./pages/PatientDetailNurse/PatientDetailNurse";
import SignOut from "./pages/SignOut/SignOut";

function App() {
  //make 4 locations with 4 different routes and a homepage at / location, without using useLocation
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NurseHomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nursehomepage" element={<NurseHomePage />} />
          <Route path="/patientdetailnurse" element={<PatientDetailNurse />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
