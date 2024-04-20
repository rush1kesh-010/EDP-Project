import React from "react";
import temp from "../Images/temp.png";

export default function SidebsrDripMonitring() {
  return (
    <div className="bg-[white] p-2 rounded-xl">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drip Monitoring
      </h1>
      <div className="p-2">
        <div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-start text-base text-[#707070]">
                <span className="text-5xl font-bold text-[#348acf]">57</span>
                mL/h
              </h3>
            </div>

            <div>
              <h3 className="flex mt-6 mr-14">
                <img className="w-1/2 h-4 mt-1" src={temp} />
                15
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-start font-medium text-sm text-[#707070] mt-2">
                Last monitored:
              </p>
              <p className="text-start text-sm text-[black] font-bold">
                60 mins ago
              </p>
            </div>
            <div>
              <p className="text-start font-medium text-sm text-[#707070] mt-2">
                Time elapsed:
              </p>
              <p className="text-start text-sm text-[black] font-bold">
                15 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
