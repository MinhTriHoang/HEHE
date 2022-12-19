import React from 'react';
import {  BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Resume from "./resume"
const navbar= () =>{
  return (
  

  <>
  <BrowserRouter>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: 600,
      }}>
        <Link to='/resume'>
          Resume
        </Link>
        <Link to='/'>
          Home
        </Link>
      </div>
      <Routes>
        {/* BASIC ROUTES */}
        <Route
          index // equivalent to path=""
        />
        <Route
          path="resume" // path = '/' + 'resume'
          element={<Resume/>}
        />
       
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default navbar;