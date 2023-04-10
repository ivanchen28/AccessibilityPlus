import './App.css';
import Home from './components/pages/Home';
import Accounts from './components/pages/Accounts';
import Accessibility from './components/pages/Accessibility';
import Demos from './components/pages/Demos';
import MotorImpairment from './components/pages/demos/MotorImpairment';
import HearingLoss from './components/pages/demos/HearingLoss';
import LowVision from './components/pages/demos/LowVision';
import MobileAccessibility from './components/pages/demos/MobileAccessibility';
import Colourblindness from './components/pages/demos/Colourblindness';
import CognitiveImpairment from './components/pages/demos/CognitiveImpairment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename="AccessibilityPlus">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/accounts' element={<Accounts/>}></Route>
          <Route path='/accessibility' element={<Accessibility/>}></Route>
          <Route path='/demos' element={<Demos/>}></Route>
          <Route path='/demos/mobile-accessibility' element={<MobileAccessibility/>}></Route>
          <Route path='/demos/motor-impairment' element={<MotorImpairment/>}></Route>
          <Route path='/demos/hearing-loss' element={<HearingLoss/>}></Route>
          <Route path='/demos/low-vision' element={<LowVision/>}></Route>
          <Route path='/demos/colourblindness' element={<Colourblindness/>}></Route>
          <Route path='/demos/cognitive-impairment' element={<CognitiveImpairment/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
