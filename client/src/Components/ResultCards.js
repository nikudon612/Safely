import PopUp from "./PopUp";
// import { useState } from "react";

function ResultCards({
  site,
  name,
  rating,
  location,
  contact,
  hours,
  testtype,
  handleReviewClick,
  handleReviews,
  handleAdd,
  user,
}) {
  return (
    <div className="resultscard">
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
          <span>Contact: {contact}</span>
          <span>Hours: {hours}</span>
          <span id="reviewreviews" onClick={handleReviews}>
            REVIEWS
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="testtype">{testtype}</div>
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
