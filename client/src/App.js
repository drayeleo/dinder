// import "./App.css";
import React from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header";

import Home from "./components/home";
import About from "./components/about";
import { useState, useEffect } from "react";
// import MealCards from './components/mealCards';

function App() {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sessionCheckComplete, setSessionCheckComplete] = useState(false);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setSessionCheckComplete(true);
        });
      } else {
        setSessionCheckComplete(true);
      }
    });
  }, []);

  function onLogout() {
    setUser(null);
    navigate("/");
  }

  if (sessionCheckComplete) {
    return (
      <div className="App">
        <Header onLogout={onLogout} />
        <Outlet context={[user, setUser]} />
        {/* <MealCards/> */}
      </div>
    );
  } else {
    return <p>Loading</p>; //maybe want to change this so header and background will at least load in the meantime
  }
}
export default App;
