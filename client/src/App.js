// import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Home/>} />
    </Routes>
    </div>

  );
}

export default App;
