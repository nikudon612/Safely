import PopUp from "./PopUp";
import { useState } from "react";

function ResultCards({ site, name, rating, location, contact, hours }) {
  //State for Review Popup
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div id="resultscard">
      <div className="resultinfo">
        <div className="sitecontainer">
          <span className="sitename">{name}</span>
          <span id ="reviewpopup" onClick={() => setButtonPopup(true)}>RATING: {rating}</span>
          <span>{location}</span>
          <span>{contact}</span>
          <span>Hours: {hours}</span>
          {/* <button onClick={() => setButtonPopup(true)}>Leave Review</button> */}
        </div>
      </div>
      <div className="testtype">PCR</div>

      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Hello world</h1>
        <p>This is triggered from clicking rating!</p>
      </PopUp>
    </div>
  );
}

export default ResultCards;

// {
/* <div className="resulttitle">TESTING SITE 1</div>
        <div className="resultrating">RATING: 3</div>
        <div className="resultlocation">55-05 Myrtle Ave, Ridgewood, NY</div>
        <div className="resulthours">HOURS: M-F 8am - 6pm </div> */
// }
