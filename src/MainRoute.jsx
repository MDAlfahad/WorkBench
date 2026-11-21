import React from "react";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentDashboard from "./components/pages/authPage/StudentDashboard";
import AdminPanel from "./components/pages/authPage/AdminPanel/AdminPanel";
import LoginRoute from "./components/pages/routes/authRoute/LoginRoute";
import StudentLoginRoute from "./components/pages/routes/authRoute/StudentLoginRoute";
import TeacherDashboard from "./components/pages/authPage/teacherDashboard/TeacherDashboard";
import TeacherLogin from "./components/pages/routes/authRoute/TeacherLogin";
import ELibraryRoute from "./components/pages/routes/route/ELibraryRoute";
import SyllabussRoute from "./components/pages/routes/route//syllabus/SyllabussRoute";
import ScrollToTop from "./components/components/ScrollToTop";

const MainRoute = () => {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Navbar />
      
       
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/login-route" element={<LoginRoute />} />
          <Route path="/student-login-page" element={<StudentLoginRoute />} />
          <Route path="/teacher-login-page" element={<TeacherLogin />} />
          <Route path="/e-library" element={<ELibraryRoute />} />
          <Route path="/syllabuss" element={<SyllabussRoute />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainRoute;
