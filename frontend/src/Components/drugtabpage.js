import React from 'react'
import DataHistoryTable2 from './data-history3';
import DripMonitoring from './drip-monitoring';
import DripIntenseGraph from './dripgraph';

export default function DripMoniTabComp() {
  return (
    <div>
        <div className="grid grid-cols-12 bg-[white] ">
             <div className="col-span-12 lg:col-span-7 md:col-span-7 my-4 mx-4">
                 <DataHistoryTable2/>
             </div>
             <div className="col-span-12 lg:col-span-5 md:col-span-5 my-0 mx-0 md:my-4 md:mx-4 lg:my-4 lg:mx-4">
                 <DripMonitoring/>
                 <DripIntenseGraph/>
                 
             </div>
        </div>
    </div>
  )
}
