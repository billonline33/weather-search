import React, { Component } from "react";
import { history } from "../../store";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

class Location1 extends Component {
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
        <div>
          <span>Max</span>
          <span>24C</span>
        </div>
        <div>
          <span>Min</span>
          <span>16C</span>
        </div>
        <div>
          <span>Humidity</span>
          <span>56%</span>
        </div>
        <div>
          <span>Visibility</span>
          <span>10.3 miles</span>
        </div>
        <div>
          <span>Pressure</span>
          <span>1018mb</span>
        </div>
        <div>
          <span>Confidence</span>
          <span>73%</span>
        </div>
        <div>
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

export default withRouter(Location1);
