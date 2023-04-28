
import React, { useState, useEffect } from 'react';
import {  Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="Blogs"> Blogs</Link>
          </li>
          <li>
            <Link to="Contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
    </div>
    

  );
}

export default App;
