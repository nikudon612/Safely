import "./PopUp.css";
import ReactDom from "react-dom";

function PopUp(props, handleSubmit) {
  return props.trigger ? (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <div className="popup-inner">
          <p>RATING</p>
          <input id="prating" placeholder="1-5"></input>
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
      </form>
    </div>
  ) : (
    ""
  );
  //     document.getElementById("portal")
  //   );
}

export default PopUp;
