import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PatientProfileTab() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('primarydetails'); // Initialize with 'primarydetails'

  useEffect(() => {
    // Define a mapping between tab names and paths
    const tabPathMap = {
      'primarydetails': '/patient-profileprimarydetails',
      'vitaldetails': '/patient-profilevitals',
      'patientprofiledrip': '/patient-profiledrip',
      'patientprofiledrug': '/patient-profiledrug',
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
      <Link to='/patient-profileprimarydetails' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('primarydetails')}`} onClick={() => handleTabClick('primarydetails')}>
        <p className='text-[20px] font-medium'>Primary details</p>
      </Link>
      <Link to='/patient-profilevitals' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('vitaldetails')}`} onClick={() => handleTabClick('vitaldetails')}>
        <p className='text-[20px] font-medium'>Vital details</p>
      </Link>
      <Link to='/patient-profiledrip' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('patientprofiledrip')}`} onClick={() => handleTabClick('patientprofiledrip')}>
        <p className='text-[20px] font-medium'>Drug Administration</p>
      </Link>
      <Link to='/patient-profiledrug' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('patientprofiledrug')}`} onClick={() => handleTabClick('patientprofiledrug')}>
        <p className='text-[20px] font-medium'>Drip Monitoring</p>
      </Link>
      <Link to='/patient-profileairbubble' className={`py-2 px-2 w-56 rounded-t-full ${isTabActive('patientprofileairbubble')}`} onClick={() => handleTabClick('patientprofileairbubble')}>
        <p className='text-[20px] font-medium'>Air Bubble</p>
      </Link>
    </div>
  );
}
