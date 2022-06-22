import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
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
    <div>
      <Header onLogout={onLogout} />
      <Outlet context={[user, setUser]} />
    </div>
  );
}

export default App;
