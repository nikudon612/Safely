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
  handleClick,
  handleReviews,
  siteLists,
  setReviewLists,
  handleAdd,
  user,
}) {
  // function handleClick(e) {
  //   console.log(e.target.value);
  //   const sitename = e.target.value;
  //   const sl = siteLists.find((sn) => sn.id === sitename);
  //   setReviewLists(sl.reviews);
  // }
  return (
    <div className="resultscard">
      <div className="resultinfo">
        <div className="sitecontainer">
          <option className="sitename" onClick={handleClick}>
            {name}
          </option>
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
          <span id="reviewreviews">REVIEWS</span>
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
