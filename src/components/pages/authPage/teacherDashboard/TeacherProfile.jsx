import {
  BookOpenText,
  Clock,
  Globe,
  Mail,
  PenLine,
  Phone,
  Share,
} from "lucide-react";
import Image from "../../../../assets/doctor.jpg";
import { useState } from "react";
import TimeTable from "./TimeTable";

const TeacherProfile = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow((setIsShow) => !isShow);
  };
  return (
    <div className="flex flex-col gap-2 w-full capitalize text-slate-600 relative">
      {isShow && <div className="w-full h-[90vh] flex items-center justify-center absolute bg-gray-500/30 backdrop-blur-sm p-4 z-50">
        <TimeTable
        onClick={handleShow}/>
        </div>}
      <div className="text-2xl md:text-4xl">My Profile</div>
      <div className="flex flex-col gap-2 w-full ">
        <div className="flex  bg-white rounded-md lg:rounded-xl border boder-slate-200 p-2 lg:p-4">
          <div className="w-48 h-48 overflow-hidden">
            {" "}
            <img src={Image} alt="" className="w-full h-full object-cover " />
          </div>
          <div className="flex flex-col ml-10">
            <div className="flex flex-col gap-2">
              <div className="flex items-center lg:gap-20">
                <div>
                  <h1 className="text-xl">Alfahad khan</h1>
                  <p className="flex items-center gap-1 text-xs text-gray-500">
                    {" "}
                    <Clock size={14} /> Activity 45 day
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 p-2 rounded-lg border border-slate-400">
                    <Share size={16} />
                  </span>
                  <span className="text-gray-500 p-2 rounded-lg border border-slate-400">
                    <PenLine size={16} />
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-10">
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-1 ">
                    {" "}
                    <Phone size={14} /> +91 62XXXXXX25
                  </p>
                  <p className="flex items-center gap-1 ">
                    <Globe size={14} />
                    bhilai, bg
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-1 ">
                    <Mail size={14} />
                    email address
                  </p>
                  <p className="flex items-center gap-1 ">
                    <BookOpenText size={14} />
                    subject teacher
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-10">
              <div className="flex flex-col items-center border-b-4 border-primary px-3 py-2 ">
                <p className="text-sm lg:text-md ">total student</p>
                <p className="text-2xl text-slate-500">100</p>
              </div>
              <div className="flex flex-col items-center border-b-4 border-primary px-3 py-2 ">
                <p className="text-sm lg:text-md ">total leave</p>
                <p className="text-2xl text-slate-500">10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between  bg-white rounded-md lg:rounded-xl border boder-slate-200 p-2 lg:px-6 lg:py-4">
          <p className="font-semibold">Time Table</p>
          <p className="hover:underline hover:text-primary cursor-pointer hover:scale-105 animate-in ease-in duration-300"
          onClick={handleShow}>
            Change Time Table
          </p>
        </div>
        <div className="flex items-center justify-between  bg-white rounded-md lg:rounded-xl border boder-slate-200 p-2 lg:px-6 lg:py-4"></div>
      </div>
    </div>
  );
};

export default TeacherProfile;
