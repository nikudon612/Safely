import { useEffect } from "react";
import SitesDisplay from "./SitesDisplay";

function Sites({
  handleReviewClick,
  handleAdd,
  handleReviews,
  reviewLists,
  handleClick,
  siteLists,
  setSiteLists,
}) {
  // const [siteLists, setSiteLists] = useState([]);
  const sites = "/sites";

  useEffect(() => {
    fetch(sites)
      .then((res) => res.json())
      .then((data) => setSiteLists(data));
  }, []);
  return (
    <div>
      <div id="ts">
        <SitesDisplay
          siteLists={siteLists}
          handleReviewClick={handleReviewClick}
          handleAdd={handleAdd}
          handleReviews={handleReviews}
          reviewLists={reviewLists}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Sites;
