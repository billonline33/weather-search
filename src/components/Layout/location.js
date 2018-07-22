import React, { Component } from "react";
import { history } from "../../store";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Location extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleBackButtonClick() {
    this.props.history.push("/");
  }

  render() {
    const weather = this.props.weather;
    const loading = "loading...";
    console.log("weather111=", weather);
    return (
      <div>
        <h2>Today {this.props.city == null ? "" : this.props.city}</h2>
        <div className="weather-line">
          <span className="label-text">Max</span>
          <span className="info-text">
            {weather == null ? loading : weather[0].max_temp.toFixed(0)}
          </span>
          <span>°C</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Min</span>
          <span className="info-text">
            {" "}
            {weather == null ? loading : weather[0].min_temp.toFixed(0)}
          </span>
          <span>°C</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Humidity</span>
          <span className="info-text">
            {" "}
            {weather == null ? loading : weather[0].humidity.toFixed(3)}
          </span>
          <span>%</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Visibility</span>
          <span className="info-text">
            {" "}
            {weather == null ? loading : weather[0].visibility.toFixed(1)}
          </span>
          <span>miles</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Pressure</span>
          <span className="info-text">
            {" "}
            {weather == null ? loading : weather[0].air_pressure.toFixed(0)}
          </span>
          <span>mb</span>
        </div>
        <div className="weather-line">
          <span className="label-text">Confidence</span>
          <span className="info-text">
            {" "}
            {weather == null ? loading : weather[0].predictability.toFixed(0)}
          </span>
          <span>%</span>
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

const mapStateToProps = state => ({
  weather: state.homeReducer.weather,
  city: state.homeReducer.city
});

Location = connect(
  mapStateToProps,
  null
)(Location);

export default withRouter(Location);
