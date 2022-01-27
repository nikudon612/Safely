import PopUp from "./PopUp";
// import { useState } from "react";

function ResultCards({
  site,
  name,
  rating,
  address,
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

          <span>{address}</span>
          <span>Contact: {contact}</span>
          <span>Hours: {hours}</span>
          <span
            id="reviewpopup"
            // onClick={() => setButtonPopup(true)}
            onClick={handleReviewClick}
          >
            Rating: {rating}
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="testtype">{testtype}</div>
    </div>
  );
}

export default ResultCards;
