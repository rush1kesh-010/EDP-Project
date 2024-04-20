import React from "react";
import temp from "../Images/temp.png";

export default function SidebarBubble() {
  return (
    <div className="bg-[white] p-2 rounded-xl">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
      Air Bubble
      </h1>
      <div className="p-2">
        <div>
          <div className="">
            <div>
              <h3 className="text-start text-base text-[#707070]">
                <span className="text-5xl font-bold text-[#348acf]">10</span>
                no of bubbles
              </h3>
            </div>
          </div>
        
            <div>
              <p className="text-start font-medium text-sm text-[#707070] mt-2">
                Last monitored:
              </p>
              <p className="text-start text-sm text-[black] font-bold">
                10 secs ago
              </p>
            </div>
         
        </div>
      </div>
    </div>
  );
}
