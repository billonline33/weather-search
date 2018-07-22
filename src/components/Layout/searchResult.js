import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

class SearchResult extends Component {
  render() {
    const cityInfo = this.props.cityInfo;
    return (
      <tr>
        <td>2</td>
        <td>{cityInfo.title}</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
    );
  }
}

export default SearchResult;
