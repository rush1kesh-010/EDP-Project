import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MyCalender() {
  const [age, setAge] = React.useState("Nov");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="bg-[white]">
      <div className="bg-[#f1f3f5] rounded-lg">
        <div className="flex justify-around py-2 bg-[#0174cf] rounded-lg">
          <h1 className="text-[16px] text-[white]">My Calender</h1>
          <div>
            <Box sx={{ maxWidth: 80 }}>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  sx={{
                    height: "1.5rem",
                    background: "#4092d4",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: "8px",
                  }}
                  onChange={handleChange}
                >
                  <MenuItem value="Nov">Nov</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
          <div className="flex justify-around mt-3 ">
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1">
                <p className="text-[12px]">Sun</p>
                <p className="text-[16px]">17</p>
            </div>
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1">
                <p className="text-[12px]">Mon</p>
                <p className="text-[16px]">18</p>
            </div>
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1">
                <p className="text-[12px]">Tue</p>
                <p className="text-[16px]">19</p>
            </div>
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1">
                <p className="text-[12px]">Wed</p>
                <p className="text-[16px]">20</p>
            </div>
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1">
                <p className="text-[12px]">Thu</p>
                <p className="text-[16px]">21</p>
            </div>
          
          </div>
          <div className="p-4">
          <h1 className="text-[12px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
          Monday 18 November
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
      <h1 className="text-[16px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#707070] mt-2">
      <span className="text-[#939393]">09:00 am</span>&emsp;Heart Surgery
      </h1>
          </div>
         
      </div>
    </div>
  );
}
