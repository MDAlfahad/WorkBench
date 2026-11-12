import LandingPageCrausel from "../components/crausel/LandingPageCrausel";
import { FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="relative w-full ">
      <div
        className="fixed z-50 bottom-10 right-2 cursor-pointer"
      >
       <a href="https://www.whatsapp.com" title="WhatsApp"> <span className="flex flex-col items-center bg-green-600 rounded-full p-3">
          <FaWhatsapp size={45} color="white" />
        </span></a>
      </div>
      <LandingPageCrausel />
    </div>
  );
};

export default LandingPage;
