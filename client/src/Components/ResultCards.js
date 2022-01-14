function ResultCards({ site, name, rating, location, hours }) {
  return (
    <div id="resultscard">
      <div className="resultinfo">
        <div className="sitecontainer">
          <span>{name}</span>
          <span>{rating}</span>
          <span>{location}</span>
          <span>{hours}</span>
        </div>
      </div>
      <div className="testtype">PCR</div>
    </div>
  );
}

export default ResultCards;

// {
  /* <div className="resulttitle">TESTING SITE 1</div>
        <div className="resultrating">RATING: 3</div>
        <div className="resultlocation">55-05 Myrtle Ave, Ridgewood, NY</div>
        <div className="resulthours">HOURS: M-F 8am - 6pm </div> */
// }
