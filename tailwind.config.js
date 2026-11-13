import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalButton from "../buttons/GlobalButton";
import LoginButton from "../buttons/LoginButton";
import { ChevronDown, Bell, LogOut, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  // Dropdown states
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New student registration pending",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      title: "Fee payment gateway synced",
      time: "1h ago",
      unread: false,
    },
    {
      id: 3,
      title: "Exam schedule updated for Grade 12",
      time: "1d ago",
      unread: false,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 bg-white w-full shadow-md border-b border-[#8C9C8D]/20">
      <div className="max-w-[1800px] w-full mx-auto flex items-center justify-between px-4 lg:px-8 xl:px-12 py-3">
        {/* Brand Logo / Title */}
        <div 
          onClick={() => navigate("/")} 
          className="text-xl font-bold text-[#9C0B00] cursor-pointer tracking-tight flex items-center gap-2"
        >
          Grade<span className="w-2 h-2 rounded-full bg-[#9C0B00]"></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {["Syllabus", "Events", "Gallery", "Raise Issue", "Notice", "Contact"].map((item) => (
              <li
                key={item}
                className="text-slate-700 hover:text-[#9C0B00] transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Action Buttons & Dropdowns */}
        <div className="flex items-center gap-3">
          <GlobalButton
            text="Dashboard"
            onClick={() => navigate("/student-dashboard")}
          />
          <LoginButton
            text="Login"
            onClick={() => navigate("/login-route")}
          />

          <div className="flex items-center space-x-3 pl-2 border-l border-slate-200">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setProfileOpen(false);
                }}
                className="p-2 rounded-xl border border-[#8C9C8D]/30 bg-slate-50 text-slate-700 hover:bg-[#8C9C8D]/10 relative transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#9C0B00] rounded-full ring-2 ring-white"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl shadow-xl bg-white border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-sm text-slate-800">Notifications</span>
                    <span className="text-xs bg-[#9C0B00]/10 text-[#9C0B00] px-2 py-0.5 rounded-full font-medium">
                      3 new
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className="px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 mt-1.5 rounded-full ${n.unread ? "bg-[#9C0B00]" : "bg-transparent"}`}
                        />
                        <div>
                          <p className="text-xs font-medium text-slate-800">{n.title}</p>
                          <span className="text-[10px] text-[#8C9C8D]">
                            {n.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setNotificationsOpen(false);
                }}
                className="flex items-center space-x-3 p-1.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 rounded-xl object-cover ring-2 ring-[#9C0B00]/20"
                />
                <div className="hidden md:block text-left">
                  <span className="block text-xs font-semibold leading-tight text-slate-800">
                    Fahad
                  </span>
                  <span className="block text-[10px] text-[#8C9C8D]">
                    Admin
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden md:block" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl shadow-xl bg-white border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-800">Administrator</p>
                    <p className="text-[10px] text-[#8C9C8D] truncate">
                      admin@example.com
                    </p>
                  </div>
                  <div className="pt-1">
                    <button 
                      onClick={() => navigate("/login-route")}
                      className="w-full text-left px-4 py-2 text-xs text-[#9C0B00] hover:bg-[#9C0B00]/10 flex items-center space-x-2 transition-colors font-medium"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;