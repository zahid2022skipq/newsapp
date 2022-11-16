import "./App.css";
import reactSelect from "react-select";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Select from "react-select/dist/declarations/src/Select";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "us",
    };
  }

  options = [
    { value: "us", label: "United States" },
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
    { value: "australia", label: "Australia" },
  ];

  NewsSelect = () => {
    return <Select options={this.options} />;
  };

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
