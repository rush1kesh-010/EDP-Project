import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PatientProfileTab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Define a mapping between tab names and paths
    const tabPathMap = {
      'primarydetails': '/patient-profile',
      'vitaldetails': '/patient-profile/vitaldetails',
      'patientprofiledrip': '/patient-profiledrip',
      'dripmonitoring': '/patient-profiledrip/dripmonitoring',
      'patientprofileairbubble': '/patient-profileairbubble',
    };

    // Extract the tab name from the current path
    const currentPath = location.pathname;
    const tabName = Object.keys(tabPathMap).find(key => tabPathMap[key] === currentPath);

    // Update the active tab based on the current path
    setActiveTab(tabName);
  }, [location.pathname]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const isTabActive = (tabName) => {
    return tabName === activeTab ? 'bg-[white] text-[#0174cf]' : 'bg-[#f1f3f5] text-[#87afcf] hover:bg-[white] hover:text-[#0174cf]';
  };

  return (
    <div className='hidden md:flex lg:flex'>
<<<<<<< HEAD
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
=======
      <Link to='/patient-profile' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('primarydetails')}`} onClick={() => handleTabClick('primarydetails')}>
        <p className='text-[20px] font-medium'>Primary details</p>
      </Link>
      <Link to='/patient-profile' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('vitaldetails')}`} onClick={() => handleTabClick('vitaldetails')}>
        <p className='text-[20px] font-medium'>Vital details</p>
      </Link>
      <Link to='/patient-profiledrip' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('patientprofiledrip')}`} onClick={() => handleTabClick('patientprofiledrip')}>
        <p className='text-[20px] font-medium'>Drug Administration</p>
      </Link>
      <Link to='/patient-profiledrip' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('dripmonitoring')}`} onClick={() => handleTabClick('dripmonitoring')}>
        <p className='text-[20px] font-medium'>Drip Monitoring</p>
      </Link>
      <Link to='/patient-profileairbubble' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('patientprofileairbubble')}`} onClick={() => handleTabClick('patientprofileairbubble')}>
        <p className='text-[20px] font-medium'>Air Bubble</p>
      </Link>
>>>>>>> 18c96b88b54112c5d9cf2f5443f897d5b6d7c4f3
    </div>
  );
}
