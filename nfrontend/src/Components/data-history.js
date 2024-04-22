import React from 'react'
import down from "../Images/down.png"
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
export default function DataHistory() {
  return (
    <div className='p-3 border border-sky-500 rounded-lg '>
        <div className='flex-none lg:flex justify-between md:flex justify-between border-b-2 border-zinc-300'>
            <h1 className='text-[22px] text-start font-medium text-[#0174cf] py-2'>Data History</h1>
            <div className='flex  gap-3 py-2'>
               
                <div> 
                <button className='text-[white] text-[16px] bg-[#348acf] py-1 px-8 rounded '>Refresh</button>
                </div>
                
                <div>
                <button className='text-[#348acf] text-[16px] border border-[#348acf] bg-[white] h-8 py-1 px-1 rounded  flex align-center'>See all &emsp;&emsp;&emsp;<img className='mt-1' src={down}/></button>
                </div>
                <div>
                 <EditIcon sx={{color:"white", backgroundColor:"#348acf", fontSize:"30px", borderRadius:"24px", padding:"5px"}}/>
                </div>
            </div>
        </div>
       
        <div className='flex flex-col h-[38rem] overflow-y-auto '>
        <div className='mt-2'> 
        <div className="w-full">
       <p className='text-[#0174cf] text-start ml-1'><FiberManualRecordIcon/>   15 sept 2019</p>
        </div>
        <div  className="w-full flex justify-around ">
            
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#68ba75] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#68ba75"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#68ba75] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start  text-[12px] text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#b7a400] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#b7a400"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#b7a400] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start  text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex w-32 py-1 px-1 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
       
        
        </div>
        </div>
        <div className='mt-2'> 
        <div className="w-full">
       <p className='text-[#0174cf] text-start ml-1'><FiberManualRecordIcon/>   15 sept 2019</p>
        </div>
        <div  className="w-full flex justify-around ">
            
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#68ba75] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#68ba75"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#68ba75] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start  text-[12px] text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#b7a400] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#b7a400"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#b7a400] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start  text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex w-32 py-1 px-1 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
       
        
        </div>
        </div>
        <div className='mt-2'> 
        <div className="w-full">
       <p className='text-[#0174cf] text-start ml-1'><FiberManualRecordIcon/>   15 sept 2019</p>
        </div>
        <div  className="w-full flex justify-around ">
            
            <div className="p-2 w-36">
               <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
               <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
               <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
               <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
               <div className='border border-red-700 flex py-1 px-1 w-32 rounded-md mt-2'>
                <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
               <div >
                <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
                </div>
                </div>
            </div>
            <div className="p-2 w-36">
               <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
               <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
               <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
               <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
               <div className='border border-[#68ba75] flex py-1 px-1 w-32 rounded-md mt-2'>
                <div><Person2OutlinedIcon sx={{color:"#68ba75"}}/></div>
               <div >
                <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#68ba75] '>Patient felt discomfort and no change in fever</p>
                </div>
                </div>
            </div>
            <div className="p-2 w-36">
               <p className='text-start  text-[12px] text-[#0174cf]'>10:00 am</p>
               <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
               <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
               <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
               <div className='border border-[#b7a400] flex py-1 px-1 w-32 rounded-md mt-2'>
                <div><Person2OutlinedIcon sx={{color:"#b7a400"}}/></div>
               <div >
                <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#b7a400] '>Patient felt discomfort and no change in fever</p>
                </div>
                </div>
            </div>
            <div className="p-2 w-36">
               <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
               <p className='text-start  text-[12px] text-[#707070]'>Saline 1lt</p>
               <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
               <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
               <div className='border border-red-700 flex w-32 py-1 px-1 rounded-md mt-2'>
                <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
               <div >
                <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
                </div>
                </div>
            </div>
           
            
            </div>
        </div>
        <div className='mt-2'> 
        <div className="w-full">
       <p className='text-[#0174cf] text-start ml-1'><FiberManualRecordIcon/>   15 sept 2019</p>
        </div>
        <div  className="w-full flex justify-around ">
            
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#68ba75] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#68ba75"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#68ba75] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start  text-[12px] text-[#0174cf]'>10:00 am</p>
           <p className='text-start text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-[#b7a400] flex py-1 px-1 w-32 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"#b7a400"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[#b7a400] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
        <div className="p-2 w-36">
           <p className='text-start text-[12px]  text-[#0174cf]'>10:00 am</p>
           <p className='text-start  text-[12px] text-[#707070]'>Saline 1lt</p>
           <p className='text-start text-[12px] text-[#707070]'>Metformin 10mg</p>
           <p className='text-start text-[12px] text-[#707070]'>Amoxicillin 50mg</p>
           <div className='border border-red-700 flex w-32 py-1 px-1 rounded-md mt-2'>
            <div><Person2OutlinedIcon sx={{color:"red"}}/></div>
           <div >
            <p className='text-[10px] text-start lg:text-[8px] md:text-[8px] text-[red] '>Patient felt discomfort and no change in fever</p>
            </div>
            </div>
        </div>
       
        
        </div>
        </div>
       
        </div>
        
      
       
    </div>
  )
}
