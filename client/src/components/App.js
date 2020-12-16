import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AddBook from "./books/AddBook";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/books" component={AddBook} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
