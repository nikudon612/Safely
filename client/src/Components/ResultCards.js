function ResultCards({ site, name, rating, location, contact, hours }) {
  return (
    <div id="resultscard">
      <div className="resultinfo">
        <div className="sitecontainer">
          <span className="sitename">{name}</span>
          <span>RATING: {rating}</span>
          <span>{location}</span>
          <span>{contact}</span>
          <span>Hours: {hours}</span>
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
