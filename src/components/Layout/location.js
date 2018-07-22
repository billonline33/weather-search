import React, { Component } from "react";
import { history } from "../../store";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

class Location extends Component {
  constructor(props) {
    super(props);

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleBackButtonClick() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h2>Today</h2>
        <div className="weather-line">
          <span className="label-text">Max</span>
          <span className="info-text">24C</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Min</span>
          <span className="info-text">16C</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Humidity</span>
          <span className="info-text">56%</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Visibility</span>
          <span className="info-text">10.3 miles</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Pressure</span>
          <span className="info-text">1018mb</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Confidence</span>
          <span className="info-text">73%</span>
        </div>
        <div className="weather-line">
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.handleBackButtonClick}
          >
            Back
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Location);
