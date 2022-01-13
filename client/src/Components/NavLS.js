import { Link } from "react-router-dom";

function NavLS() {
  return (
    <nav>
      <Link className="logo" to="/login">
        SAFELY
      </Link>
      <br />
      <ul id="menuList">
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/signup">SIGNUP</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavLS;
