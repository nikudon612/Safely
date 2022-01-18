import "./PopUp.css";
import ReactDom from "react-dom";

function PopUp(props, handleSubmit) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="pform" onSubmit={handleSubmit}>
          <p>RATING</p>
          <input id="prating" placeholder="Enter a number from 1-5."></input>
          <br />
          <br />
          <p>COMMENT</p>
          <input
            id="pcomment"
            placeholder="Tell us about your experience"
          ></input>
          <br />
          <br />

          <button id="pbutton">SUBMIT REVIEW</button>
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
