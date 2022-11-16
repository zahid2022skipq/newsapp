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
      newsType: "Apple",
    };
  }
  url = "";

  componentDidMount() {
    this.setState({
      country: "us",
      newsType: "Apple",
    });

    this.url = `https://newsapi.org/v2/everything?q=${this.state.newsType}&from=2022-11-16&sortBy=popularity&apiKey=5d6b97044eb6443c9029b9103e296eb1`;
  }

  options = [
    { value: "Apple", label: "Apple" },
    { value: "Cricket", label: "Cricket" },
    { value: "Finance", label: "Finance" },
    { value: "Politics", label: "Politics" },
  ];

  NewsSelect = () => {
    return (
      <Select
        options={this.options}
        isClearable
        defaultValue="Apple"
        onChange={(choice) => this.setState({ newsType: choice.value })}
      />
    );
  };

  render() {
    return (
      <div className="container text-center">
        <Navbar />
        <div className="my-3 select">
          <h4>Select News Type</h4>
          <this.NewsSelect />
          <p>{this.state.newsType}</p>
        </div>
        <News country={this.state.country} newsType={this.state.newsType} />
      </div>
    );
  }
}
