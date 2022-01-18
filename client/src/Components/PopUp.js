import "./PopUp.css";
import ReactDom from "react-dom";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <p>RATING (1-5)</p>
        <input id="prating" placeholder="Enter your rating"></input>
        <br />
        <br />
        <p>COMMENT</p>
        <input id="pcomment" placeholder="Enter your review"></input>
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
      </div>
    </div>
  ) : (
    ""
  );
  //     document.getElementById("portal")
  //   );
}

export default PopUp;
