import React from "react";
import Image from "../../../assets/doctor.jpg";
import { ArrowUpRight, GraduationCap, IndianRupeeIcon, TrendingUp, Users } from "lucide-react";
const StudentDashboard = () => {
  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] md:flex capitalize overflow-hidden">
      <div className="lg:w-[300px] lg:h-full bg-white border border-slate-200 px-2 md:flex flex-col items-center pt-20 lg:pt-40 overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40 bg-green-500/50 rounded-full overflow-hidden border border-secondary">
            <img src={Image} alt="" className="w-full h-full object-fill" />
          </div>
          <h1 className="font-semibold">Doctor XYZ</h1>
        </div>
        <div className="w-full flex flex-col items-start text-black/60">
          <span className="flex items-center gap-1">
            Roll no: <p>1234</p>
          </span>
          <span className="flex items-center gap-1">
            Class: <p>10th</p>
          </span>
          <span className="flex items-center gap-1">
            E-mail: <p>example@com</p>
          </span>
          <span className="flex items-center gap-1">
            mobile no:<p>91XXXXXXX90</p>
          </span>
          <span className="flex items-center gap-1">
            Aadhar no:<p>98XX-XXXX-XXXX</p>
          </span>
          <span className="flex items-center gap-1">
            Aadhar no:<p>98XX-XXXX-XXXX</p>
          </span>
        </div>
      </div>
      <div className="py-16 lg:py-20 px-2 lg:px-10 w-full bg-gray-100 flex flex-col gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`p-3 rounded-2xl bg-indigo-50 text-indigo-600"}`}
              >
                <IndianRupeeIcon className="w-6 h-6" />
              </span>
              
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
              Total Fees
            </h3>
            <p className="text-2xl font-bold tracking-tight flex items-center"><IndianRupeeIcon/> 48,250.80</p>
          </div>

          <div
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`p-3 rounded-2xl bg-violet-50 text-violet-600"}`}
              >
                <Users className="w-6 h-6" />
              </span>
              
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
              Total Attendance
            </h3>
            <p className="text-2xl font-bold tracking-tight">84 days</p>
          </div>

          <div
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`p-3 rounded-2xl bg-purple-50 text-purple-600"}`}
              >
                <GraduationCap className="w-6 h-6" />
              </span>
              
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
              (settings)
            </h3>
            <p className="text-2xl font-bold tracking-tight">148</p>
          </div>

          <div
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`p-3 rounded-2xl bg-blue-50 text-blue-600"}`}>
                {/* <TrendingUp className="w-6 h-6" /> */}
              </span>
            
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
              (setting)
            </h3>
            <p className="text-2xl font-bold tracking-tight">96.8%</p>
          </div>
        </div>

        <div className="w-full h-[70vh] border border-slate-200 rounded-lg overflow-y-auto bg-white "></div>
      </div>
    </div>
  );
};

export default StudentDashboard;
