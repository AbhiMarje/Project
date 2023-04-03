import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlightInfo from './components/FlightInfo';
import Login from './components/Login';
import Home from './components/Home/Home';

import Flights from './components/Flights/Flights';
import Register from './components/Register';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/flights' element={<Flights />} />
          <Route path='/flightInfo' element={<FlightInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
