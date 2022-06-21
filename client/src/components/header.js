import { NavLink, Link } from "react-router-dom";

export default function Header() {
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
      </nav>
    </div>
  );
}
