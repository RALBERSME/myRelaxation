import React from "react";
import "./Miscellaneous.css";
import SlickSlider from "./SlickSlider";
const Miscellaneous = () => {
  return (
    <div className="mis-wrapper">
      <div className="container">
        <div className="mis-container">
          <div className="mis-head">
            <span className="tag">Miscellaneous</span>
            <span className="title">
              There are countless other ways to relax.
            </span>
            <span className="des">
              You might be interested in this
              <br />
            </span>
            <span className="des">
              <small className="mis-small mis-show1">
                click on the dots under the cards to scroll through the tips
              </small>
              <small className="mis-small mis-show2">
                just push the cards with your finger
              </small>
            </span>
          </div>
        </div>
        <SlickSlider />
      </div>
    </div>
  );
};

export default Miscellaneous;
