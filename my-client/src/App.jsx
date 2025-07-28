import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import  { GetId } from './components/GetId'; 
import  { Delete } from './components/Delete'; 
import { Add } from './components/Add';
import { GetAll } from './components/GetAll';
import { Update } from './components/Update';
import './styles/App.css';
function App() {
  return (
   
  <div className='app-container'>
    <header className="heading">
        <h1>Employee Record Management System</h1>
      </header>

   <div className='nav-links'>
        <nav >
            <NavLink to="/insert">Insert Employee</NavLink>
            <NavLink to="/delete">Delete Employee</NavLink>
            <NavLink to="/update">Update Employee</NavLink>
            <NavLink to="/find-by-id">Find Employee by ID</NavLink>
            <NavLink to="/find-all">Find All Employees</NavLink>
        </nav>
    </div>

    <div>
        <Routes claasName="routes">
            <Route path="/insert" element={<Add/>}/>
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
            <Route path="/find-by-id" element={<GetId/>} />
            <Route path="/find-all" element={<GetAll/>}/>
        </Routes> 
    </div>

    <footer className="app-footer">
        <p>&copy; 2025 Made By Sakshi Mehta</p>
      </footer>
  </div>


  );
}

export default App;