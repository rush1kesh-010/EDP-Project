import React, { useState } from "react";

export default function CheckUp() {
  const [contents, setContents] = useState([
    {
      text: "Oncologist, Dr Nareen Bhaat",
      color: "#0174cf"
    },
    {
      text: "Immediate X ray",
      color: "#be0000"
    },
    {
      text: "anefhcbfu 15mg 1x1x1",
      color: "#707070"
    },
    {
      text: "anefhcbfu 15mg 1x1x1",
      color: "#707070"
    }
  ]);

  const handleContentChange = (index, newText) => {
    const newContents = [...contents];
    newContents[index].text = newText;
    setContents(newContents);
  };

  const handleAddCheckup = () => {
    setContents([
      ...contents,
      {
        text: "",
        color: "#0174cf"
      },
      {
        text: "",
        color: "#be0000"
      },
      {
        text: "",
        color: "#707070"
      },
      {
        text: "",
        color: "#707070"
      }
    ]);
  };

  return (
    <div className="bg-[white] p-2 rounded-xl">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Check Ups
      </h1>
      <div>
        {contents.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between border-b-2 border-zinc-300 mt-2 p-1`}
          >
            <p className={`text-sm text-[${item.color}] font-medium`}>
              <input
                type="text"
                value={item.text}
                onChange={(e) => handleContentChange(index, e.target.value)}
                className={`outline-none border-none bg-transparent w-full`}
              />
            </p>
          </div>
        ))}
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAddCheckup}
        >
          Add Checkup
        </button>
      </div>
    </div>
  );
}
