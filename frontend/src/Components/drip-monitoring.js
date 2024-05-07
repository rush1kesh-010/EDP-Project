import React, { useState } from "react";
import temp from "../Images/temp.png";
import temp1 from "../Images/temp1.png";
import temp2 from "../Images/temp3.png";
import up from "../Images/up.png";
import dn from "../Images/down.png";
import colour from "../Images/Vector 4.png";

export default function DripMonitoring() {
  const [dripRate, setDripRate] = useState(95); // State for drip rate
  const [setGttPerMl, setSetGttPerMl] = useState(15); // State for set value

  const increaseDripRate = () => {
    setDripRate((prevRate) => prevRate + 1);
  };

  const decreaseDripRate = () => {
    setDripRate((prevRate) => Math.max(prevRate - 1, 0));
  };

  const increaseSetGttPerMl = () => {
    setSetGttPerMl((prevSet) => prevSet + 1);
  };

  const decreaseSetGttPerMl = () => {
    setSetGttPerMl((prevSet) => Math.max(prevSet - 1, 0));
  };

  return (
    <div className="bg-[white] p-2 rounded-xl  border border-sky-500 mx-3 mb-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drip Monitoring
      </h1>
      <div className="flex justify-around p-2">
        <div>
          <div className="flex">
            <h3 className="text-5xl font-bold text-[#348acf] ">
              {dripRate} mL/h &nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
          </div>
          <p className="text-start text-sm text-[#707070] mt-2">
            Last monitored:
          </p>
          <p className="text-start text-sm text-[black] font-bold">
            60 mins ago
          </p>
          <p className="text-start text-sm text-[#707070] mt-2">
            Estimated time left:
          </p>
          <p className="text-start text-sm text-[black] font-bold">30 mins</p>
          <div className="flex mt-8">
            <p className="text-sm text-[#4c4c4c] font-medium m-1 mt-4 mr-2">
              SET
            </p>
            <div className="border-2 border-blue-200 rounded-md">
  <input
    className="text-[#939393] font-bold text-3xl text-center"
    style={{ width: `${setGttPerMl.toString().length * 3}ch` }}
    type="number"
    value={setGttPerMl}
    onChange={(e) => setSetGttPerMl(parseInt(e.target.value))}
  />
  <p className="text-sm text-[#939393] ml-2 mt-4">gtt/mL</p>
</div>

          </div>
        </div>

        <div className="flex flex-col justify-around border-2 p-1 rounded-md">
          <div className="">
            <div className="border-2 border-blue-200 rounded-md">
              <h1 className="text-[#939393] font-bold text-3xl mx-4 my-1">
                150
              </h1>
              <h3 className="text-[#939393] text-sm text-center">ml left</h3>
            </div>
          </div>
          <div className="">
            <div className="my-14 pu-7 pl-5 pr-5 flex flex-col items-center">
              <img
                alt="up"
                src={up}
                className="w-6 cursor-pointer"
                onClick={increaseDripRate}
              />
              <p className="bg-[#dbdbdb]">{dripRate} ml/hr</p>
              <img
                alt="down"
                src={dn}
                className="w-6 cursor-pointer"
                onClick={decreaseDripRate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
