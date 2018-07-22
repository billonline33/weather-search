import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { FormGroup, FormControl, Button, ControlLabel } from "react-bootstrap";
import SearchResult from "./searchResult";
import { searchCity } from "../../reducers/homeReducer";
import { Table } from "react-bootstrap";

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
        <div className="search-header">
          <FormGroup controlId="formBasicText">
            <div className="floatLeft">
              <ControlLabel className={"labelStyle"}>City Name</ControlLabel>
            </div>

            <div className="floatLeft search-box">
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
            </div>
            <div className="floatLeft search-button">
              <Button bsStyle="primary" onClick={this.handleSearchClick}>
                Search
              </Button>
            </div>
            <div>&nbsp;</div>
          </FormGroup>
        </div>

        <div className="search-result">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Latt and Long</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cities.map((item, index) => {
                console.log("index=", index);
                console.log("woeid=", item.woeid);
                return <SearchResult cityInfo={item} key2={index} />;
              })}
            </tbody>
          </Table>;
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchCity }, dispatch);

const mapStateToProps = state => ({
  cities: state.homeReducer.cities
});

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default Home;
