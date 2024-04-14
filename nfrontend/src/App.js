import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/login';
import Home from './Pages/home';
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
