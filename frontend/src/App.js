import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import PatientProfile from './Pages/patient-profile';

import PatientProfileAirnBubble from './Pages/patient-profileairbubble';
import PatientProfileDrug from './Pages/patient-profiledrip';
import PatientProfileDrip from './Pages/patient-profiledrug';
import PatientProfilePrimaryDetails from './Pages/patient-profileprimarydetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/patient-profile' element={<PatientProfile/>}/>
          <Route path='/patient-profileairbubble' element={<PatientProfileAirnBubble/>}/>
          <Route path='/patient-profiledrip' element={<PatientProfileDrug/>}/>
          <Route path='/patient-profiledrug' element={<PatientProfileDrip/>}/>
          <Route path='/patient-profileprimarydetails' element={<PatientProfilePrimaryDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
