import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Select from "react-select";

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

  options = [
    { value: "us", label: "United States" },
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
    { value: "australia", label: "Australia" },
  ];

  NewsSelect = () => {
    return (
      <Select
        options={this.options}
        isClearable
        defaultValue="us"
        onChange={(choice) => this.setState({ country: choice.value })}
      />
    );
  };

  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <div className="my-3 select">
          <this.NewsSelect />
          <p>{this.state.country}</p>
        </div>
        <News country={this.state.country} />
      </div>
    );
  }
}
