import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainInfoPage from './Pages/MainInfoPage/MainInfoPage';
// import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import './App.css'
import Navburger from './Components/NavBurger/NavBurger';
const App = () => {
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Navburger/>
      <Routes>
        <Route path="/" exact element={<MainInfoPage/>} />
        {/* <Route path="/projects" element={<ProjectsPage></ProjectsPage>} /> */}
      </Routes>
    </Router>
    </div>
  );
};

// Define Dogs, Cats, Sheeps, and Goats components as needed

export default App;
