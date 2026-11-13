
import {
  LayoutDashboard,
  Users,
  BarChart3,
  CreditCard,
  Settings as SettingsIcon,
  X,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";

export default function AdminPanel() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

 
  const [activeNav, setActiveNav] = useState("Dashboard");

 
  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Teacher", icon: GraduationCap },
    { name: "Student", icon: Users },
    { name: "Exam Settings", icon: BarChart3 },
    { name: "Payments", icon: CreditCard },
    { name: "Settings", icon: SettingsIcon },
  ];

  

  const renderDashboard = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Dashboard Page
        </h1>
        <p className="text-slate-500 text-sm">
          Welcome to your dashboard. Add your custom components here.
        </p>
      </div>
    </div>
  );

  
  const renderTeacher = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Teacher Page
        </h1>
        <p className="text-slate-500 text-sm">
          Add your teacher management components here.
        </p>
      </div>
    </div>
  );

  
  const renderStudent = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Student Page
        </h1>
        <p className="text-slate-500 text-sm">
          Add your student directory components here.
        </p>
      </div>
    </div>
  );

  
  const renderExamSettings = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Exam Settings Page
        </h1>
        <p className="text-slate-500 text-sm">
          Add your exam configuration components here.
        </p>
      </div>
    </div>
  );

  
  const renderPayments = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Payments Page
        </h1>
        <p className="text-slate-500 text-sm">
          Add your payment records components here.
        </p>
      </div>
    </div>
  );

  
  const renderSettings = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h1 className="text-xl font-bold tracking-tight text-slate-800 mb-2">
          Settings Page
        </h1>
        <p className="text-slate-500 text-sm">
          Add your system settings components here.
        </p>
      </div>
    </div>
  );

  const renderActivePage = () => {
    switch (activeNav) {
      case "Dashboard":
        return renderDashboard();
      case "Teacher":
        return renderTeacher();
      case "Student":
        return renderStudent();
      case "Exam Settings":
        return renderExamSettings();
      case "Payments":
        return renderPayments();
      case "Settings":
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex font-sans transition-colors duration-300">
      
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

     
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "w-20" : "w-64"
        } ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200">
          <div className="flex items-center space-x-3 overflow-hidden">
            {!sidebarCollapsed && (
              <span className="font-bold text-lg tracking-tight text-primary/80 text-transparent truncate">
                Admin Panel
              </span>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

       
        <div className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
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
      </aside>

      
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        
        <header className="sticky top-0 z-30 h-16 px-4 sm:px-6 flex items-center justify-between border-b bg-white/90 border-slate-200 backdrop-blur-md ">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden lg:block px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
            >
              {sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}
