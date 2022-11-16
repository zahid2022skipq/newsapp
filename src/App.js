import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <div className="my-3 select">
          <h4>Select News Type</h4>
          <this.NewsSelect />
          <p>{this.state.newsType}</p>
        </div>
        <News />
      </div>
    );
  }
}
