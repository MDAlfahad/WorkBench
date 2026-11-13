import React from "react";
import { useNavigate } from "react-router-dom";

const LoginRoute = () => {
  const naviagte = useNavigate();
  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] flex items-center  justify-center capitalize overflow-hidden">
      <div className="flex flex-col gap-2 border border-primary/60 px-2 py-2 md:px-10 md:py-10 rounded-xl">
        <div className="flex items-center gap-4">
          <div
            className="px-4 py-2 bg-secondary/80 text-white rounded-full font-semibold hover:bg-secondary/100 cursor-pointer"
            onClick={() => naviagte("/student-login-page")}
          >
            Student Login
          </div>
          <div className="px-4 py-2 bg-secondary/80 text-white rounded-full font-semibold hover:bg-secondary/100 cursor-pointer">
            Teacher Login
          </div>
        </div>
        <div className="px-4 py-2 bg-secondary/80 text-white w-full rounded-full cursor-pointer text-center font-semibold">
          Admin Login
        </div>
      </div>
    </div>
  );
};

export default LoginRoute;
