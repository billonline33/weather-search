import React, { Component } from "react";
import "./App.css";
import Home from "./components/Layout/home";
import Location from "./components/Layout/location";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store, { history } from "./store";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/location" component={Location} />
        </div>
      </Router>
    );
  }
}

export default App;
