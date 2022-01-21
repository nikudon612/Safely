import "./Review.css";
import { useEffect, useState } from "react";

function Review(props) {
  //State for reviews
  //Pull all Reviews from db
  // useEffect(() => {
  //   fetch("/reviews")
  //     .then((r) => r.json())
  //     .then((data) => setReviews(data));
  // }, []);

  const reviewRows = props.reviewLists?.map((e) => {
    return (
      <div className="reviewcontainer">
        <span className="reviewinfo">Review ID: {e.id}</span>
        <span className="reviewinfo">Site ID: {e.testing_site_id}</span>
        <span className="reviewinfo">Rating: {e.rating}</span>
        <span className="reviewinfo">Comment: {e.comment}</span>
        <button
          className="rclose-button"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        {props.children}
      </div>
    );
  });

  // console.log(reviewRows);

  return props.trigger ? <div id="reviewbox">{reviewRows}</div> : "";
  // <div id="reviewbox">{reviewRow}</div>;
}

export default Review;
