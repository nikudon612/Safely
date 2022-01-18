import MapContainer from "./MapContainer";
import ResultCards from "./ResultCards";
import PopUp from "./PopUp";
import { useState } from "react";

function Results() {
  const [buttonPopup, setButtonPopup] = useState(false);

  function handleReviewClick() {
    setButtonPopup(buttonPopup);
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        {/* <div id="resultsContainer">
        <div id="searchbox">
          <div id="urLocation">Your Location</div>
          <input id="search" placeholder="Enter your City or Zip"></input>
        </div>
        <div id="resultsbox"></div>
      </div> */}
        <div>
          <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h1>Hello world</h1>
            <p>This is triggered from clicking rating!</p>
          </PopUp>
          <MapContainer handleReviewClick={handleReviewClick} />
        </div>
      </div>
    </div>
  );
}

export default Results;
