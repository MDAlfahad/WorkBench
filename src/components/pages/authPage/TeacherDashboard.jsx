import { Cog, NotebookPen, ReceiptText, User, Users } from "lucide-react";
import React, { useState } from "react";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItem = [
    { name: "Profile", icon: User },
    { name: "Student List", icon: Users },
    { name: "Issue Result", icon: NotebookPen },
    { name: "Payments", icon: ReceiptText },
    { name: "Settings", icon: Cog },
  ];
  const renderProfile = () => (
    <div>profile</div>
  )
  const renderStudentList = () => (
    <div>StudentList</div>
  );
  const renderIssueResult = () => (
    <div>issue result</div>
  )
  const renderPyaments = () => (
    <div>payemts</div>
  )
  const renderSettings = () => (
    <div>settings</div>
  )
  const renderActivePage = () => {
    switch ("activeNav") {
      case "Profile":
        return renderProfile();
      case "Student List":
        return renderStudentList();
      case "Issue Result":
        return renderIssueResult();
      case "Payments":
        return renderPyaments();
      case "Settings":
        return renderSettings();
    default:
        return renderProfile();
    }
  };
  return (
    <div className="max-w-[1800px] w-full h-[100vh] flex  m-auto pt-14 bg-gray-100 ">
      <div>
        <div className="w-72 h-full bg-white border border-slate-200">
          {navItem.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveNav(item.name);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20 font-medium"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? "text-white" : ""
                  }`}
                />
                {!sidebarCollapsed && (
                  <span className="truncate text-sm">{item.name}</span>
                )}

                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow-md">
                    {item.name}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={`flex-1 flex flex-coltransition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
