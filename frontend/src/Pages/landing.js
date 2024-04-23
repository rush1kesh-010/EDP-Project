import React from 'react'
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import pro1 from '../Images/profile-first.png'
import pro2 from '../Images/profile-second.png'
import pro3 from '../Images/profile-third.png'
import pro4 from '../Images/profile-fourth.png'
import pro5 from '../Images/profile-fifth.png'
import pro6 from '../Images/profile-sixth.png'
import pro7 from '../Images/profile-seventh.png'
import pro8 from '../Images/profile-eight.png'
import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div className='bg-[#e8f5ff] p-8'>
        <h1 className='text-8xl font-bold text-[#0174cf] '>Welcome!</h1>
        <h1 className='text-3xl font-bold text-[#5d9dcf] mt-4'>Ward 2</h1>
        <p className='text-xl font-medium text-[#87afcf] mt-4'>Please double-click on your profile to sign in</p>
         <div className='flex justify-center gap-x-8 mt-10'>
        <div >
            <Link to="/login">
        <Card  sx={{ width:"18rem" ,display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection: "column",padding:"1rem",borderRadius:"20px"}}>
        <Avatar sx={{width:"50%", height:"50%",marginTop:"10px"}} alt="Travis Howard" src={pro1} />
        <h1 className='text-2xl font-bold text-[#0174cf] mt-2'>Brooklyn Simmons</h1>
        <p className='text-base font-medium text-[#87afcf] mt-2'>Acme Co.</p>
        </Card>
        </Link>
        </div>
        <div >
        <Link to="/login">
        <Card  sx={{ width:"18rem" ,display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection: "column",padding:"1rem",borderRadius:"20px"}}>
        <Avatar sx={{width:"50%", height:"50%",marginTop:"10px"}} alt="Travis Howard" src={pro2} />
        <h1 className='text-2xl font-bold text-[#0174cf] mt-2'>Kathryn Murphy</h1>
        <p className='text-base font-medium text-[#87afcf] mt-2'>Acme Co.</p>
        </Card>
        </Link>
        </div>
        <div >
        <Link to="/login">
        <Card  sx={{ width:"18rem" ,display:"flex",justifyContent:"space-evenly",alignItems:"center",flexDirection: "column",padding:"1rem",borderRadius:"20px"}}>
        <Avatar sx={{width:"50%", height:"50%",marginTop:"10px"}} alt="Travis Howard" src={pro3} />
        <h1 className='text-2xl font-bold text-[#0174cf] mt-2'>Leslie Alexander</h1>
        <p className='text-base font-medium text-[#87afcf] mt-2'>Acme Co.</p>
        </Card>
        </Link>
        </div>
       
       
        </div>
        <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop:"4rem"}}
      >
        <div style={{flex: 1, height: '1.5px', backgroundColor: '#0174cf'}} />

        <div>
          <p style={{width: '180px', textAlign: 'center',color:"#5d9dcf"}}>Inactive Accounts </p>
        </div>

        <div style={{flex: 1, height: '1.5px', backgroundColor: '#0174cf'}} />
      </div>
    <div className='flex justify-center gap-x-8 mt-6 '>
        <div>
            <img src={pro4}/>
        </div>
        <div>
            <img src={pro5}/>
        </div>
        <div>
            <img src={pro6}/>
        </div>
        <div>
            <img src={pro7}/>
        </div>
        <div>
            <img src={pro8}/>
        </div>
    </div>
   </div>
  )
}
