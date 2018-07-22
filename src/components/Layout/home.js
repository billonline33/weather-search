import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FormGroup, FormControl, Button, ControlLabel } from "react-bootstrap";
import SearchResult from "./searchResult";
import { searchCity } from "../../reducers/homeReducer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearchClick() {
    console.log("Search clicked");
    this.props.searchCity(this.state.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchCity }, dispatch);

Home = connect(
  null,
  mapDispatchToProps
)(Home);

export default Home;
