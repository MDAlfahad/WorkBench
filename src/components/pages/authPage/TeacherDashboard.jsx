import React, { useState } from "react";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setactiveNav] = useState("dashboard");

  const navItem = [
    { name: "Profile" },
    { name: "Profile" },
    { name: "Profile" },
    { name: "Profile" },
    { name: "Profile" },
  ];
  const randerProfile=()=>{
    <div>profile</div>
  }
  const renderp=()=>{
    <div>profile</div>
  }
  const renderpp=()=>{
    <div>profile</div>
  }
  const renderppp=()=>{
    <div>profile</div>
  }
  const renderpppp=()=>{
    <div>profile</div>
  }
  const activePage=()=>{
    switch("activeNav"){

    }
  }
  return (
    <div className="max-w-[1800px] w-full h-[100vh] m-auto pt-14 bg-gray-100 ">
      <div className="w-72 h-full bg-white border border-slate-200">asd</div>
      alfaahd
    </div>
  );
};

export default TeacherDashboard;
