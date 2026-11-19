import { useState } from "react";
import BackButton from "../../../components/buttons/BackButton";
import GlobalButton from "../../../components/buttons/GlobalButton";
import { Price } from "../../../components/currency/Currency";

const IssueResultPage = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((setIsShow) => !isShow);
  };
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-start capitaliz relative">
      {isShow && (
        <div className="w-full h-[90vh] flex flex-col px-4 items-center justify-center bg-gray-500/30 backdrop-blur-sm absolute ">
        <form
          action="submit"
          className=" flex flex-col items-center gap-2 w-[500px] bg-white p-6 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col ">
              <label htmlFor="english">English</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="hindi">Hindi</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col  ">
              <label htmlFor="maths">maths</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="science">science</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col ">
              <label htmlFor="sst">SST</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sanskrit">Sanskrit</label>
              <input
                type="text"
                placeholder="marks"
                className="border border-slate-300 outline-primary p-2"
              />
            </div>
          </div>
          <GlobalButton text="Upload Mark" />
          <BackButton text="back" onClick={handleShow}/>
        </form>
      </div>
      )}
      <h1 className="w-full text-center text-2xl mb-6 bg-white px-4 py-2 rounded-lg">
        Issue result's
      </h1>
      <div className="w-full">
        <table className="w-full ">
          <thead className=" ">
            <tr className=" text-md border border-slate-400">
              <th className="">Students Name</th>
              <th className=" ">Roll no</th>
              <th className=" ">reg. No</th>
              <th className=" ">Result</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center text-gray-600 border-b border-slate-400">
              <td className="">MD Alfahad</td>
              <td className=" ">05</td>
              <td className=" ">025</td>
              <td
                className=" cursor-pointer hover:underline hover:text-primary animate-in fade-in py-2 duration-500"
                onClick={handleShow}
              >
                upload marks
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueResultPage;
