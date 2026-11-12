import { AiOutlineBell } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  IoBookOutline,
  IoCalendarClearOutline,
  IoCalendarNumberOutline,
  IoSchool,
} from "react-icons/io5";
import { LuBell, LuNotepadText } from "react-icons/lu";
import NoticeNotificationBox from "../components/notifications/NoticeNotificationBox";

const AcadamicServices = () => {
  return (
    <div className="max-w-[1800px] w-full flex items-start justify-center gap-5 lg:20 xl:gap-80 m-auto bg-white px-4  lg:px-10 xl:px-20 py-4 lg:py-28">
      <div className="flex flex-col gap-4 max-w-[800px]">
        <div className="flex items-center gap-4 ">
          <div className="rounded-md  border-2 border-black-60 w-40 h-32  overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-2 border-b-8  border-red-600 flex flex-col items-start justify-center gap-2  ">
              <span className="flex items-center p-2 rounded-full bg-red-600 text-white justify-center">
                <IoBookOutline size={24} />
              </span>
              <h1>Syllabuss</h1>
            </div>
          </div>
          <div className="rounded-md  border-2 border-black-60 w-40 h-32 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-2 border-b-8 border-secondary flex flex-col items-start justify-center gap-2  ">
              <span className="flex p-2 rounded-full bg-secondary items-center text-white justify-center">
                <IoCalendarNumberOutline size={24} />
              </span>
              <h1>Acadamic Calander</h1>
            </div>
          </div>
          <div className="rounded-md  border-2 border-black-60 w-40 h-32 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-2 border-b-8  border-red-600 flex flex-col items-start justify-center gap-2  ">
              <span className="flex p-2 bg-red-600 text-white rounded-full items-center justify-center">
                <IoCalendarClearOutline size={24} />
              </span>
              <h1>Examination</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-md  border-2 border-black-60 w-40 h-32 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-2 border-b-8 border-secondary flex flex-col items-start justify-center gap-2  ">
              <span className="flex p-2 bg-secondary rounded-full text-white items-center justify-center">
                <LuNotepadText size={24} />
              </span>
              <h1>Result</h1>
            </div>
          </div>
          <div className="rounded-md  border-2 border-black-60 overflow-hidden w-40 h-32 cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="w-full h-full p-2 border-b-8  border-red-600 flex flex-col items-start justify-center gap-2  ">
              <span className="flex items-center p-2 bg-red-600 text-white rounded-full justify-center">
                <LuBell size={24} />
              </span>
              <h1>Notice</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex lg:items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/40 hover:border-black cursor-pointer hover:scale-105 transition-all duration-300">
            <ImBooks className="text-primary" size={22} />{" "}
            <p className="flex items-center">
              E-library <IoIosArrowRoundForward size={30} />
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/40 hover:border-black cursor-pointer hover:scale-105 transition-all duration-300">
            <IoSchool size={22} className="text-primary" />
            <p className="flex items-center">
              Addimission <IoIosArrowRoundForward size={30} />
            </p>
          </div>
        </div>
        <div className="h-[50vh] border border-secondar ">
          <div className="w-full flex items-center justify-between py-3 px-2  bg-primary/90">
            <h1 className="flex items-center text-2xl gap-2  text-white">
              <AiOutlineBell /> Latest Notice
            </h1>
            <span className="flex items-center text-white/80 gap-1">
              <p className="">view all</p> <GoLinkExternal />
            </span>
          </div>
          <div className="w-full py-2 px-2 overflow-y-auto">

            <NoticeNotificationBox/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcadamicServices;
