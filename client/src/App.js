// import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";

import Home from "./components/home";
import About from "./components/about";
import { useState, useEffect } from "react";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Header onLogout={onLogout} />
      <Outlet context={[user, setUser]} />
  
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  )
}
export default App;
