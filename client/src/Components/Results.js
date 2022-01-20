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

  const styles = {
    transition: "0.3s",
  };

  //Function to display Cards reviews
  function handleReviews() {}

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
        <PopUp
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          user={user}
          handleAdd={handleAdd}
          // style={styles}

          // setRating={setRating}
        />
        <div>
          <MapContainer
            handleReviewClick={handleReviewClick}
            handleReviews={handleReviews}
            handleAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
