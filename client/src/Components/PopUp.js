import "./PopUp.css";
import { useState } from "react";

function PopUp(props) {
  //States for handle submit review form
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [siteName, setSiteName] = useState("");
  // const [user_id, setUser_id] = useState("");
  // const [testing_site_id, setTesting_site_id] = useState("");

  //handle submit for review popup
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
        user_id: props.user.id,
        testing_site_id: siteName,
      }),
    })
      .then((r) => r.json())
      .then((data) => props.handleAdd(data));
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="pform" onSubmit={handleSubmit}>
          <p>RATING</p>
          <input
            id="prating"
            onChange={(e) => setRating(e.target.value)}
            placeholder="Enter a number from 1-5."
          ></input>
          <br />
          <br />
          <p>Testing Site</p>
          <input
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="Name of Testing Site"
          ></input>
          <br />
          <br />
          <p>COMMENT</p>
          <input
            id="pcomment"
            placeholder="Tell us about your experience"
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <br />
          <br />

          <button id="pbutton" type="submit">
            SUBMIT REVIEW
          </button>
          <button
            className="close-button"
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
          {props.children}
        </form>
      </div>
    </div>
  ) : (
    ""
  );
  //     document.getElementById("portal")
  //   );
}

export default PopUp;
