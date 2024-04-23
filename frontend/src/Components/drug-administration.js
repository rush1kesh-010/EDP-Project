import React from "react";
import dn from "../Images/down.png";
import upl from "../Images/liup.png";
import dnl from "../Images/ldown.png";
import cross from "../Images/cross.png";

export default function DrugAdministration() {
  return (
    <div className="bg-[white] p-2 rounded-xl mt-3">
      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drug Administration
      </h1>

      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6">
          <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>1. anefhcbfu</p>
            <img className="h-4 mt-1 " src={dn} />
          </div>
          <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>1. anefhcbfu</p>
            <img className="h-4 mt-1 " src={dn} />
          </div>
          <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>1. anefhcbfu</p>
            <img className="h-4 mt-1 " src={dn} />
          </div>
        </div>
        <div className="col-span-6">
            <div className="flex">
            <div className="flex justify-between border border-sky-500 px-1 rounded mt-2">
            <p>500ml</p>
           
          </div >
             <img src={upl}/>
             <img className="" src={dnl}/>
             <img className="w-10" src={cross}/>
            </div>
        </div>
      </div>
    </div>
  );
}
