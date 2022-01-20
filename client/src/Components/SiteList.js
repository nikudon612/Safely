//Displays the Site on the page

function SiteList({ site, name, rating, location, contact, hours, testtype }) {
  return (
    <div>
      <div className="sitecontainer">
        <span>{name}</span>
        <span>{rating}</span>
        <span>{location}</span>
        <span>{contact}</span>
        <span>{hours}</span>
        <span>{testtype}</span>
      </div>
    </div>
  );
}

export default SiteList;
