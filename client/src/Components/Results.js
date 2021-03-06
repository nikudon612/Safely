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
  // state for siteList for mapping
  const [siteLists, setSiteLists] = useState([]);

  const reviews_url = "/reviews";

  //Fetch for reviews
  useEffect(() => {
    fetch(reviews_url)
      .then((res) => res.json())
      .then((data) => setReviewLists(data));
  }, []);

  //Function to try and get individual sites reviews to display
  function handleClick(e) {
    console.log(e.target.value);
    const sitename = e.target.value;
    const sl = siteLists.find((sn) => sn.name === sitename);
    const sr = sl.reviews;
    console.log(sl.reviews);
    setReviewLists(sr);
    setReviewPopup(true);
  }

  //Function to display Cards reviews
  function handleReviews() {
    setReviewPopup(true);
  }

  //Function to display Popup
  function handleReviewClick() {
    setButtonPopup(true);
  }
  //Function to add a new review
  function handleAdd(newReview, e) {
    console.log("Submit button has been clicked!");
    console.log(newReview);
    const addReview = [...reviewLists, newReview];
    // debugger;
    setReviewLists(addReview);
    console.log(reviewLists);
    setButtonPopup(false);
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        <Review
          trigger={reviewPopup}
          setTrigger={setReviewPopup}
          user={user}
          reviewLists={reviewLists}
        />

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
            reviewLists={reviewLists}
            handleClick={handleClick}
            siteLists={siteLists}
            setSiteLists={setSiteLists}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Results;
