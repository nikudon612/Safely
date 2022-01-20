import "./Review.css";
import { useEffect, useState } from "react";

function Review(props) {
  //State for reviews
  const [reviews, setReviews] = useState([]);
  //Pull all Reviews from db
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  const reviewRow = reviews.map((e) => {
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

  console.log(reviewRow);

  return props.trigger ? <div id="reviewbox">{reviewRow}</div> : "";
  // <div id="reviewbox">{reviewRow}</div>;
}

export default Review;
