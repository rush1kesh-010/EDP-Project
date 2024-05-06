import React, { useState } from "react";
import upl from "../Images/liup.png";
import dnl from "../Images/ldown.png";
import cross from "../Images/cross.png";
import status from "../Images/play.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function CurrentDosage() {
  const [dosages, setDosages] = useState([{ id: 1, count: 500 }]);

  const handleAddDosage = () => {
    const newId = dosages.length + 1;
    setDosages([...dosages, { id: newId, count: 500 }]);
  };

  const handleCountChange = (id, newCount) => {
    const updatedDosages = dosages.map((dosage) =>
      dosage.id === id ? { ...dosage, count: newCount } : dosage
    );
    setDosages(updatedDosages);
  };

  const handleRemoveDosage = (id) => {
    const updatedDosages = dosages.filter((dosage) => dosage.id !== id);
    setDosages(updatedDosages);
  };

  return (
    <div className="bg-[white] p-2 rounded-xl border border-sky-500 mx-3">
      <h1 className="text-[22px] text-start font-medium border-b-2 border-zinc-300 text-[#0174cf]">
        Current Dosage
      </h1>

      {dosages.map((dosage) => (
        <div key={dosage.id} className="grid grid-cols-12 gap-2 mt-3 p-2">
          <div className="col-span-6">
            <select
              id={`framework-${dosage.id}`}
              className="border border-sky-500 rounded w-36 md:w-44 lg:w-44 mt-2"
            >
              <option value="1">1. anefhcbfu</option>
              <option value="2">2. anefhcbfu</option>
              <option value="3">3. anefhcbfu</option>
              <option value="4">4. anefhcbfu</option>
            </select>
            <div className="flex gap-1 bg-[#f0f0f0] rounded  my-2">
              <img alt="status" src={status} />
              <p className="text-[10px] text-[red]">
                The patient is allergic to the composition
              </p>
            </div>
          </div>

          <div className="col-span-6">
            <div className="flex justify-around">
              <div>
                <div className="border border-sky-500 px-1 rounded mt-2">
                  <p>{dosage.count}ml</p>
                </div>

                <div className="flex">
                  <img
                    alt="up"
                    className="w-6 h-6 mt-2"
                    onClick={() => handleCountChange(dosage.id, dosage.count + 1)}
                    src={upl}
                  />
                  <img
                    alt="down"
                    className="w-6 h-6 mt-2"
                    onClick={() => handleCountChange(dosage.id, dosage.count - 1)}
                    src={dnl}
                  />
                </div>
              </div>

              <div>
                <img
                  alt="result"
                  className="w-5 h-5 mt-3"
                  onClick={() => handleRemoveDosage(dosage.id)}
                  src={cross}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="col-span-12 text-end">
        <AddCircleIcon
          sx={{ fontSize: "40px", color: "#348acf", cursor: "pointer" }}
          onClick={handleAddDosage}
        />
      </div>
    </div>
  );
}
