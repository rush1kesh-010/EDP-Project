import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';
import PatientProfile from './Pages/patient-profile';

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

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
