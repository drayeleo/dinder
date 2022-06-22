import { useNavigate } from "react-router-dom";

export default function SignupLogin() {
  let navigate = useNavigate();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Signup/Login</h2>
      <h3>New to Dinder? Make an account!</h3>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </button>
      <h3>Already signed up?</h3>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </main>
  );
}
