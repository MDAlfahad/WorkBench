import React, { useState } from "react";

const TimeTable = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [timetable, setTimetable] = useState([
    {
      day: "Monday",
      periods: [
        "Science",
        "Maths",
        "Sanskrit",
        "English",
        "Hindi",
        "Social Science",
        "Game",
      ],
    },
    {
      day: "Tuesday",
      periods: [
        "Science",
        "Maths",
        "Sanskrit",
        "English",
        "Hindi",
        "Social Science",
        "Game",
      ],
    },
    {
      day: "Wednesday",
      periods: [
        "Science",
        "Maths",
        "Sanskrit",
        "English",
        "Hindi",
        "Social Science",
        "Game",
      ],
    },
    {
      day: "Thursday",
      periods: [
        "Science",
        "Maths",
        "Sanskrit",
        "English",
        "Hindi",
        "Social Science",
        "Game",
      ],
    },
    {
      day: "Friday",
      periods: [
        "Science",
        "Maths",
        "Sanskrit",
        "English",
        "Hindi",
        "Social Science",
        "Game",
      ],
    },
    {
      day: "Saturday",
      periods: ["Science", "Maths", "Sanskrit", "English", "Activities"],
    },
  ]);

  const times = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ];

  const handleSubjectChange = (dayIndex, periodIndex, value) => {
    setTimetable((prev) => {
      const updated = [...prev];

      updated[dayIndex] = {
        ...updated[dayIndex],
        periods: [...updated[dayIndex].periods],
      };

      updated[dayIndex].periods[periodIndex] = value;

      return updated;
    });
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">

      {/* Edit Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="px-4 py-2 bg-primary text-white rounded-lg"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 px-4 py-3 bg-slate-100">
                Day
              </th>

              {times.map((time) => (
                <th
                  key={time}
                  className="border border-slate-300 px-4 py-3 bg-slate-100 whitespace-nowrap"
                >
                  {time}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {timetable.map((row, dayIndex) => (
              <tr key={row.day}>

                <th className="border border-slate-300 px-4 py-3 bg-slate-50 text-left">
                  {row.day}
                </th>

                {times.map((_, periodIndex) => (
                  <td
                    key={periodIndex}
                    className="border border-slate-300 px-4 py-3 text-center"
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        value={row.periods[periodIndex] || ""}
                        onChange={(e) =>
                          handleSubjectChange(
                            dayIndex,
                            periodIndex,
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 border rounded outline-none"
                      />
                    ) : (
                      row.periods[periodIndex] || "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;