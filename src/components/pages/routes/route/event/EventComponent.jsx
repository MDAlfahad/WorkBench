export default function EventComponent({day, eventD}) {
  return (
    <div className=" relative">
      <div className="absolute top-10 left-5 w-10 h-20 border border-primary bg-primary flex justify-center py-3 rounded-t-2xl relative">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      <div className="w-96 border-4 border-primary/50 bg-slate-200 rounded-3xl overflow-hidden">
        <h1 className="text-center text-xl py-4 playwrite font-bold">
         {day}
        </h1>
        <p className=" p-2  avisly text-xl lg:text-3xl underline ">
          {eventD}
        </p>
      </div>
    </div>
  );
}
