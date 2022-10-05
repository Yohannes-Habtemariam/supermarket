import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './views/aboutPage/About';
import Contact from './views/contactPage/Contact';
import Home from './views/homePage/Home';
import Research from './views/researchPage/Research';
import Service from './views/servicePage/Service';
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/research' element={<Research />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App