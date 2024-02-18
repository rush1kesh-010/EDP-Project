import React from 'react';
import Functionalitycard from "./components/functionalityCard";
import Navbar from "./components/navbar";
import Sectiontab from './components/sectionTab';
import Notecard from './components/noteCard';
import PatientDetailSidebar from './components/patientDetailSidebar';
function App() {
  return (
    <div>
      <Navbar />
      <Sectiontab />
      <Functionalitycard/>
      <Notecard />
      <PatientDetailSidebar/>
    </div>
  );
}

export default App;
