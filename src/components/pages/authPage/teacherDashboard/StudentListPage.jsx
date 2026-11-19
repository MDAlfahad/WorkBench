import React, { useState } from "react";
import { Price } from "../../../components/currency/Currency";
import GlobalButton from "../../../components/buttons/GlobalButton";
import BackButton from "../../../components/buttons/BackButton";
import { Plus } from "lucide-react";

const StudentListPage = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((setIsClick) => !isClick);
  };

  return (
    <div className="capitalize  w-full relative">
      
      {isClick && (
        <div className="w-full h-[90vh] bg-gray-400/30 flex items-center justify-center absolute backdrop-blur-sm rounded-xl">
          <div>
            <form
              action="sumbit"
              className="flex flex-col gap-2 w-[800px] max-w[900px] bg-white px-6 py-4 rounded-2xl"
            >
              <div className="w-full flex items-center gap-4">
                <div className="w-full flex flex-col">
                  <label htmlFor="name">Student name</label>
                  <input
                    type="text"
                    placeholder="example"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
                <div className=" w-full flex flex-col">
                  <label htmlFor="fathersName"> Father's name</label>
                  <input
                    type="text"
                    placeholder="example"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
              </div>
              <label htmlFor="rollNo"> Roll number</label>
              <input
                type="text"
                placeholder="Roll no"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <label htmlFor="mobilno"> mobile number</label>
              <input
                type="number"
                placeholder="+91-XXXX-XXXX-XXX"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <label htmlFor="email"> email address</label>
              <input
                type="email"
                placeholder="example@.com"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <div className="w-full flex items-center gap-4">
                <div className="w-full flex flex-col">
                  <label htmlFor="dOB"> Date of Birth</label>
                  <input
                    type="text"
                    placeholder="10/01/2000"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
                <div className="w-full flex flex-col">
                  <label htmlFor="bloodGroup">Blood group</label>
                  <input
                    type="text"
                    placeholder="O-"
                    className="p-2 border border-slate-200 rounded-lg outline-primary"
                  />
                </div>
              </div>
              <label htmlFor="regNumber"> regestration Number</label>
              <input
                type="text"
                placeholder="A23232"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />

              <label htmlFor="pendingFee"> Pending fee</label>
              <input
                type="text"
                placeholder="pending fee"
                className="p-2 border border-slate-200 rounded-lg outline-primary"
              />
              <GlobalButton text="proceed" />
              <BackButton text="Back" onClick={handleClick} />
            </form>
          </div>
        </div>
      )}
      <div className="w-full bg-white p-4 rounded-xl">
        <h1 className="text-center text-2xl pb-8">Student's List</h1>
        <table className="w-full ">
          <thead className=" ">
            <tr className=" text-md ">
              <th className="border border-gray-400">Students Name</th>
              <th className="border border-gray-400 ">father's name</th>
              <th className="border border-gray-400 ">Roll no</th>
              <th className="border border-gray-400 ">Mobile no</th>
              <th className="border border-gray-400 ">Email </th>
              <th className="border border-gray-400 ">D.O.B</th>
              <th className="border border-gray-400 ">blood group</th>
              <th className="border border-gray-400 ">reg. No</th>
              <th className="border border-gray-400 ">total fee</th>
              <th className="border border-gray-400 ">pending fee</th>
              <th className="border border-gray-400 ">Remark</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center py-1 text-gray-600">
              <td className="border border-gray-400">MD Alfahad</td>
              <td className="border border-gray-400 ">Haider ali</td>
              <td className="border border-gray-400 ">05</td>
              <td className="border border-gray-400 ">6260379325</td>
              <td className="border border-gray-400 lowercase">
                alfahadkhan1950@gmail.com
              </td>
              <td className="border border-gray-400 ">05/05/2006</td>
              <td className="border border-gray-400 ">NA</td>
              <td className="border border-gray-400 ">025</td>
              <td className="border border-gray-400 ">
                <Price amount={12000} currency="inr" locale="en-in" />
              </td>
              <td className="border border-gray-400 ">
                <Price amount={0} currency="inr" locale="en-in" />
              </td>
              <td className="border border-gray-400 cursor-pointer hover:bg-primary hover:text-white animate-in fade-in  duration-500"
              onClick={handleClick}>
                Edit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListPage;
