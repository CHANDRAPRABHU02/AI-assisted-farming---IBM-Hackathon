import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Crop_recommendation from "./crop_recommendation";
import Homepage from "./homepage";
import Navbar from "./navbar";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid">
          <Route path="/" exact component={Homepage} />
          <Route
            path="/crop_recommendation"
            exact
            component={Crop_recommendation}
          />
        </div>
      </Router>
    );
  }
}

export default App;
