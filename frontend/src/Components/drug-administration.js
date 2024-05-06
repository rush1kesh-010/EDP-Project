import React from "react";
import { useState } from "react";
import upl from "../Images/liup.png";
import dnl from "../Images/ldown.png";
import cross from "../Images/cross.png";
import right from "../Images/right.png";

export default function DrugAdministration() {
  const [count, setCount] = useState(500);
  const [count1, setCount1] = useState(500);
  const [count2, setCount2] = useState(500);

  return (
    <div className="bg-[white] p-2 rounded-xl mt-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drug Administration
      </h1>

      <div className="grid grid-cols-12 gap-2 mt-2 p-2">
        <div className="col-span-6 ">
          <select id="framework" className="border border-sky-500 rounded w-36 md:w-38 lg:w-40 mt-2">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
          
          <select id="framework" className="border border-sky-500 rounded w-36 md:w-38 lg:w-40 mt-3">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
          
          <select id="framework" className="border border-sky-500 rounded w-36 md:w-38 lg:w-40 mt-4">
            <option value="1">1. anefhcbfu</option>
            <option value="2">2. anefhcbfu</option>
            <option value="3">3. anefhcbfu</option>
            <option value="4">4. anefhcbfu</option>
          </select>
        </div>

        <div className="col-span-6">
          <div className="flex justify-around  ">
              <div className="border border-sky-500 px-1 rounded mt-2">
                <p>{count}ml</p>
              </div>

              <div className="flex">
                <img alt="up"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  src={upl}
                />
                <img alt="down"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  src={dnl}
                />
              </div>


            <div>
              <img alt="result" className="w-5 h-5 mt-3 " src={cross} />
            </div>
          </div>
          <div className="flex justify-around  ">
            <div className="border border-sky-500 px-1 rounded mt-5 md:mt-2 lg:mt-2">
              <p>{count1}ml</p>
            </div>
            <div className="flex justify-around">
                <img alt="up"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount1(count1 + 1);
                  }}
                  src={upl}
                />
                <img alt="down"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount1(count1 - 1);
                  }}
                  src={dnl}
                />
            </div>
            <div>
              <img alt="result" className="w-5 h-5 mt-3 " src={right} />
            </div>
          </div>
          <div className="flex justify-around  ">
              <div className="border border-sky-500 px-1 rounded mt-5 md:mt-2 lg:mt-2">
                <p>{count2}ml</p>
              </div>

              <div className="flex">
                <img alt="up"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount2(count2 + 1);
                  }}
                  src={upl}
                />
                <img alt="down"
                  className="w-6 h-6 mt-2"
                  onClick={() => {
                    setCount2(count2 - 1);
                  }}
                  src={dnl}
                />
              </div>

            <div>
              <img alt="result" className="w-5 h-5 mt-3 " src={right} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
