import React, { Component } from "react";
import loading from "../assets/7a8f8d634013568124e130728834d47a.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={loading}
          alt="Loading"
          height={500}
          width={1000}
          style={{ backgroundColor: "black" }}
        />
      </div>
    );
  }
}
