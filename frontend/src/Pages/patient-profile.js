import React from "react";
import Header from "../Components/common-comp/header";
import "../Css/home.css";
import PatientSidebar from "../Components/common-comp/patient-sidebar";
import PatientDrugAdministration from "../Components/patient-drug-administration";
import PatientProfileTab from "../Components/common-comp/patient-profile-tab";
export default function PatientProfile() {
  return (
    <div>
      {/* ------------Header----------- */}
      <div>
        <Header />
      </div>

      <div className="grid grid-cols-12 bg-[#e8f5ff]">
        {/* ------------Sidenav----------- */}
        <div className="col-span-12 lg:col-span-3 md:col-span-3">
          <div >
            <PatientSidebar />
          </div>
        </div>
        {/* ----------- second section --------- */}
        <div className="col-span-12 lg:col-span-9 md:col-span-9 p-4">
          <PatientProfileTab/>
          </div>

      </div>
    </div>
  );
}