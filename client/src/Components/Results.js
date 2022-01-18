import MapContainer from "./MapContainer";
import ResultCards from "./ResultCards";
import PopUp from "./PopUp";
import { useState, useEffect } from "react";

function Results() {
  const [buttonPopup, setButtonPopup] = useState(false);
  //States for handle submit review form
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [user_id, setUser_id] = useState("");
  const [testing_site_id, setTesting_site_id] = useState("");
  const [reviewLists, setReviewLists] = useState([]);
  const reviews = "/reviews";

  useEffect(() => {
    fetch(reviews)
      .then((res) => res.json())
      .then((data) => setReviewLists(data));
  }, []);

  function handleReviewClick() {
    setButtonPopup(true);
  }

  function handleAdd(newReview) {
    console.log("Submit button has been clicked!");
    const addReview = [...reviewLists, newReview];
    setReviewLists(addReview);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
        user_id: user_id,
        testing_site_id: testing_site_id,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAdd(data));
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
        <div>
          <MapContainer
            handleReviewClick={handleReviewClick}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
