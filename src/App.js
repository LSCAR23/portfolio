import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainInfoPage from './Pages/MainInfoPage/MainInfoPage';
import ProjectPage from './Pages/ProjectsPage/ProjectsPage';
import './App.css'
const App = () => {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MainInfoPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
      </Routes>
    </Router>
    </div>
  );
};

// Define Dogs, Cats, Sheeps, and Goats components as needed

export default App;
