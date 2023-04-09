import './App.css';
import Home from './components/pages/Home';
import Accounts from './components/pages/Accounts';
import Accessibility from './components/pages/Accessibility';
import Demos from './components/pages/Demos';
import MotorImpairment from './components/pages/demos/MotorImpairment';
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
          <Route path='/accounts' element={<Accounts/>}></Route>
          <Route path='/accessibility' element={<Accessibility/>}></Route>
          <Route path='/demos' element={<Demos/>}></Route>
          <Route path='/demos/motor-impairment' element={<MotorImpairment/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
