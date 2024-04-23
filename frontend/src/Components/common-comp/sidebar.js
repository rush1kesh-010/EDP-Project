import React from "react";
import Patients from "../patients";

export default function Sidebar() {
  return (
    <div className="p-4">
      <div className="bg-[white] p-4">
        <div className="w-56">
          <h1 className="text-start text-2xl font-medium ">My patients :</h1>
          <p className="text-start text-[#939393] text-[16px] leading-5">
            Please double click the profile you would like to overview
          </p>
        </div>
        {/* ---------- Patients data ---------- */}
        <div >
            <Patients/>
        </div>
      </div>
    </div>
  );
}
