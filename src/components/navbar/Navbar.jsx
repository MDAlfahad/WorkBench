import GlobalButton from "../buttons/GlobalButton";
import LoginButton from "../buttons/LoginButton";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-whtie">
      <div className="max-w-[1800px] w-full m-auto flex items-center justify-between px-4 lg:px-8 xl:px-12 py-2">
        <div>Grade</div>
        <div>
          <ul className="flex items-center gap-10">
            <li className="text-black hover:text-primary cursor-pointer">Syllabus</li>
            <li className="text-black hover:text-primary cursor-pointer">gallery</li>
            <li className="text-black hover:text-primary cursor-pointer">Raise Issue</li>
            <li className="text-black hover:text-primary cursor-pointer">Notice</li>
            <li className="text-black hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <GlobalButton text="Dashboard" />
          <LoginButton text={`Login`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
