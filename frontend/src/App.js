import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import PatientProfile from './Pages/patient-profile';
import IntAirBubble from './Components/intense-airbubble';
import DataHistoryTable from './Components/data-history1';
import DataHistoryTable1 from './Components/data-history2';
import DataHistoryTable2 from './Components/data-history3';
import AirBubbleTabComp from './Components/airbubtabcomp';
import PatientProfileAirnBubble from './Pages/patient-profileairbubble';
import PatientProfileDrug from './Pages/patient-profiledrip';

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
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
