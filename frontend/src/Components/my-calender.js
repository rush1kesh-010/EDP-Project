import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MyCalender() {
  const [age, setAge] = React.useState("May");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(() => {
    const today = new Date();
    setSelectedDay(today);
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - 2); // Start from two days before the current day

    const weekDates = [];
    for (let i = 0; i < 5; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
      weekDates.push(currentDate);
    }
    setCurrentWeek(weekDates);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="bg-[#f1f3f5] h-120 rounded-lg">
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
                  <MenuItem value="Apr">Apr</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
          {/* <div className="flex justify-around mt-3 ">
            <div className=" rounded hover:bg-[#0174cf] hover:text-[white]  px-1" onClick={handleDateChange}>
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
          </div> */}
      <div className="flex justify-around mt-3">
        {currentWeek.map((date, index) => (
          <div key={index} className="rounded hover:bg-[#0174cf] hover:text-[white] hover:cursor-pointer  px-1" onClick={() => handleDayClick(date)}>
            <h3 className="text-center">{daysOfWeek[date.getDay()]}</h3>
            <p className="text-center">{date.getDate()}</p>
          </div>
        ))}
      </div>
      <div>
        {selectedDay && (
          <div className="p-4">
            <p className="text-[12px] font-semibold leading-8 text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">Schedule for {selectedDay.toLocaleDateString()}</p>
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
        )}
        </div>
      </div>
    </div>
  );
}
