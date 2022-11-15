import React, { Component } from "react";
import loading from "../assets/0_ptDX0HfJCYpo9Pcs.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading" height={200} width={250} />
      </div>
    );
  }
}
