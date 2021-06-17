import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddItem from "./components/AddItem.Component";
import Item from "./components/Item.Component";
import ItemsList from "./components/ItemsList.Component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/Items" className="navbar-brand">
              Treasure Finder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/Items"} className="nav-link">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add Item
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/Items"]} component={ItemsList} />
              <Route exact path="/add" component={AddItem} />
              <Route path="/Items/:id" component={Item} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
