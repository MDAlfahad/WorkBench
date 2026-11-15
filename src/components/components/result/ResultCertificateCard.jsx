import Image from "../../../assets/doctor.jpg"

const ResultCertificateCard = () => {
  return (
    <div className="bg-white h-[801.89px] p-2 text-xs">
      <div className="flex items-center justify-center gap-4 py-4">
        <h1>Lgo</h1>
        <h1 className="uppercase text-4xl font-semibold">DP School, Bhilai</h1>
      </div>
      <div className="flex items-center justify-between px-10 py-8 border-y-4 border-black/50 ">
        <div className="flex items-center gap-6">
          <ul className="uppercase flex flex-col gap-1">
            <li className="font-semibold">student name:</li>
            <li className="font-semibold">class:</li>
            <li className="font-semibold">sem/year</li>
            <li className="font-semibold">roll no:</li>
            <li className="font-semibold">school:</li>
          </ul>
          <ul className="uppercase flex flex-col gap-1">
            <li>Md alfahad</li>
            <li>8th</li>
            <li>mid sem</li>
            <li>05</li>
            <li>DP school, Bhilai</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <ul className="uppercase flex flex-col gap-1">
            <li className="font-semibold">father's name:</li>
            <li className="font-semibold">exam session:</li>
            <li className="font-semibold">school no:</li>
            <li className="font-semibold">exam type:</li>
            <li className="font-semibold">medium:</li>
          </ul>
          <ul className="uppercase flex flex-col gap-1">
            <li>haider ali</li>
            <li>december</li>
            <li>722049</li>
            <li>regular</li>
            <li>english</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col  uppercase text-center  my-8">
        <div className="flex  ">
          <div className="border  border-slate-500 w-28 text-start flex flex-col gap-2">
            <p className="h-14 border-b  border-slate-500">subjects</p>
            <p>englsih</p>
            <p>hindi</p>
            <p>maths</p>
            <p>science</p>
            <p>sanskrit</p>
            <p>social science</p>
          </div>
          <div className="border-r border-b  border-slate-500 flex flex-col gap-2">
            <p className="border-y  border-slate-500 h-14">
              total <br />
              marks
            </p>
            <p>100</p>
            <p>100</p>
            <p>100</p>
            <p>100</p>
            <p>100</p>
            <p>100</p>
          </div>
          <div className="border-y border-r  border-slate-500">
            <h1 className="border-b  border-slate-500 h-6">max. marks</h1>
            <div className="flex ">
              <div className="border-r  border-slate-500 flex flex-col gap-2 ">
                <p className="h-8 border-b  border-slate-500">theory</p>
                <p>80</p>
                <p>80</p>
                <p>80</p>
                <p>80</p>
                <p>80</p>
                <p>80</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="h-8 border-b  border-slate-500">practical</p>
                <p>20</p>
                <p>20</p>
                <p>20</p>
                <p>20</p>
                <p>20</p>
                <p>20</p>
              </div>
            </div>
          </div>
          <div className="border-y border-r  border-slate-500">
            <h1 className="border-b  border-slate-500 h-6">min. marks</h1>
            <div className="flex ">
              <div className="border-r  border-slate-500 flex flex-col gap-2">
                <p className="h-8 border-b  border-slate-500">theory</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="h-8 border-b  border-slate-500">practical</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
              </div>
            </div>
          </div>

          <div className="border-y border-r  border-slate-500">
            <h1 className="border-b  border-slate-500 h-6">marks obtained</h1>
            <div className="flex ">
              <div className="border-r  border-slate-500 flex flex-col gap-2">
                <p className="h-8 border-b  border-slate-500">theory</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
                <p>23</p>
              </div>
              <div className="flex flex-col border-r  border-slate-500 gap-2">
                <p className="h-8 border-b  border-slate-500">practical</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
              </div>
              <div className="flex flex-col border-r  border-slate-500 gap-2">
                <p className="h-8 border-b   border-slate-500">activity</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
                <p>07</p>
              </div>
              <div className="flex flex-col gap-">
                <p className="border-b  border-slate-500">Total</p>
                <div className="flex ">
                  <div className="flex flex-col gap-2 border-r  border-slate-500">
                    <p className="h-4 border-b  border-slate-500 text-[10px] ">
                      figures
                    </p>
                    <p>07</p>
                    <p>07</p>
                    <p>07</p>
                    <p>07</p>
                    <p>07</p>
                    <p>07</p>
                  </div>
                  <div className="flex flex-col gap-2 text-[8px] ">
                    <p className="h-4 border-b  border-slate-500 text-[10px]">
                      words
                    </p>
                    <p>seven one</p>
                    <p>seven one</p>
                    <p>seven one</p>
                    <p>seven one</p>
                    <p>seven one</p>
                    <p>seven one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-y border-r  border-slate-500">
            <p className="border-b  border-slate-500 h-14">Remark</p>
            <p>DISTIN</p>
          </div>
        </div>
        <div className="my-8 py-2 border-y-4 border-slate-500 font-semibold">
            <div className="flex item-center justify-between">
               <span className="flex items-center gap-4">total:<p>600</p></span>
               <span className="flex items-center gap-4">obtained:<p>400</p></span>
               <span className="flex items-center gap-4">percentage(%):<p>40%</p></span>
            </div>
        </div>
        <div className="text-start capitalize font-semibold">
            <span className="flex items-center gap-2">result created date:<p>{new Date().toLocaleDateString()}</p></span>
            <span className="flex items-center gap-2">result printed date:<p>{new Date().toLocaleDateString()}</p></span>
            <p>this is computer generated result</p>
        </div>
        <div className="e-full flex justify-end ">
            <div className="flex flex-col items-center">
                <div className="w-[50px] h-[50px]">
                <img src={Image} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="capitalize">principal signature</p>
            </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default ResultCertificateCard;
