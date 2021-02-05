import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../headers/Header";
import Home from "../../containers/Home";
import History from "../pages/History";
import Help from "../pages/Help";

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/history"
              exact
              render={(routerProps) => <History {...routerProps} />}
            />
            <Route
              path="/help"
              exact
              render={(routerProps) => <Help {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
