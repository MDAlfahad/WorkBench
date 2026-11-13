import React from "react";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentDashboard from "./components/pages/authPage/StudentDashboard";
import AdminPanel from "./components/pages/authPage/AdminPanel/AdminPanel";
import LoginRoute from "./components/pages/routes/authRoute/LoginRoute";
import StudentLoginRoute from "./components/pages/routes/authRoute/StudentLoginRoute";
const MainRoute = () => {
  return (
    <div>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/login-route" element={<LoginRoute />} />
          <Route path="/student-login-page" element={<StudentLoginRoute />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainRoute;
