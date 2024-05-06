import React, { useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Allergies() {
  const [allergies, setAllergies] = useState([
    { name: "Penicillin Allergy", icon: true },
    { name: "NSAID", icon: false },
    { name: "Shellfish", icon: false },
    { name: "Sulfonamide", icon: false },
    { name: "Latex", icon: false },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAllergies = [...allergies];
    updatedAllergies[index][name] = value;
    setAllergies(updatedAllergies);
  };

  const toggleIcon = (index) => {
    const updatedAllergies = [...allergies];
    updatedAllergies[index].icon = !updatedAllergies[index].icon;
    setAllergies(updatedAllergies);
  };

  return (
    <div className="bg-[white] p-2 rounded-xl mt-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Allergies
      </h1>

      <div className="grid grid-cols-12 gap-2">
        {allergies.map((allergy, index) => (
          <div key={index} className="col-span-6">
            <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070] flex justify-between align-center">
              <input
                type="text"
                name="name"
                value={allergy.name}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full"
              />
              <button
                onClick={() => toggleIcon(index)}
                className="p-1 text-xs bg-transparent border-0 outline-none"
              >
                {allergy.icon ? (
                  <FiberManualRecordIcon sx={{ color: "red", fontSize: "10px" }} />
                ) : (
                  ""
                )}
              </button>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
