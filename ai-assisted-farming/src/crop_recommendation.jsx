import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { ReactComponent as InfoCircle } from "bootstrap-icons/icons/info-circle.svg";
import { ReactComponent as InfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const URL = "http://localhost:5000";
// const URL = "https://sprinkle-foamy-soy.glitch.me";

const contentInput = [
  {
    i: 0,
    "Short-Description": "Nitrogen Content",
    Description: "N - ratio of Nitrogen content in soil",
    Hint: "0 - 140",
  },
  {
    i: 1,
    "Short-Description": "Phosphorous Content",
    Description: "P - ratio of Phosphorous content in soil",
    Hint: "5 - 145",
  },
  {
    i: 2,
    "Short-Description": "Potassium Content",
    Description: "K - ratio of Potassium content in soil",
    Hint: "5 - 205",
  },
  {
    i: 3,
    "Short-Description": "Temperature",
    Description: "Temperature - temperature in degree Celsius",
    Hint: "8.83 ° - 43.7 °",
  },
  {
    i: 4,
    "Short-Description": "Humidity",
    Description: "Humidity - relative humidity in %",
    Hint: "14.3 - 100 (%)",
  },
  {
    i: 5,
    "Short-Description": "PH",
    Description: "ph - ph value of the soil",
    Hint: "3.5 - 9.94",
  },
  {
    i: 6,
    "Short-Description": "Rainfall",
    Description: "rainfall - rainfall in mm",
    Hint: "20.2 - 299 (mm)",
  },
];
const API_KEY = "B1mo3gmGszh2wXROK6WnFupr8N8bSqXpkm1nJoVhMR_5";
const ansMap = {
  0: "apple",
  1: "banana",
  2: "blackgram",
  3: "chickpea",
  4: "coconut",
  5: "coffee",
  6: "cotton",
  7: "grapes",
  8: "jute",
  9: "kidneybeans",
  10: "lentil",
  11: "maize",
  12: "mango",
  13: "mothbeans",
  14: "mungbean",
  15: "muskmelon",
  16: "orange",
  17: "papaya",
  18: "pigeonpeas",
  19: "pomegranate",
  20: "rice",
  21: "watermelon",
};

class Crop_recommendation extends Component {
  state = {
    value: [null, null, null, null, null, null, null],
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
                  <Tooltip id={"tooltip-top"}>{eachItem.Description}</Tooltip>
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
                type="number"
                className="form-control"
                // onChange={(e) => this.handleNameChange(e, i)}
                placeholder={eachItem.Hint}
                name={eachItem.Hint}
                onChange={(e) => this.handleInputChange(e, eachItem.i)}
                value={this.state.value[eachItem.i]}
              />
              <label for="floatingInput">{eachItem.Hint}</label>
            </div>
          </div>
        </div>
      );
    });
  };
  handleInputChange = (event, index) => {
    this.state.value[index] = parseFloat(event.target.value);
    this.setState({ value: this.state.value });
  };
  validateInput = () => {
    let flag = true;
    for (let i = 0; i < this.state.value.length; i++) {
      if (this.state.value[i] == null) flag = false;
    }
    if (flag) return true;
    NotificationManager.warning("Values cannot be empty !");
    return false;
  };
  handleSubmit = () => {
    console.log(this.state.value);
    if (this.validateInput() || true) {
      const payload_scoring = {
        input_data: [
          {
            fields: [
              "N",
              "P",
              "k",
              "temperature",
              "humidity",
              "ph",
              "rainfall",
            ],
            values: [[90, 42, 43, 20.8, 82.0, 6, 202.9]],
          },
        ],
      };
      const mltoken =
        "eyJraWQiOiIyMDIxMDgxOTA4MTciLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDI1TUlEIiwiaWQiOiJJQk1pZC02NjEwMDI1TUlEIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMGQ1MWY4NWUtNmIyNC00ZGVlLWJhMjUtYzM1ZDViOTY2ZTViIiwiaWRlbnRpZmllciI6IjY2MTAwMjVNSUQiLCJnaXZlbl9uYW1lIjoiQ2hhbmRyYXByYWJodSIsImZhbWlseV9uYW1lIjoiQyIsIm5hbWUiOiJDaGFuZHJhcHJhYmh1IEMiLCJlbWFpbCI6InNlYzE5aXQwODdAc2FpcmFtdGFwLmVkdS5pbiIsInN1YiI6InNlYzE5aXQwODdAc2FpcmFtdGFwLmVkdS5pbiIsImF1dGhuIjp7InN1YiI6InNlYzE5aXQwODdAc2FpcmFtdGFwLmVkdS5pbiIsImlhbV9pZCI6IklCTWlkLTY2MTAwMjVNSUQiLCJuYW1lIjoiQ2hhbmRyYXByYWJodSBDIiwiZ2l2ZW5fbmFtZSI6IkNoYW5kcmFwcmFiaHUiLCJmYW1pbHlfbmFtZSI6IkMiLCJlbWFpbCI6InNlYzE5aXQwODdAc2FpcmFtdGFwLmVkdS5pbiJ9LCJhY2NvdW50Ijp7ImJvdW5kYXJ5IjoiZ2xvYmFsIiwidmFsaWQiOnRydWUsImJzcyI6ImJlYTFjZmZmYTZhYzQyZjBhNGJiNGM4N2IxZjMzYjI3IiwiZnJvemVuIjp0cnVlfSwiaWF0IjoxNjI5ODc4NDA3LCJleHAiOjE2Mjk4ODIwMDcsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.crNGXMRkuIioYW-HA_FW__QFtPOOpVONLBOss9OcBiPMh7Xi0hIoNM44ZE8wzFEsisaf5zSvygFCfa8v091sHE2kzIimBWefSRZQIGNDdcWEO59V-BnC4--5X0lV8f5B2rMrYNlemOugEiUOwc01hG43SvrGWQWjKD-SsClLXZH5Hk0jweBuxCYT3iSNmbr-FqqWpBv7deC1KsJYBUcht7qZ08K4H5N_z9qlgv4yj-tKqFiEIwCuSG-X1mB53bQ6LzF_SS9zDS3XWk4mD6SlnxI_3jV0yUGODZ_kgdmo0dfXwbPRmjTSps5p7akCfrtaagL8CpGV-HxcaKNIDjbUZQ";
      console.log(mltoken);
      axios
        .post(URL + "/cors", payload_scoring)
        .then((res) => {
          console.log(res);
          console.log(ansMap[res.data[0]]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div className="container">
        {this.getInput()}
        <button onClick={this.handleSubmit}>Submit</button>
        <NotificationContainer />
      </div>
    );
  }
}

export default Crop_recommendation;
