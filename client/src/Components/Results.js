import MapContainer from "./MapContainer";

function Results() {
  return (
    <div className="resultsPage">
      <div id="resultsContainer">
        <div id="searchbox">
          <div id="urLocation">Your Location</div>
          <input id="search" placeholder="Enter your City or Zip"></input>
        </div>
        <div id="resultsbox"></div>
      </div>
      <MapContainer />
    </div>
  );
}

export default Results;
