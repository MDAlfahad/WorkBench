import GlobalButton from "../../components/buttons/GlobalButton";
import Image from "../../../assets/doctor.jpg";
import {
  BookOpenText,
  GraduationCap,
  IndianRupeeIcon,
  Mail,
  Phone,
  ScrollText,
  SquarePen,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import ResultCertificateCard from "../../components/result/ResultCertificateCard";
const StudentDashboard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((setShow) => !show);
  };

  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] md:flex capitalize overflow-hidden relative">
      {show && (
        <div className="w-full h-full pt-16 flex flex-col items-center justify-center absolute top-0 left-0 bg-slate-500/30 overflow-y-auto z-50">
          <ResultCertificateCard />
          <div className="flex items-center gap-4 py-4">
            <button
              className="px-4 py-2 rounded-md bg-white hover:bg-primary hover:text-white"
              onClick={handleShow}
            >
              Back
            </button>
            <button
              className="px-4 py-2 rounded-md bg-primary/80 hover:bg-primary text-white"
              onClick={print}
            >
              Print
            </button>
          </div>
        </div>
      )}
      <div className="lg:w-[350px] lg:h-full bg-white border border-slate-200 px-2 md:flex flex-col items-center pt-20 lg:pt-40 overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40 bg-green-500/50 rounded-full overflow-hidden border border-secondary">
            <img src={Image} alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-semibold flex items-center gap-2"> {`Alfahad khan`}</h1>
        </div>
        <div className="w-full flex flex-col items-start text-black/60">
          <span className="flex items-center gap-1">
            <GraduationCap size={20}/>
            Roll no: <p>1234</p>
          </span>
          <span className="flex items-center gap-1">
            <SquarePen size={18}/>
            Class: <p>10th</p>
          </span>
          <span className="flex items-center gap-1">
            <Mail size={18}/>
            E-mail: <p>example@com</p>
          </span>
          <span className="flex items-center gap-1">
            <Phone size={18}/>
            mobile no:<p>91XXXXXXX90</p>
          </span>
          <span className="flex items-center gap-1">
            <User size={18}/>
            Aadhar no:<p>98XX-XXXX-XXXX</p>
          </span>
          
        </div>
        <GlobalButton text="Edit Profile" />
      </div>

      {/* side page  */}

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
            <p className="text-2xl font-bold tracking-tight flex items-center">
              <IndianRupeeIcon /> 48,250.80
            </p>
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
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"} cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`p-3 rounded-2xl bg-purple-50 text-purple-600"}`}
              >
                <Trophy className="w-6 h-6" />
              </span>
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1 ">
              get Certificate
            </h3>
            <p className="text-2xl font-bold tracking-tight">Certificate</p>
          </div>

          <div
            className={`p-6 rounded-3xl border transition-all hover:shadow-lg bg-white border-slate-200"} cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-4 ">
              <span className={`p-3 rounded-2xl bg-blue-50 text-blue-600"}`}>
                <BookOpenText />
              </span>
            </div>
            <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
              Get Your All Books
            </h3>
            <p className="text-2xl font-bold tracking-tight">E-Library</p>
          </div>
        </div>
        <h1 className="text-xl text-center font-semibold border border-slate-200 px-2 py-2 rounded-lg bg-white">
          Results
        </h1>
        <div className="w-full h-[70vh] border border-slate-200 rounded-lg overflow-y-auto bg-white py-2 text-gray-500">
          <div className="flex items-center justify-between border-y border-slate-200 px-4 py-2 bg-gray-200">
            <span className="flex items-center gap-20">
              <p className="flex items-center gap-2">
                <ScrollText size={16} />
                {`First Terminal Exam (September-October)`}
              </p>
              <p>{new Date().toLocaleDateString()}</p>
            </span>

            <p className="underline hover:text-primary cursor-pointer text-black" onClick={setShow}>
              Show Result
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
