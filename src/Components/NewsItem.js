import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL } = this.props;
    return (
      <div className="my-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={`${imageURL}`} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title.substring(0, 50) + "..."}</h5>
            <p className="card-text">{description.substring(0, 200) + "..."}</p>
            <a href="/" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
