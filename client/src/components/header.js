import { NavLink, Link } from "react-router-dom";

export default function Header({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <Link to="/">
        <h1>Dinder!</h1>
      </Link>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/user-profile">User Profile</NavLink> |{" "}
        <NavLink to="/about">About</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}
