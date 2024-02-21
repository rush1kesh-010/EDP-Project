import React from 'react';
import userImage from '../assets/photojpg.jpg';
import "../styles/patientDetailSidebar.css";
const patientIllnessDetails=[
    {
     image:  {userImage},
     name: 'Courtney Henry',
     startDate: '15 February 2023',
     sex: 'male',
     age: '40',
     mobileNumber:'9833710623',

    } , 
    {
      image:  {userImage},
      name: 'Courtney Henry',
     startDate: '15 February 2023',
     sex: 'male',
     age: '40',
     mobileNumber:'9833710623',
    } , 
    {
      image:  {userImage}, 
      name: 'Courtney Henry',
      startDate: '15 February 2023',
      sex: 'male',
      age: '40',
      mobileNumber:'9833710623',
    } , 
    {
      image:  {userImage}, 
      name: 'Courtney Henry',
      startDate: '15 February 2023',
      sex: 'male',
      age: '40',
      mobileNumber:'9833710623',
    } , 
    {
      image:  {userImage}, 
      name: 'Courtney Henry',
      startDate: '15 February 2023',
      sex: 'male',
      age: '40',
      mobileNumber:'9833710623',
    } , 
 
 ]
 
 const patientDetailSidebar = () => {
   return (
     <div className='patientDetailSidebar'>
       <div className='pateint-heading'>
         
         <div className="patient-illness-details">
           {patientIllnessDetails.map((illness)=>(
             <div className="illness">
               <div className="illness-Details">
                 <div className="illness-photo">
                   {illness.userImage}
                 </div>
                 <div className="illness-name">
                   <h5 className='name'>{illness.name}</h5>
                   <span className='date'>{illness.startDate}</span>
                   <span className='sex'>{illness.sex}</span>
                   <span className='age'>{illness.age}</span>
                   <span className='number'>{illness.mobileNumber}</span>

                 </div>
               </div>
               <div className="action"></div>
             </div>
           ))
           }
         </div>
       </div>
          
     </div>
   )
 }

export default patientDetailSidebar;