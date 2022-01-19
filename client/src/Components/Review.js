import { useEffect, useState } from "react";

function Review() {
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
      <div>
        <span className="reviewinfo">{e.testing_site_id}</span>
        <span className="reviewinfo">{e.id}</span>
        <span className="reviewinfo">{e.rating}</span>
        <span className="reviewinfo">{e.comment}</span>
      </div>
    );
  });

  console.log(reviewRow);

  return <div id="reviewbox">{reviewRow}</div>;
}

export default Review;
