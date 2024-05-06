import React, { useState } from "react";
import down from "../Images/down.png";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

export default function DataHistory() {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      date: "15 sept 2019",
      entries: [
        {
          id: 1,
          time: "10:00 am",
          items: ["Saline 1lt", "Metformin 10mg", "Amoxicillin 50mg"],
          notes: "Patient felt discomfort and no change in fever",
          color: "red",
        },
      ],
    },
    // Add more initial data items as needed
  ]);
  const [newData, setNewData] = useState({
    date: "",
    time: "",
    items: "",
    notes: "",
    color: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  };

  const handleAddData = () => {
    // Find the entry for the selected date
    const entryIndex = data.findIndex((entry) => entry.date === newData.date);

    if (entryIndex === -1) {
      // Date not found, create a new entry
      const newEntry = {
        id: data.length + 1,
        date: newData.date,
        entries: [
          {
            id: 1,
            time: newData.time,
            items: newData.items.split(","),
            notes: newData.notes,
            color: newData.color,
          },
        ],
      };
      setData([...data, newEntry]);
    } else {
      // Date found, check if there are available slots
      const entriesCount = data[entryIndex].entries.length;
      if (entriesCount < 4) {
        // Add new entry
        const newEntry = {
          id: data[entryIndex].entries.length + 1,
          time: newData.time,
          items: newData.items.split(","),
          notes: newData.notes,
          color: newData.color,
        };
        setData([
          ...data.slice(0, entryIndex),
          {
            ...data[entryIndex],
            entries: [...data[entryIndex].entries, newEntry],
          },
          ...data.slice(entryIndex + 1),
        ]);
      } else {
        // Alert the user that maximum entries are reached for this date
        alert("Maximum entries reached for this date");
        return;
      }
    }

    setNewData({
      date: "",
      time: "",
      items: "",
      notes: "",
      color: "",
    });
  };

  const handleDeleteData = (date, entryId) => {
    const entryIndex = data.findIndex((entry) => entry.date === date);
    if (entryIndex !== -1) {
      const updatedEntries = data[entryIndex].entries.filter(
        (entry) => entry.id !== entryId
      );
      setData([
        ...data.slice(0, entryIndex),
        { ...data[entryIndex], entries: updatedEntries },
        ...data.slice(entryIndex + 1),
      ]);
    }
  };

  return (
    <div className="p-3 border border-sky-500 rounded-lg ">
      <div className="flex-none lg:flex justify-between md:flex justify-between border-b-2 border-zinc-300">
        <h1 className="text-[22px] text-start font-medium text-[#0174cf] py-2">
          Data History
        </h1>
        <div className="flex gap-3 py-2">
          {!isEditing && (
            <button
              className="text-[white] text-[16px] bg-[#348acf] py-1 px-8 rounded "
              onClick={() => setIsEditing(true)}
            >
              Add Data
            </button>
          )}
          {isEditing && (
            <div className="flex gap-3">
              <button
                className="text-[white] text-[16px] bg-[#348acf] py-1 px-4 rounded "
                onClick={handleAddData}
              >
                Save
              </button>
              <button
                className="text-[white] text-[16px] bg-[#ff6666] py-1 px-4 rounded "
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}
          <div>
            <button className="text-[#348acf] text-[16px] border border-[#348acf] bg-[white] h-8 py-1 px-1 rounded  flex align-center">
              See all &emsp;&emsp;&emsp;
              <img className="mt-1" src={down} alt="down arrow" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[38rem] overflow-y-auto ">
        {data.map((entry) => (
          <div key={entry.id} className="mt-2">
            <div className="w-full">
              <p className="text-[#0174cf] text-start ml-1">
                <FiberManualRecordIcon /> {entry.date}
              </p>
            </div>
            <div className="w-full flex justify-around ">
              {entry.entries.map((item) => (
                <div key={item.id} className="p-2 w-36">
                  <p className="text-start text-[12px]  text-[#0174cf]">
                    {item.time}
                  </p>
                  {item.items.map((item, index) => (
                    <p key={index} className="text-start text-[12px] text-[#707070]">
                      {item}
                    </p>
                  ))}
                  <div className={`border border-${item.color}-700 flex py-1 px-1 w-32 rounded-md mt-2`}>
                    <div>
                      <Person2OutlinedIcon sx={{ color: item.color }} />
                    </div>
                    <div>
                      <p className={`text-[10px] text-start lg:text-[8px] md:text-[8px] text-[${item.color}] `}>
                        {item.notes}
                      </p>
                    </div>
                  </div>
                  {!isEditing && (
                    <button
                      className="text-[white] text-[12px] bg-[#ff6666] py-1 px-2 rounded mt-2"
                      onClick={() => handleDeleteData(entry.date, item.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {isEditing && (
          <div className="mt-2">
            <div className="w-full">
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={newData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex justify-around ">
              <div className="p-2 w-36">
                <input
                  type="text"
                  name="time"
                  placeholder="Time"
                  value={newData.time}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="items"
                  placeholder="Items (comma-separated)"
                  value={newData.items}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="notes"
                  placeholder="Notes"
                  value={newData.notes}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="color"
                  placeholder="Color (e.g., red, green)"
                  value={newData.color}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
