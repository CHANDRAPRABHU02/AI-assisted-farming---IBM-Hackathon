import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ReactComponent as InfoCircle } from "bootstrap-icons/icons/info-circle.svg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

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

const mnMxData = {
  pigeonpeas: [
    [0, 40],
    [55, 80],
    [15, 25],
    [18.31910448, 36.97794384],
    [30.40046769, 69.69141302],
    [4.548202098, 7.445444882999999],
    [90.05422663, 198.8298806],
  ],
  rice: [
    [60, 99],
    [35, 60],
    [35, 45],
    [20.0454142, 26.92995077],
    [80.12267476, 84.96907151],
    [5.005306977, 7.868474653],
    [182.5616319, 298.5601175],
  ],
  mungbean: [
    [0, 40],
    [35, 60],
    [15, 25],
    [27.01470397, 29.914544300000006],
    [80.03499648, 89.99615558],
    [6.218923893, 7.199495367999999],
    [36.12042927, 59.87232071],
  ],
  apple: [
    [0, 40],
    [120, 145],
    [195, 205],
    [21.0365275, 23.99686172],
    [90.02575116, 94.92048112],
    [5.514253142, 6.4992268210000015],
    [100.1173443, 124.9831618],
  ],
  maize: [
    [60, 100],
    [35, 60],
    [15, 25],
    [18.04185513, 26.54986394],
    [55.28220433, 74.82913698],
    [5.513697923, 6.995843776],
    [60.65171481, 109.7515385],
  ],
  banana: [
    [80, 120],
    [70, 95],
    [45, 55],
    [25.01018457, 29.90888522],
    [75.03193255, 84.97849241],
    [5.505393832999999, 6.490074429],
    [90.10978128, 119.84797],
  ],
  kidneybeans: [
    [0, 40],
    [55, 80],
    [15, 25],
    [15.33042636, 24.92360104],
    [18.09224048, 24.96969858],
    [5.502999119, 5.99812453],
    [60.27552528, 149.7441028],
  ],
  grapes: [
    [0, 40],
    [120, 145],
    [195, 205],
    [8.825674745, 41.94865736],
    [80.01639435, 83.98351748],
    [5.510924848999999, 6.499604931],
    [65.01095312, 74.91506217],
  ],
  muskmelon: [
    [80, 120],
    [5, 30],
    [45, 55],
    [27.02415146, 29.94349168],
    [90.01506395, 94.96218673],
    [6.002927293, 6.781050372999999],
    [20.21126747, 29.86681385],
  ],
  papaya: [
    [31, 70],
    [46, 70],
    [45, 55],
    [23.012401800000006, 43.67549305],
    [90.03863107, 94.94482086],
    [6.501521192, 6.993473247000001],
    [40.35153141, 248.8592986],
  ],
  watermelon: [
    [80, 120],
    [5, 30],
    [45, 55],
    [24.04355803, 26.98603693],
    [80.02621335, 89.98405233],
    [6.000975617000001, 6.956508826],
    [40.12650421, 59.75980023],
  ],
  lentil: [
    [0, 40],
    [55, 80],
    [15, 25],
    [18.06486101, 29.94413861],
    [60.09116626, 69.92375891],
    [5.91645379, 7.841496029],
    [35.03484812, 54.93937710000001],
  ],
  orange: [
    [0, 40],
    [5, 30],
    [5, 15],
    [10.01081312, 34.90665289],
    [90.00621688, 94.96419851],
    [6.010391864, 7.995848977],
    [100.1737964, 119.6946577],
  ],
  mothbeans: [
    [0, 40],
    [35, 60],
    [15, 25],
    [24.01825377, 31.99928579],
    [40.00933429, 64.95585424],
    [3.504752314, 9.93509073],
    [30.92014047, 74.44330654],
  ],
  coconut: [
    [0, 40],
    [5, 30],
    [25, 35],
    [25.00872392, 29.8690834],
    [90.01734526, 99.98187601],
    [5.50158009, 6.470465614],
    [131.09000759999998, 225.6323656],
  ],
  pomegranate: [
    [0, 40],
    [5, 30],
    [35, 45],
    [18.07132963, 24.96273236],
    [85.12912161, 94.99897537],
    [5.561851831, 7.199504273],
    [102.5184759, 112.4750941],
  ],
  mango: [
    [0, 40],
    [15, 40],
    [25, 35],
    [27.00315545, 35.99009679],
    [45.02236377, 54.9640534],
    [4.507523551, 6.9674177660000005],
    [89.29147581, 100.8124659],
  ],
  chickpea: [
    [20, 60],
    [55, 80],
    [75, 85],
    [17.02498456, 20.99502153],
    [14.25803981, 19.96978871],
    [5.988992796000002, 8.868741443],
    [65.11365631, 94.78189594],
  ],
  cotton: [
    [100, 140],
    [35, 60],
    [15, 25],
    [22.00085141, 25.99237426],
    [75.00539324, 84.87668973],
    [5.801047545, 7.994679507000001],
    [60.65381719, 99.93100821],
  ],
  coffee: [
    [80, 120],
    [15, 40],
    [25, 35],
    [23.05951896, 27.92374437],
    [50.04557009, 69.94807345],
    [6.020947179, 7.493191968],
    [115.1564012, 199.4735636],
  ],
  blackgram: [
    [20, 60],
    [55, 80],
    [15, 25],
    [25.09737391, 34.9466155],
    [60.06534859, 69.96100028],
    [6.500144962, 7.775306272000001],
    [60.41790253, 74.91559514],
  ],
  jute: [
    [60, 100],
    [35, 60],
    [35, 45],
    [23.09433785, 26.98582182],
    [70.88259632, 89.89106506],
    [6.002524871, 7.4880144039999985],
    [150.2355238, 199.83629130000003],
  ],
};
const crops = [
  "apple",
  "banana",
  "blackgram",
  "chickpea",
  "coconut",
  "coffee",
  "cotton",
  "grapes",
  "jute",
  "kidneybeans",
  "lentil",
  "maize",
  "mango",
  "mothbeans",
  "mungbean",
  "muskmelon",
  "orange",
  "papaya",
  "pigeonpeas",
  "pomegranate",
  "rice",
  "watermelon",
];

class SpecificComponent extends Component {
  state = {
    value: [null, null, null, null, null, null, null],
    result: "rice",
    submitted: false,
    data: ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"],
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
    if (this.validateInput() || false) {
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
            // values: [[90, 42, 43, 20.8, 82.0, 6, 202.9]],
            values: [this.state.value],
          },
        ],
      };
      this.setState({ submitted: true });
    }
  };
  handleResultChange = (value) => {
    console.log(value.target.value);
    this.setState({ result: value.target.value });
  };
  selectCrop = () => {
    return (
      <div className="container m-2">
        <select value={this.state.result} onChange={this.handleResultChange}>
          {crops.map((itr) => {
            return <option value={itr}>{itr}</option>;
          })}
          <option value="Radish">Radish</option>
          <option value="Cherry">Cherry</option>
        </select>
        <div className="row m-2">
          <div className="col">
            <strong>Factor</strong>
          </div>
          <div className="col">
            <strong>Minimum value</strong>
          </div>
          <div className="col">
            <strong>Maximum Value</strong>
          </div>
          <div className="col">
            <strong>value</strong>
          </div>
          <div className="col">
            <strong>Status</strong>
          </div>
        </div>
        {this.state.data.map((itr, ind) => {
          return (
            <div className="row m-2">
              <div className="col">{itr}</div>
              <div className="col" style={{ float: "right" }}>
                {mnMxData[this.state.result][ind][0].toFixed(2)}
              </div>
              <div className="col" style={{ float: "right" }}>
                {mnMxData[this.state.result][ind][1].toFixed(2)}
              </div>
              <div className="col">{this.state.value[ind]}</div>
              <div className="col">
                {mnMxData[this.state.result][ind][0] <= this.state.value[ind] &&
                mnMxData[this.state.result][ind][1] >= this.state.value[ind]
                  ? "Matched"
                  : "Not matched"}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="container">
        {!this.state.submitted ? this.getInput() : null}
        {!this.state.submitted ? (
          <div className="d-flex justify-content-center m-2">
            <button className="btn btn-info" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        ) : (
          this.selectCrop()
        )}
        <NotificationContainer />
      </div>
    );
  }
}

export default SpecificComponent;
