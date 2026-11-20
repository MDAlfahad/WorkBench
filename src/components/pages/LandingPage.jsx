import LandingPageCrausel from "../components/crausel/LandingPageCrausel";
import { FaWhatsapp } from "react-icons/fa";
import AcadamicServicesPage from "./AcadamicServicesPage";
import DetailsPage from "./DetailsPage";
import FooterPage from "./FooterPage";
import TeachersShowCrausel from "../components/crausel/TeachersShowCrausel";
import TopBarLogo from "../navbar/TopBarLogo";

const LandingPage = () => {
  return (
    <div className="relative w-full">
      <div className="fixed z-50 bottom-10 right-2 cursor-pointer">
        <a href="https://www.whatsapp.com" title="WhatsApp" target="_blank">
          {" "}
          <span className="flex flex-col items-center bg-green-600 rounded-full p-3">
            <FaWhatsapp size={45} color="white" />
          </span>
        </a>
      </div>
      <TopBarLogo/>
      <LandingPageCrausel />
      <AcadamicServicesPage/>
      <DetailsPage/>
      <TeachersShowCrausel/>
      <FooterPage/>
    </div>
  );
};

export default LandingPage;
