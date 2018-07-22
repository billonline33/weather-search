import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FormGroup, FormControl, Button, ControlLabel } from "react-bootstrap";
import SearchResult from "./searchResult";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      value: ""
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchClick() {
    console.log("Search clicked");
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    var paddingTop = {
      "padding-top": "13px"
    };

    return (
      <div>
        <div>
          <div>
            <FormGroup controlId="formBasicText">
              <ControlLabel className={"labelStyle"}>City Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <Button bsStyle="primary" onClick={this.handleSearchClick}>
                Search
              </Button>
            </FormGroup>
          </div>
        </div>
        <div>
          <SearchResult />
        </div>
      </div>
    );
  }
}

export default Home;
