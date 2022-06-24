import { NavLink, Link } from "react-router-dom";



export default function Header({ onLogout, user }) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
      
      <header
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">
          <h1 className="testheader"> dinder
          </h1>
        </Link>
        <h3 className="tagline"> What's for dinner?
        </h3>
        <nav>
          {user ? <><NavLink to="/user-profile"><button className="navButton" >User Profile</button></NavLink> |{" "}</> : null}
          <NavLink to="/about"><button className="navButton" >About</button></NavLink>
          {user ? <> |{" "}<button className="navButton" onClick={handleLogout}>Logout</button></> : null}          
        </nav>
      </header>
    </div>
  );
}
