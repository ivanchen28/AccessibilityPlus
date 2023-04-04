import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Demos from './components/pages/Demos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/demos' element={<Demos/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
