import MapContainer from "./MapContainer";
import ResultCards from "./ResultCards";

function Results() {
  return (
    <div className="rePage">
      <div className="resultsPage">
        {/* <div id="resultsContainer">
        <div id="searchbox">
          <div id="urLocation">Your Location</div>
          <input id="search" placeholder="Enter your City or Zip"></input>
        </div>
        <div id="resultsbox"></div>
      </div> */}
        <div>
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

export default Results;
