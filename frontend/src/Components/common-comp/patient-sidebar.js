import React from "react";
import { InputAdornment,TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SinglePatients from "../single-patient";

export default function PatientSidebar() {
  return (
    <div className="p-4">
      <div className="bg-[white] p-4">
        <p className="text-[10px] text-start text-[#0174cf] text-sm font-medium ">Who’s detailed profile would you like to view</p>
          <TextField
          fullWidth
          size="small"
          id="outlined-start-adornment"
          placeholder="Patient Name/number"
          sx={{marginTop:"10px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />
    
        {/* ---------- Patients data ---------- */}
        <div >
            <SinglePatients/>
        </div>
      </div>
    </div>
  );
}
