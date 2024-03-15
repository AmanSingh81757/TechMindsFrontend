import React from "react";
import './style.css'
const BoardNavbar = () => {
  return (
    <>
      <div>
        Paint by holding down the mouse button.
        <a href="" download="my_painting.png">
          Download my painting
        </a>
        <i className="fa fa-refresh refresh-btn">
          <strong>Clear</strong>
        </i>
        <div id="pen-tools" className="pen-tools">
          <div id="drawing-colors" className="drawing-colors">
            <div
              className="color-circle active"
              data-color="hotpink"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="orange"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="red"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="yellow"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="black"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="blue"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="white"
              onclick="selectColor(this)"
            ></div>
            <div
              className="color-circle"
              data-color="green"
              onclick="selectColor(this)"
            ></div>
          </div>
        </div>
        <div id="favContainer">
          <label for="favcolor">Select your favourite color:</label>
          <input
            type="color"
            name="favcolor"
            id="favcolor"
            value="#ff0000"
            onchange="favColor(this)"
          />
        </div>
        <div id="pen-size" className="pen-size">
          <label for="pen-size">
            <i className="fa fa-pencil"></i> Pen size
          </label>
          <input
            type="range"
            name="pen-size"
            id="pen-size"
            value="10"
            step="5"
            min="5"
            max="40"
            onchange="penSizeChange(this.value)"
          />
        </div>
      </div>
    </>
  );
};

export default BoardNavbar;
