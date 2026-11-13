import React from "react";
import Image from "../../../assets/doctor.jpg";
const StudentDashboard = () => {
  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] md:flex capitalize overflow-hidden">
      <div className="lg:w-[250px] lg:h-full bg-primary/40 px-2 md:flex flex-col items-center pt-20 lg:pt-40 overflow-hidden">
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40 bg-green-500/50 rounded-full overflow-hidden border border-secondary">
            <img src={Image} alt="" className="w-full h-full object-fill" />
          </div>
          <h1 className="font-semibold">Doctor XYZ</h1>
        </div>
        <div className="w-full flex flex-col items-start text-black/60">
          <span className="flex items-center gap-1">
            Roll no: <p>1234</p>
          </span>
          <span className="flex items-center gap-1">
            Class: <p>10th</p>
          </span>
          <span className="flex items-center gap-1">
            E-mail: <p>example@com</p>
          </span>
          <span className="flex items-center gap-1">
            mobile no:<p>91XXXXXXX90</p>
          </span>
          <span className="flex items-center gap-1">
            Aadhar no:<p>98XX-XXXX-XXXX</p>
          </span>
          <span className="flex items-center gap-1">
            Aadhar no:<p>98XX-XXXX-XXXX</p>
          </span>
        </div>
      </div>
      <div className="py-16 lg:py-20 px-2 w-full bg-secondary/50 flex flex-col gap-2">
        <div className="w-full flex items-center justify-center inline-block gap-5">
          <div className="w-[300px] px-2 py-4  border bg-secondary/50 rounded-lg">
            <span className="text-2xl font-semibold flex flex-col items-center">
              Total attendace(%) <h1 className="text-3xl font-bold">100%</h1>
            </span>
          </div>
          <div className="w-[300px] px-2 py-4  border bg-secondary/50 rounded-lg">
            <span className="text-2xl font-semibold flex flex-col items-center">
              Exam eligibal(%) <h1 className="text-3xl font-bold">eligibal</h1>
            </span>
          </div>
          <div className="w-[300px] px-2 py-4  border bg-secondary/50 rounded-lg">
            <span className="text-2xl font-semibold flex flex-col items-center">
              Fee <h1 className="text-3xl font-bold">Paid</h1>
            </span>
          </div>
          {/* <div className="w-[300px] px-2 py-4  border bg-secondary/50 rounded-lg">
            <span className="text-2xl font-semibold flex flex-col items-center">
              Total attendace(%) <h1 className="text-3xl font-bold">100%</h1>
            </span>
          </div> */}
        </div>

        <div className="w-full h-[70vh] border bg-white/60 overflow-y-auto "></div>
      </div>
    </div>
  );
};

export default StudentDashboard;
