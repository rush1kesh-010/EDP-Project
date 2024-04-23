import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function PatientAllergies() {
  return (
    <div className="bg-[white] p-4 rounded-xl mt-3 border border-sky-500 mx-3">
      <h1 className="text-[22px] text-start font-medium border-b-2 border-zinc-300 text-[#0174cf]">
      Allergies
      </h1>

      <div className="grid grid-cols-12 gap-2 mb-4">
        <div className="col-span-12">
        <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-4 text-[#707070] flex justify-between align-center">
        Penicillin Allergy   <FiberManualRecordIcon sx={{color:"red" ,fontSize:"10px"}}/>
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-4 text-[#707070]">
      NSAID
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-4 text-[#707070]">
      Shellfish
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-4 text-[#707070] flex justify-between align-center">
      Latex <FiberManualRecordIcon sx={{color:"red" ,fontSize:"10px"}}/>
      </h1>
        </div>

       
      </div>
    </div>
  );
}
