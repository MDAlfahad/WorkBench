import { Clock, Mail, MapPin, Phone } from "lucide-react";

const FooterPage = () => {
  return (
    <div className="max-w-[1800px] w-full lg:20 xl:gap-80 m-auto px-4  lg:px-10 xl:px-20 py-4 shadow capitalize">
      <div className=" py-6 text-gray-700">
        <div className="flex items-start justify-between px-20 text-sm">
          <div>
            About school
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[16px] font-semibold uppercase">Student links</li>
            <li className="hover:underline hover:text-primary cursor-pointer">E-Books</li>
            <li className="hover:underline hover:text-primary cursor-pointer">gallery</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Notice</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[16px] font-semibold uppercase">
              Important links
            </li>
            <li className="hover:underline hover:text-primary cursor-pointer">Login</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Profile</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Raise issue</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Contact us</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[16px] font-semibold uppercase">links</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Syllabus</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Time Table</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Result</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Sports</li>
            <li className="hover:underline hover:text-primary cursor-pointer">Events</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[16px] font-semibold uppercase">contact us</li>
            <span className="flex items-center gap-2 ">
              <MapPin size={14} />
              <li>Raipur, Chhattisgarh 497235</li>
            </span>
            <span className="flex items-center gap-2 ">
              <Phone size={14} />
              <li>Tel:-929292929</li>
            </span>
            <span className="flex items-center gap-2 ">
              <Phone size={14} />
              <li>Exam helpline:- 20292929292</li>
            </span>
            <span className="flex items-center gap-2 ">
              <Mail size={14} />
              <li>example@.com</li>
            </span>
            <span className="flex items-center gap-2 ">
              <Clock size={14} />
              <li>09:00AM - 03:00PM</li>
            </span>
          </ul>
        </div>
      </div>
      <div className="w-full text-center">
        <p> &copy; fahad. all rights reserved 2026 </p>
      </div>
    </div>
  );
};

export default FooterPage;
