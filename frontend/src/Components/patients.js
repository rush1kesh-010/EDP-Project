import React, { useState } from "react";
import Imgp1 from "../Images/p-1.png";
import Imgp2 from "../Images/p-2.png";
import Imgp3 from "../Images/p-3.png";
import Imgp4 from "../Images/p-4.png";
import Imgp5 from "../Images/p-5.png";
import bar from "../Images/barcode.png";
import { Link } from "react-router-dom";

export default function Patients() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  const cardStyles = (index) => {
    if (index === activeCard) {
      return {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        };
    }
    return {};
  };

  return (
    <div className="my-6 ">
      {/* --------- Cards --------- */}
      <Link to="/dashboard">
        <div
          className="grid grid-cols-12 bg-[#f0f0f0] h-24 my-2 rounded-lg border-l-4 border-rose-600"
          style={cardStyles(0)}
          onClick={() => handleCardClick(0)}
        >
          <div className="col-span-2 flex justify-evenly items-center">
            <img className="w-20" src={Imgp1} alt="Patient 1" />
          </div>
          <div className="col-span-6 text-start p-2">
            <h1 className="text-lg leading-4">Courtney Henry</h1>
            <h className="text-[#4c4c4c] leading-4">Dengue</h>
            <p className="text-[10px] text-[#707070] mt-2">56 Male</p>
            <p className="text-[10px] text-[#4c4c4c]">
              Start date : 20 August 2023
            </p>
          </div>
          <div className="col-span-4 flex justify-evenly items-center">
            <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
            <img className="w-6 mr-4" src={bar} alt="Barcode" />
          </div>
        </div>
      </Link>
      <Link to="/dashboard">
        <div
          className="grid grid-cols-12 bg-[#f0f0f0]  h-24 my-4 rounded-lg border-l-4 border-rose-600"
          style={cardStyles(1)}
          onClick={() => handleCardClick(1)}
        >
          <div className="col-span-2 flex justify-evenly items-center">
            <img className="w-20" src={Imgp2} alt="Patient 2" />
          </div>
          <div className="col-span-6 text-start p-2">
            <h1 className="text-lg leading-4">Albert Flores</h1>
            <h className="text-[#4c4c4c] leading-4">Heart Cancer</h>
            <p className="text-[10px] text-[#707070] mt-3">56 Male</p>
            <p className="text-[10px] text-[#4c4c4c]">
              Start date : 15 February 2023
            </p>
          </div>
          <div className="col-span-4 flex justify-evenly items-center">
            <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
            <img className="w-6 mr-4" src={bar} alt="Barcode" />
          </div>
        </div>
      </Link>
      <Link to="/dashboard">
        <div
          className="grid grid-cols-12 bg-[#f0f0f0]  h-24 my-4 rounded-lg border-l-4 border-yellow-300"
          style={cardStyles(2)}
          onClick={() => handleCardClick(2)}
        >
          <div className="col-span-2 flex justify-evenly items-center">
            <img className="w-20" src={Imgp3} />
          </div>
          <div className="col-span-6 text-start p-2">
            <h1 className="text-lg leading-4">BrooklynSimmons</h1>
            <h className="text-[#4c4c4c] leading-4">Brain Tumor</h>
            <p className="text-[10px] text-[#707070] mt-3">56 Male</p>
            <p className="text-[10px] text-[#4c4c4c]">
              Start date : 30 July 2023
            </p>
          </div>
          <div className="col-span-4 flex justify-evenly items-center">
            <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
            <img className="w-6 mr-4" src={bar} />
          </div>
        </div>
      </Link>
      <Link to="/dashboard">
        <div
          className="grid grid-cols-12 bg-[#f0f0f0]  h-24 my-4 rounded-lg border-l-4 border-yellow-300"
          style={cardStyles(3)}
          onClick={() => handleCardClick(3)}
        >
          <div className="col-span-2 flex justify-evenly items-center">
            <img className="w-20" src={Imgp4} />
          </div>
          <div className="col-span-6 text-start p-2">
            <h1 className="text-lg leading-4">Bessie Cooper</h1>
            <h className="text-[#4c4c4c] leading-4">Leg Fracture</h>
            <p className="text-[10px] text-[#707070] mt-3">56 Male</p>
            <p className="text-[10px] text-[#4c4c4c]">
              Start date : 26 June 2023
            </p>
          </div>
          <div className="col-span-4 flex justify-evenly items-center">
            <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
            <img className="w-6 mr-4" src={bar} />
          </div>
        </div>
      </Link>
      <Link to="/dashboard">
        <div
          className="grid grid-cols-12 bg-[#f0f0f0]  h-24 my-4 rounded-lg border-l-4 border-green-500"
          style={cardStyles(4)}
          onClick={() => handleCardClick(4)}
        >
          <div className="col-span-2 flex justify-evenly items-center">
            <img className="w-20" src={Imgp5} />
          </div>
          <div className="col-span-6 text-start p-2">
            <h1 className="text-lg leading-4">SavannahNguyen</h1>
            <h className="text-[#4c4c4c] leading-4">Diabetes</h>
            <p className="text-[10px] text-[#707070] mt-3">56 Male</p>
            <p className="text-[10px] text-[#4c4c4c]">
              Start date : 30 December 2023
            </p>
          </div>
          <div className="col-span-4 flex justify-evenly items-center">
            <h1 className="rotate-[-90deg] text-[10px]">FA125MN</h1>
            <img className="w-6 mr-4" src={bar} />
          </div>
        </div>
      </Link>
    </div>
  );
}
