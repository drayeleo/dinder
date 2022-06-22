import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function SignupPage() {
  const [user, setUser] = useOutletContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleFormInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(setUser(formData.username));
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleFormInput(e)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleFormInput(e)}
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={(e) => handleFormInput(e)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleFormInput(e)}
        />
        <label htmlFor="passwordConfirmation">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirmation"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={(e) => handleFormInput(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
