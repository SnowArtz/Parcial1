import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import ListadoDeCafes from './ListadoDeCafes/ListadoDeCafes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado-de-cafes" element={<ListadoDeCafes />} />
      </Routes>
    </Router>
  );
}

export default App;
