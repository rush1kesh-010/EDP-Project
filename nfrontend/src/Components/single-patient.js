import React from "react";
import Imgp1 from "../Images/p-1.png";

import bar from "../Images/barcode.png"
import { Link } from "react-router-dom";
import SidebsrVitalMonitring from "./sidebar-vital-monitring";
import SidebsrDripMonitring from "./sidebar-drip-monitoring";
import SidebarBubble from "./sidebar-air-bubble";
import SidebarCurrentDrugs from "./sidebar-current-drugs";
export default function SinglePatients() {
  return (
    <div className="my-6 ">
      {/* --------- Cards --------- */}
      <Link to="/dashboard">
      <div className="grid grid-cols-12 bg-[#f0f0f0] h-24 my-2 rounded-lg border-l-4 border-rose-600 ">
        <div className="col-span-2 flex justify-evenly items-center"> 
          <img className="w-20" src={Imgp1} />
        </div>
        <div className="col-span-6 text-start p-2"> 
             <h1 className="text-lg leading-4">Courtney Henry</h1>
             <h className="text-[#4c4c4c] leading-4">Dengue</h>
             <p className="text-[10px] text-[#707070] mt-2">56 Male</p>
             <p className="text-[10px] text-[#4c4c4c]">Start date : 20 August 2023</p>
        </div>
        <div className="col-span-4 flex justify-evenly items-center"> 
        <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
          <img className="w-6 mr-4" src={bar} />
        </div>
      </div>
      </Link>
      <SidebsrVitalMonitring/>
      <SidebsrDripMonitring/>
      <SidebarBubble/>
      <SidebarCurrentDrugs/>
    </div>
  );
}
