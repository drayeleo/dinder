import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useOutletContext();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => {
        // onLogin(user)
        console.log("logged in");
        setUser(user);
      });
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
