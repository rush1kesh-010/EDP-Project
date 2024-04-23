import React from "react";
import Header from "../Components/common-comp/header";
import "../Css/home.css";
import Sidebar from "../Components/common-comp/sidebar";
import VitalMonitring from "../Components/vital-monitring";
import AirBubble from "../Components/air-bubble";
import RecentFile from "../Components/recent-file";
import CheckUp from "../Components/check-up";
import DripMonitoring from "../Components/drip-monitoring";
import DrugAdministration from "../Components/drug-administration";
import Allergies from "../Components/allergies";
import MyCalender from "../Components/my-calender";
export default function Dashboard() {
  return (
    <div>
      {/* ------------Header----------- */}
      <div>
        <Header />
      </div>

      <div className="grid grid-cols-12 bg-[#e8f5ff]">
        {/* ------------Sidenav----------- */}
        <div className="col-span-12 lg:col-span-3 md:col-span-3">
          <div >
            <Sidebar />
          </div>
        </div>
        {/* ----------- second section --------- */}
        <div className="col-span-12 lg:col-span-4 md:col-span-4 p-4">
          <div className="bg-[white] p-3">
            <h1 className="text-start font-medium text-[#0174cf] text-2xl">
              Hello, Darrell Steward
            </h1>
            <p className="text-start mb-4 text-xs font-medium text-[#87afcf]">
              Below you can find the patient details of Courtney Henry
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* ------------ Vital Monitring ---------- */}
            <div className="col-span-12 lg:col-span-6 md:col-span-6  mt-2 ">
              <VitalMonitring/>
            </div>
            {/* ------------ Air Bubble ---------- */}
            <div className="col-span-12 lg:col-span-6 md:col-span-6 mt-2 ">
             <AirBubble/>
            </div>
            {/* ------------- Recent file ----------- */}
            <div className="col-span-12 lg:col-span-6 md:col-span-6">
             <RecentFile/>
            </div>
            <div className="col-span-12 lg:col-span-6 md:col-span-6">
             <CheckUp/>
            </div>
          </div>
        </div>
        {/* ----------- third section --------- */}
        <div className="col-span-12 lg:col-span-3 md:col-span-3 p-4 ">
         <DripMonitoring/>
         <DrugAdministration/>
         <Allergies/>
        </div>
        <div className="col-span-12 lg:col-span-2 md:col-span-2 mt-4 px-2 ">
           <MyCalender/>
        </div>

      </div>
    </div>
  );
}
