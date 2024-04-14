import React from 'react'
import heart from "../Images/bubble-limit.png";
export default function AirBubble() {
  return (
    <div className="bg-[white] p-2 rounded-xl">
    <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
    Air Bubble
    </h1>
    <div className="flex justify-between p-2">
      <div>
        <h3 className="text-start w-9/12  text-base text-[#707070]">
          <span className="text-xl font-medium text-[#348acf]">
          No Issues Till now 
          </span>
         
        </h3>
        
        <p className="text-start mt-4 text-sm text-[#707070]">
          Last monitored:
        </p>
        <p className="text-start text-sm text-[black] font-bold">
        10 sec ago
        </p>
      </div>
      <div>
        <img className="w-9/12 ml-4" src={heart} />
      </div>
    </div>
  </div>
  )
}
