import PopUp from "./PopUp";
// import { useState } from "react";

function ResultCards({
  site,
  name,
  rating,
  location,
  contact,
  hours,
  handleReviewClick,
  handleAdd,
  user, 
}) {
  return (
    <div id="resultscard">
      <div className="resultinfo">
        <div className="sitecontainer">
          <span className="sitename">{name}</span>
          <span
            id="reviewpopup"
            // onClick={() => setButtonPopup(true)}
            onClick={handleReviewClick}
          >
            RATING: {rating}
          </span>
          <span>{location}</span>
          <span>{contact}</span>
          <span>Hours: {hours}</span>
        </div>
      </div>
      <div className="testtype">PCR</div>
      {/* <PopUp
        handleAdd={handleAdd}
        user={user}
        // trigger={buttonPopup} setTrigger={setButtonPopup}
      /> */}
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
