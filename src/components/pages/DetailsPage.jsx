import Image from "../../assets/doctor.jpg";
const DetailsPage = () => {
  return (
    <div className="max-w-[1800px] w-fulllg:20 xl:gap-80 m-auto bg-white px-4  lg:px-10 xl:px-20 py-4 lg:py-28">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-center gap-4 lg:gap-10 xl:gap-16 w-full ">
          <div className="w-[20rem] h-[40vh] bg-secondary">
            <img src={Image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[900px]">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              illo. Odit, nostrum vel expedita rerum fugit asperiores explicabo
              nobis delectus numquam vero aut libero suscipit? Cumque optio
              doloremque molestiae eos.
            </p>
            <p className="flex py-1 items-end italic">____ "Chairman Name"</p>
          </div>
        </div>
        <div className="flex items-start justify-center gap-4 text-right lg:gap-10 xl:gap-40 bg-secondary/10 overflow-hidden">
          <div className="max-w-[900px] ">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              illo. Odit, nostrum vel expedita rerum fugit asperiores explicabo
              nobis delectus numquam vero aut libero suscipit? Cumque optio
              doloremque molestiae eos.
            </p>
            <p className="text-end py-1 italic w-full">____ "Chairman Name"</p>
          </div>
          <div className="w-[20rem] h-[40vh] bg-secondary">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="flex items-start justify-center gap-4 lg:gap-10 xl:gap-16">
          <div className="w-[20rem] h-[40vh] bg-secondary">
            <img src={Image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="max-w-[900px]">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              illo. Odit, nostrum vel expedita rerum fugit asperiores explicabo
              nobis delectus numquam vero aut libero suscipit? Cumque optio
              doloremque molestiae eos.
            </p>
            <p className="flex py-1 items-end italic">____ "Chairman Name"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
