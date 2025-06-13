import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsShow from './comp/Card.js';
import HomePage from './comp/HomePage.js';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios' need network
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:id" element={<ProductsShow />}></Route>
          <Route path="*" element={<ProductsShow />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
