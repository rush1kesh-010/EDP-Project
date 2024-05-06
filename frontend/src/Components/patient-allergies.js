import React, { useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PatientAllergies() {
  const [allergies, setAllergies] = useState([
    { name: "Penicillin Allergy", icon: true },
    { name: "NSAID", icon: false },
    { name: "Shellfish", icon: false },
    { name: "Latex", icon: true },
  ]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const updatedAllergies = [...allergies];
    updatedAllergies[index].name = value;
    setAllergies(updatedAllergies);
  };

  const addNewAllergy = () => {
    setAllergies([...allergies, { name: "", icon: false }]);
  };

  const toggleIcon = (index) => {
    const updatedAllergies = [...allergies];
    updatedAllergies[index].icon = !updatedAllergies[index].icon;
    setAllergies(updatedAllergies);
  };

  return (
    <div className="bg-[white] p-4 rounded-xl mt-3 border border-sky-500 mx-3">
      <h1 className="text-[22px] text-start font-medium border-b-2 border-zinc-300 text-[#0174cf]">
        Allergies
      </h1>

      <div className="grid grid-cols-12 gap-2 mb-4">
        {allergies.map((allergy, index) => (
          <div key={index} className="col-span-12">
            <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-4 text-[#707070] flex justify-between align-center">
              <input
                type="text"
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
                  "Critical?"
                )}
              </button>
            </h1>
          </div>
        ))}
      </div>
      
      <button
        onClick={addNewAllergy}
        className="text-xs bg-transparent border border-sky-500 text-sky-500 p-1 rounded-md hover:bg-sky-500 hover:text-white focus:outline-none"
      >
        Add Allergy
      </button>
    </div>
  );
}
