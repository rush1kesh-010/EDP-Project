import React from 'react'
import heart from "../Images/heart.png";

export default function SidebsrVitalMonitring() {
  return (
    <div className="bg-[white] p-2 rounded-xl">
                <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
                  Vital Monitring
                </h1>
                <div className="p-2">
                  <div>
                    <div className='flex justify-between'>
                    <div>
                    <h3 className="text-start text-base text-[#707070]">
                      <span className="text-5xl font-bold text-[#348acf]">
                        57
                      </span>
                      %SpO2
                    </h3>
                    </div>
                    <div>
                    <h3 className="text-start text-base text-[#707070]">
                      <span className="text-5xl font-bold text-[#348acf]">
                        85
                      </span>
                      PRbPm
                    </h3>
                    </div>
                    </div>
                    <p className="text-start font-medium text-sm text-[#707070] mt-2">
                      Last monitored:
                    </p>
                    <p className="text-start text-sm text-[black] font-bold">
                      60 mins ago
                    </p>
                  </div>
                
                </div>
              </div>
  )
}
