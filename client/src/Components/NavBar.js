import { Link, Route, Switch } from "react-router-dom";

function NavBar({ user, setUser }) {
  // Handle Function for logout click in navbar
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser("");
      }
    });
  }

  return (
    <nav>
      <br />
      <ul>
        <li>
          <Link to="/sites">TESTING LOCATIONS</Link>
        </li>
        <li>
          <Link to="/tests">TESTS</Link>
        </li>
        <li id="user_name">Hello, {user.full_name}</li>
        <li>
          {user ? (
            <button onClick={handleLogoutClick} className="logout">
              LOGOUT
            </button>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
