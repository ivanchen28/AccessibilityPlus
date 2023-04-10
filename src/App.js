import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Accessibility from './components/pages/Accessibility';
import Demos from './components/pages/Demos';
import MotorImpairment from './components/pages/demos/MotorImpairment';
import HearingLoss from './components/pages/demos/HearingLoss';
import LowVision from './components/pages/demos/LowVision';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/accessibility' element={<Accessibility/>}></Route>
          <Route path='/demos' element={<Demos/>}></Route>
          <Route path='/demos/motor-impairment' element={<MotorImpairment/>}></Route>
          <Route path='/demos/hearing-loss' element={<HearingLoss/>}></Route>
          <Route path='/demos/low-vision' element={<LowVision/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
