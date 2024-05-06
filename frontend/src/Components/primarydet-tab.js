import React from 'react'
import DataHistoryTable from './data-history1';
import CheckUp from './check-up';
import CheckUpLong from './check-uplong';
import MyCalender from './my-calender';

export default function PrimaryDetailsComp() {
  return (
    <div class="grid grid-cols-12 gap-4 p-4">
    <div class="col-span-12 lg:col-span-3">
        <div class="mb-4">
            <CheckUp/>
        </div>
        <div>
            <CheckUpLong/>
        </div>
    </div>
    <div class="col-span-12 lg:col-span-6 pb-3">
        <DataHistoryTable/>
    </div>
    <div class="col-span-12 lg:col-span-3 pb-3">
        <MyCalender/>
    </div>
</div>
  )
}