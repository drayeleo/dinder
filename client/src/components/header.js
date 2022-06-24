import { NavLink, Link } from "react-router-dom";



export default function Header({ onLogout, user }) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      <Link style={{textDecoration: 'none'}} to="/" >
        <h1 className="testheader"> dinder
        </h1>
      </Link>
    
      <h3 className="tagline"> What's for dinner?
      </h3>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        {user ? <><NavLink to="/user-profile">User Profile</NavLink> |{" "}</> : null}
        <NavLink to="/about">About</NavLink>
        {user ? <button onClick={handleLogout}>Logout</button> : null}
        
      </nav>
    </div>
  );
}
