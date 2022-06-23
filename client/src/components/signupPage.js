import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function SignupPage() {
  let navigate = useNavigate();

  const [user, setUser] = useOutletContext();
  
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    if (user) {
      // console.log("navigating to homepage")
      navigate("/");
    }
  }, [user]);

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
    }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
          });
        } else {
          res.json().then((json) => {
            // setUser(null);
            // console.log("json: ", json)
            setErrors(json.errors);
            console.log("errors: ", json.errors)
          });
        }
      }
      );
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
        {errors ? <p>Error: {errors}</p> : null }
      </form>
    </main>
  );
}
