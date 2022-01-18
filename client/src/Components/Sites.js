import { useState, useEffect } from "react";
import SitesDisplay from "./SitesDisplay";

function Sites({ handleReviewClick }) {
  const [siteLists, setSiteLists] = useState([]);
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
        />
      </div>
    </div>
  );
}

export default Sites;
