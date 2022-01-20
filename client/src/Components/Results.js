import MapContainer from "./MapContainer";
import PopUp from "./PopUp";
import { useState, useEffect } from "react";
import Review from "./Review";

function Results({ user }) {
  //State for Reviews to show on result cards
  const [reviewPopup, setReviewPopup] = useState(false);
  //State for Popup to show
  const [buttonPopup, setButtonPopup] = useState(false);
  //State for all our reviews to show
  const [reviewLists, setReviewLists] = useState([]);
  const reviews = "/reviews";

  //Fetch for reviews
  useEffect(() => {
    fetch(reviews)
      .then((res) => res.json())
      .then((data) => setReviewLists(data));
  }, []);

  //Function to display Cards reviews
  function handleReviews() {
    setReviewPopup(true);
  }

  //Function to display Popup
  function handleReviewClick() {
    setButtonPopup(true);
  }
  //Function to add a new review
  function handleAdd(newReview) {
    console.log("Submit button has been clicked!");
    const addReview = [...reviewLists, newReview];
    setReviewLists(addReview);
    setButtonPopup(false);
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        <Review trigger={reviewPopup} setTrigger={setReviewPopup} user={user} />

        <PopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          user={user}
          handleAdd={handleAdd}
        />
        {/* <div id="rpop" /> */}
        <div>
          <MapContainer
            handleReviewClick={handleReviewClick}
            handleReviews={handleReviews}
            handleAdd={handleAdd}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Results;
