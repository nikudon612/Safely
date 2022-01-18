import MapContainer from "./MapContainer";
import ResultCards from "./ResultCards";
import PopUp from "./PopUp";
import { useState } from "react";

function Results() {
  const [buttonPopup, setButtonPopup] = useState(false);

  function handleReviewClick() {
    setButtonPopup(true);
  }

  return (
    <div className="rePage">
      <div className="resultsPage">
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
        <div>
          <MapContainer handleReviewClick={handleReviewClick} />
        </div>
      </div>
    </div>
  );
}

export default Results;
