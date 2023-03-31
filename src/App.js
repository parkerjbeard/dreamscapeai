import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RegistrationForm from './RegistrationForm';
import DreamInput from './DreamInput';
import Dashboard from './Dashboard';
import DreamAnalysis from './DreamAnalysis';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dream-input" element={<DreamInput />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dream-analysis" element={<DreamAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
