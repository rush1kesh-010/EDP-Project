import React from 'react'
import DataHistory from './data-history'
import CurrentDosage from './current-dosage'
import PatientAllergies from './patient-allergies'

export default function PatientDrugAdministration() {
  return (
    <div>
        <div className="grid grid-cols-12 bg-[white] ">
             <div className="col-span-12 lg:col-span-7 md:col-span-7 my-4 mx-4">
                 <DataHistory/>
             </div>
             <div className="col-span-12 lg:col-span-5 md:col-span-5 my-0 mx-0 md:my-4 md:mx-4 lg:my-4 lg:mx-4">
                 <CurrentDosage/>
                 <PatientAllergies/>
             </div>
        </div>
    </div>
  )
}
