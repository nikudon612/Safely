import ResultCards from "./ResultCards";
// import SiteList from "./SiteList";

function SitesDisplay({
  siteLists,
  handleReviewClick,
  handleAdd,
  handleReviews,
  reviewLists,
  handleClick,
}) {
  const sitesmapped = siteLists.map((e) => {
    return (
      <ResultCards
        site={e}
        key={e.id}
        name={e.name}
        rating={e.rating}
        location={e.location}
        contact={e.contact}
        hours={e.hours}
        testtype={e.test_type}
        handleReviewClick={handleReviewClick}
        handleAdd={handleAdd}
        handleReviews={handleReviews}
        siteLists={siteLists}
        reviewLists={reviewLists}
        handleClick={handleClick}

        // handleEventDelete={handleEventDelete}
      />
    );
  });
  return <div>{sitesmapped}</div>;
}

export default SitesDisplay;
