import React from 'react'
import { Link } from "react-router-dom";


export default function PatientProfileTab() {
  return (
    <div className='hidden md:flex lg:flex'>
        <div className='bg-[#f1f3f5] hover:bg-[white] py-2 px-2 w-56 rounded-t-full'>
           <p className='text-[20px] text-[#87afcf] hover:text-[#0174cf] font-medium'>Primary details</p>
        </div> 
        <div className='bg-[#f1f3f5] hover:bg-[white] py-2 px-2 w-56 rounded-t-full'>
           <p className='text-[20px] text-[#87afcf] hover:text-[#0174cf] font-medium'>Vital details</p>
        </div> 
        <div className='bg-[white] py-2 px-2 w-56 rounded-t-full'>
         <Link to='/patient-profiledrip'>
            <p className='text-[20px] text-[#0174cf] font-medium'>Drug Administration </p>
         </Link>
        </div> 
        
        <div className='bg-[#f1f3f5] hover:bg-[white] py-2 px-2 w-56 rounded-t-full'>
        <Link to='/patient-profiledrug'>
         
           <p className='text-[20px] text-[#87afcf] hover:text-[#0174cf] font-medium'>Drip Monitoring</p>
         </Link>
        </div> 
        <div className='bg-[#f1f3f5] hover:bg-[white] py-2 px-2 w-56 rounded-t-full'>
          <Link to='/patient-profileairbubble'>

           <p className='text-[20px] text-[#87afcf]  hover:text-[#0174cf] font-medium'>Air Bubble</p>
          </Link>
        </div>
    </div>
  )
}
