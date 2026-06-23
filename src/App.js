import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainNavbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/Profile';
import Profilesetup from './pages/Profilesetup';
import Dashboard from './pages/Dashboard';
import IndustryTrends from './pages/industrytrends';

import Psychometric from "./components/PshychometricTest/Pshychometric";
import PsychometricResult from "./components/PshychometricTest/PsychometricResult";
import Recommendation from "./components/Recommendation";

function App() {
  return (
    <Router>
      <MainNavbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-setup" element={<Profilesetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/industrytrends" element={<IndustryTrends/>}/>

          <Route path="/recommendation" element={<Recommendation />} />

          <Route path="/psychometric-test" element={<Psychometric />} />
          <Route path="/psychometric-result" element={<PsychometricResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;