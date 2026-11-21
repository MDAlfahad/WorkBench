import { BookOpen, BookText, ReceiptText } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubjectSyb from "./SubjectSyb";
import QuestionBankSyb from "./QuestionBankSyb";
import PyqSyb from "./PyqSyb";
const SyllabussRoute = () => {
  const navigate = useNavigate();
  const [activeNav, setActivenav] = useState("SUBJECT");

  const navItem = [
    { name: "SUBJECT", icon: BookOpen },
    { name: "QUESTION BANK", icon: BookText },
    { name: "PYQ", icon: ReceiptText },
  ];

  const renderSubject = () => <SubjectSyb />;
  const renderQuestionBank = () => <QuestionBankSyb />;
  const renderPyq = () => <PyqSyb />;

  const renderActiveProfile = () => {
    switch (activeNav) {
      case "SUBJECT":
        return renderSubject();
      case "QUESTION BANK":
        return renderQuestionBank();
      case "PYQ":
        return renderPyq();
      default:
        return renderSubject();
    }
  };

  return (
    <div className=" max-w-[1800px] m-auto w-full h-full flex flex-col gap-4 px-4 lg:px-12 py-10 bg-gray-100 capitalize">
      <div>
         <div className="w-full p-3 bg-white text-gray-800 rounded-xl border border-slate-300">
          <h1 className="text-2xl font-semibold ">Syllabuss</h1>
          <p className="text-sm ">get your all Learning stuff here</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between rounded-xl border border-slate-300 bg-white overflow-hidden ">
       
        {navItem.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.name;
          return (
            <div
              className=" w-full flex item-center justify-center p-4 gap-20 "
              key={item.name}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2 border border-primary rounded-lg hover:scale-105 animate-in ease-in duration-300
            ${isActive ? "bg-primary text-white" : "text-slate-600 hover:bg-primary/80 hover:text-white"}`}
                onClick={() => {
                  setActivenav(item.name);
                }}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? "text-white" : ""
                  }`}
                />
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
      <main className="w-full h-full bg-white rounded-xl p-4 border boder-slate-300 ">
        {renderActiveProfile()}
      </main>
    </div>
  );
};

export default SyllabussRoute;
