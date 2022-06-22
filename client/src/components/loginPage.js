import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function LoginPage() {
  // let navigate = useNavigate();
  const [user, setUser] = useOutletContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // if (user) {
  //   navigate("/");
  // }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        res.json().then((json) => {
          setUser(null);
          setError(json.error);
        });
      }
    });

    // .then((r) => r.json())
    // .then((user) => {
    //   // onLogin(user)
    //   user ? console.log("user truthy") : console.log("user falsy");
    //   console.log("user:", user);
    //   setUser(user);
    // });
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
