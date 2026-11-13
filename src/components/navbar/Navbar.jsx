import { useNavigate } from "react-router-dom";
import GlobalButton from "../buttons/GlobalButton";
import LoginButton from "../buttons/LoginButton";
import { useState } from "react";
import { Bell, ChevronDown, LayoutDashboard, LogOut } from "lucide-react";
const Navbar = () => {
  const navigate = useNavigate();

  

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
    <div className="bg-whtie fixed z-50 bg-white w-full shadow-lg">
      <div className="max-w-[1800px] w-full m-auto flex items-center justify-between px-4 lg:px-8 xl:px-12 py-2">
        <div>Grade</div>
        <div>
          <ul className="flex items-center gap-10">
            <li className="text-black hover:text-primary cursor-pointer">
              Syllabus
            </li>
            <li className="text-black hover:text-primary cursor-pointer">
              Events
            </li>
            <li className="text-black hover:text-primary cursor-pointer">
              gallery
            </li>
            <li className="text-black hover:text-primary cursor-pointer">
              Raise Issue
            </li>
            <li className="text-black hover:text-primary cursor-pointer">
              Notice
            </li>
            <li className="text-black hover:text-primary cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <LoginButton
            text={`Login`}
            onClick={() => navigate("/login-route")}
          />
          <div className="flex items-center space-x-3">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotificationsOpen(!notificationsOpen);
                  setProfileOpen(false);
                }}
                className={`p-2 rounded-xl border relative transition-colors 
                   "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                `}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
              </button>

              {notificationsOpen && (
                <div
                  className={`absolute right-0 mt-2 w-80 rounded-2xl shadow-xl border py-2 z-50 bg-white border-slate-200 text-slate-800`}
                >
                  <div className="px-4 py-2 border-b border-inherit flex justify-between items-center">
                    <span className="font-semibold text-sm">Notifications</span>
                    <span className="text-xs bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-full font-medium">
                      3 new
                    </span>
                  </div>
                  <div className="divide-y divide-inherit">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer flex items-start space-x-3"
                      >
                        <div
                          className={`w-2 h-2 mt-1.5 rounded-full ${n.unread ? "bg-indigo-600" : "bg-transparent"}`}
                        />
                        <div>
                          <p className="text-xs font-medium">{n.title}</p>
                          <span className="text-[10px] text-slate-400">
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
                className="flex items-center space-x-3 p-1.5 rounded-xl  transition-colors"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-8 h-8 rounded-xl object-cover ring-2 ring-indigo-500/30"
                />
                <div className="hidden md:block text-left">
                  <span className="block text-xs font-semibold leading-tight">
                    Fahad
                  </span>
                  <span className="block text-[10px] text-slate-400">
                    Student
                  </span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden md:block" />
              </button>

              {profileOpen && (
                <div
                  className={`absolute right-0 mt-2 w-56 rounded-2xl shadow-xl border py-2 z-50 bg-white border-slate-200 text-slate-800`}
                >
                  <div className="px-4 py-3 border-b border-inherit">
                    <p className="text-xs font-semibold">Administrator</p>
                    <p className="text-[10px] text-slate-400 truncate">
                      admin@example.com
                    </p>
                  </div>
                  <div className="border-t border-inherit pt-1">

                    <button className="w-full text-left px-4 py-2 text-xs text-black/90 hover:bg-primary/20 flex items-center space-x-2 transition-colors"
                    onClick={()=>navigate("/student-dashboard")}>
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span
                       >Dashboard</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-rose-500 hover:bg-primary/20 flex items-center space-x-2 transition-colors">
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
    </div>
  );
};

export default Navbar;
