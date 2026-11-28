import EventComponent from "./EventComponent";

export default function EventRoute() {
  return (
    <div className=" w-full w-full bg-gray-100 p-4 overflow-hidden">
      <div className="max-w-[1800px] m-auto w-full h-[90vh] bg-white rounded-2xl p-4">
        <div className="w-ful text-center">
          <h1 className="text-4xl font-semibold">Event Board</h1>
        </div>
        <div className="relative w-full h-full  ">
        <EventComponent
        day={"Today Event"}
        eventD={`1. basket ball match 2. ${<br/>} badmintion match`}/>
        <div>
          not making this page something reasion.
        </div>
        </div>
        
      </div>
    </div>
  );
}
