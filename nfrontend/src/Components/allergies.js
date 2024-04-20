import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Allergies() {
  return (
    <div className="bg-[white] p-2 rounded-xl mt-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
      Allergies
      </h1>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6">
        <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070] flex justify-between align-center">
        Penicillin Allergy <FiberManualRecordIcon sx={{color:"red" ,fontSize:"10px"}}/>
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070]">
      NSAID
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070]">
      Shellfish
      </h1>
        </div>

        <div className="col-span-6">
        <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070]">
        Sulfonamide
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070] flex justify-between align-center">
      Latex    <FiberManualRecordIcon sx={{color:"red" ,fontSize:"10px"}}/>
      </h1>
      <h1 className="text-[16px] text-start p-1 font-normal border-b-2 border-zinc-300 mt-2 text-[#707070]">
      Sulfonamide
      </h1>
        </div>
      </div>
    </div>
  );
}
