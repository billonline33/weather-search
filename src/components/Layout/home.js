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

        <div className="search-result">
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name111</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cities.map(item => {
                return <SearchResult cityInfo={item} key={item.id} />;
              })}
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
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
