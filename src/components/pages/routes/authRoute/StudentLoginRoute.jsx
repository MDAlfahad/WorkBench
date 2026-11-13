import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import LoginButton from "../../../buttons/LoginButton";

const StudentLoginRoute = () => {
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow((setShow) => !show);
  };
  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] flex flex-col items-center  justify-center capitalize  overflow-hidden ">
      <h1 className="py-4 text-3xl font-semibold">Welcome Back!</h1>
      <div className="max-w-[1600px] md:w-[1200px] flex items-center gap-2 border borfder-primary/80">
        <form action="submit" className=" w-[600px] flex flex-col gap-2 px-4 py-2">
          <label htmlFor="userid" className="text-sm ">
            User id{" "}
          </label>
          <input
            type="text"
            placeholder="Your id"
            name="userId"
            className="w-full px-2 py-2 border border-primary/60 outline-none"
          />
          <label htmlFor="password" className="text-sm ">
            Password
          </label>
          <span className="flex items-center border border-primary/60 w-full ">
            <input
              type={!show ? "password" : "text"}
              name="password"
              placeholder="password"
              className="w-full px-2 py-2 border-none outline-none"
            />
            <div onClick={handleshow} className="px-2 py-2 bg-primary/70 text-white">
              {show ? <FaRegEye size={24} /> : <FaRegEyeSlash size={24} />}
            </div>
          </span>
          <div className="w-full text-right"><p>Forgot passowed?</p></div>
          <div className="flex flex-col gap-2">
            <button className="w-full px-2 py-2 rounded-full text-white bg-primary/70 border border-primary/60 hover:bg-primary/80 transition-all duration-300">Login</button>
            <div className="w-full px-2 py-2 rounded-full text-black text-center hover:text-white bg-transparent border border-primary/60 hover:bg-primary/70  transition-all duration-300">back</div>
          </div>
          <div>
            <span className="flex items-center gap-1 justify-center">new user! <p className="text-primary hover:underline cursor-pointer">Get Register</p></span>
          </div>
        </form>
        <div>sdfasdjhsklhfklgshkjghasdkjfhkjsdfhfkjhskfhsakhfkjjsahkjfhkasf</div>
      </div>
    </div>
  );
};

export default StudentLoginRoute;
