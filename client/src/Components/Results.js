import MapContainer from "./MapContainer";
import ResultCards from "./ResultCards";
import PopUp from "./PopUp";
import { useState, useEffect } from "react";

function Results({ user }) {
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
  //Function to display Popup
  function handleReviewClick() {
    setButtonPopup(true);
  }
  //Function to add a new review
  function handleAdd(newReview) {
    console.log("Submit button has been clicked!");
    const addReview = [...reviewLists, newReview];
    setReviewLists(addReview);
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        <PopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          user={user}
          handleAdd={handleAdd}

          // setRating={setRating}
        />
        <div>
          <MapContainer
            handleReviewClick={handleReviewClick}
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
