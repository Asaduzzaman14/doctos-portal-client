import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequirAuth from './Pages/Login/RequirAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={<RequirAuth>
          <About />
        </RequirAuth>}></Route>

        <Route path='/appoinment' element={<RequirAuth>
          <Appoinment />
        </RequirAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
