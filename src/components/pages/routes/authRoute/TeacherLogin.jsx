import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import "./login.css";
import GlobalButton from "../../../components/buttons/GlobalButton";
import BackButton from "../../../components/buttons/BackButton";
import { useNavigate } from "react-router-dom";
const TeacherLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow((setShow) => !show);
  };
  return (
    <div className="max-w-[1800px] m-auto w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden z-10 capitalize">
      <div className="bgteacher absolute "></div>
      <div className="max-w-[1600px] md:w-[600px] border borfder-primary/80 bg-white rounded-2xl">
        <h1 className="py-4 text-3xl text-center font-semibold">Login Here!</h1>
        <form
          action="submit"
          className=" w-full flex flex-col gap-2 px-4 py-2 uppercase"
        >
          <label htmlFor="userid" className="text-sm ">
            User id{" "}
          </label>
          <input
            type="text"
            placeholder="Your id"
            name="userId"
            className="w-full px-2 py-2 border border-primary/60 outline-none rounded-md"
          />
          <label htmlFor="password" className="text-sm ">
            Password
          </label>
          <span className="flex items-center border border-primary/60 w-full rounded-md overflow-hidden">
            <input
              type={!show ? "password" : "text"}
              name="password"
              placeholder="password"
              className="w-full px-2 py-2 border-none outline-none "
            />
            <div
              onClick={handleshow}
              className="px-2 py-2 bg-primary/90 text-white"
            >
              {show ? <FaRegEye size={24} /> : <FaRegEyeSlash size={24} />}
            </div>
          </span>
          <div className="flex justify-end text-right capitalize">
            <p className="cursor-pointer hover:underline hover:text-primary ">Forgot passowod?</p>
          </div>
          <div className="flex flex-col gap-2">
            <GlobalButton text="LOGIN" />
            <BackButton text="Back" onClick={() => navigate("/")} />
          </div>
          <div className="capitalize">
            {/* <span className="flex items-center gap-1 justify-center">
              new user!{" "}
              <p className="text-primary hover:underline cursor-pointer">
                Get Register
              </p>
            </span> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
