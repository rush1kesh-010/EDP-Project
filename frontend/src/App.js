import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import PatientProfile from './Pages/patient-profile';
import Loading from './Components/loading';
import PatientProfileAirnBubble from './Pages/patient-profileairbubble';
import PatientProfileDrug from './Pages/patient-profiledrip';
import PatientProfileDrip from './Pages/patient-profiledrug';
import PatientProfilePrimaryDetails from './Pages/patient-profileprimarydetails';
import PatientProfileVitalsDetails from './Pages/patient-profilevitals';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      {loading && <Loading />}
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
          <Route path='/patient-profilevitals' element={<PatientProfileVitalsDetails/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
