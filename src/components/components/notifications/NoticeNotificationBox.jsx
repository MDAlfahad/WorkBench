import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";

const NoticeNotificationBox = () => {
  return (
    <div className="flex items-center gap-2 border border-primary cursor-pointer hover:border-black hover:bg-primary/10">
      <div className="flex flex-col py-1">
        <span className="flex items-center gap-4">
          <GoDotFill size={20} className="text-primary" />
          <p className="text-sm line-clamp-2">
            Unlike changing width or height, scaling an element visually shrinks
            or enlarges it without shifting surrounding layout elements.
          </p>
        </span>
        <div className="px-6 flex items-center text-sm gap-1 text-black/50">
          <CiCalendar /> {new Date().toLocaleDateString()}
        </div>
      </div>

      <IoIosArrowRoundForward size={40} />
    </div>
  );
};

export default NoticeNotificationBox;
