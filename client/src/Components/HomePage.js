import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="homepage">
      <div id="searchb">
        <div id="searchb2">
          <div id="searchtitle">FIND COVID TESTING LOCATIONS</div>
          <div id="searchblurb">random facts about covid</div>
        </div>

        <div id="searchbox2">
          <div>
            <div id="urLocation2">Your Location</div>
            <input id="searchy" placeholder="Enter your City or Zip"></input>
          </div>
          <Link to="/">
            <img src="/images/magnifyingglass.png" alt="magnifying glass"></img>
          </Link>
        </div>
      </div>
      <div id="sisiH">
        <a href="https://sisiyuart.com/">
          <p>Art by Sisi Yu</p>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
