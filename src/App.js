import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "us",
    };
  }

  componentDidMount() {
    this.setState({
      country: "us",
    });
  }

  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <News country={this.state.country} />
      </div>
    );
  }
}
