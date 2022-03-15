import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Login from "./authenticate/Login";
import SignUp from "./authenticate/SignUp";

function App()
{
  return (
    <>
      <Router>
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
