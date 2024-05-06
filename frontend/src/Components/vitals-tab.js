import React from 'react'

import DataHistoryTable4 from './data-history4';
import PulseGraph from './pulse-graph';
import HeartRateGraph from './HeartRate-graph';
import VitalMonitring from './vital-monitoring';

export default function VitalMonitoringTabComp() {
  return (
    <div>
        <div className="grid grid-cols-12 bg-[white]">
             <div className="col-span-12 lg:col-span-8 md:col-span-7 my-4 mx-4">
                 <DataHistoryTable4/>
             </div>
             <div className="col-span-12 lg:col-span-4 md:col-span-5 my-0 mx-0 md:my-4 md:mx-4 lg:my-4 lg:mx-4 pb-2">
                <VitalMonitring/> 
                <PulseGraph/> 
                <HeartRateGraph/>               
             </div>
        </div>
    </div>
  )
}
