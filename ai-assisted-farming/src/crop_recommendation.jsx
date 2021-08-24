import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { ReactComponent as InfoCircle } from "bootstrap-icons/icons/info-circle.svg";
import { ReactComponent as InfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";

const contentInput = [
  {
    i: 0,
    "Short-Description": "Nitrogen Content",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
  {
    i: 1,
    "Short-Description": "Phosphorous Content",
    Description: "FullDetail-2",
    Hint: "0 - 140",
  },
  {
    i: 2,
    "Short-Description": "Potassium Content",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
  {
    i: 3,
    "Short-Description": "Temperature",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
  {
    i: 4,
    "Short-Description": "Humidity",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
  {
    i: 5,
    "Short-Description": "PH",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
  {
    i: 6,
    "Short-Description": "Rainfall",
    Description: "FullDetail-1",
    Hint: "0 - 140",
  },
];
class Crop_recommendation extends Component {
  state = {
    Nitrogen: 1,
    Phosphorous: null,
    Potassium: null,
    Temperature: null,
    humidity: null,
    ph: null,
    rainfall: null,
  };
  getInput = () => {
    return contentInput.map((eachItem) => {
      return (
        <div className="row m-3 justify-content-center">
          <div className="col badge bg-secondary col-12 col-lg-4">
            <div className="my-info-icon">
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={"tooltip-top"}>
                    Tooltip on <strong>Top</strong>.
                  </Tooltip>
                }
              >
                <InfoCircle />
              </OverlayTrigger>
            </div>
            <div className="h5 my-short-description">
              {eachItem["Short-Description"]}
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="form-floating col-12 col-lg-9">
              <input
                type="Number"
                className="form-control"
                // onChange={(e) => this.handleNameChange(e, i)}
                placeholder={eachItem.Hint}
                name={eachItem.Hint}
                value={this.state.Nitrogen}
              />
              <label for="floatingInput">{eachItem.Hint}</label>
            </div>
          </div>
        </div>
      );
    });
  };
  handleSubmit = () => {
    console.log(this.state.Nitrogen);
  };
  render() {
    return (
      <div className="container">
        {this.getInput()}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Crop_recommendation;
