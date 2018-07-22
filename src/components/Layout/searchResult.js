import React, { Component } from "react";
import { history } from "../../store";
import { withRouter } from "react-router";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.fetchWeatherDetails = this.fetchWeatherDetails.bind(this);
  }

  fetchWeatherDetails(e) {
    const cityInfo = e.currentTarget.getAttribute("data-item");
    this.props.history.push("/location");
  }

  render() {
    const cityInfo = this.props.cityInfo;
    console.log("key2=", this.props.key2);
    return (
      <tr
        key={this.props.key2}
        data-item={cityInfo.woeid}
        onClick={this.fetchWeatherDetails}
      >
        <td>{this.props.key2}</td>
        <td>{cityInfo.title}</td>
        <td>{cityInfo.location_type}</td>
        <td>{cityInfo.latt_long}</td>
      </tr>
    );
  }
}

export default withRouter(SearchResult);
