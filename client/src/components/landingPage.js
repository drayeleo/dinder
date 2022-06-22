import HomePage from "./home";
import SignupLogin from "./signupLogin";
import { useOutletContext } from "react-router-dom";

export default function LandingPage() {
  const [user, setUser] = useOutletContext();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Landing Page</h2>
      {user ? <HomePage /> : <SignupLogin />}
      {/* add home page here with ternary statement based on whether someone is logged in */}
    </main>
  );
}
