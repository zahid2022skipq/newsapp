import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url, newsTime } = this.props;
    return (
      <div className="my-2">
        <div className="card">
          <img
            src={
              imageURL
                ? `${imageURL}`
                : "https://scx2.b-cdn.net/gfx/news/hires/2022/powerful-linear-accele.jpg"
            }
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title.substring(0, 50) + "..." : ""}
            </h5>
            <p className="card-text">
              <small className="text-muted">
                Last updated {Date(newsTime)} mins ago
              </small>
            </p>
            <p className="card-text">
              {description ? description.substring(0, 100) + "..." : ""}
            </p>
            <a
              rel="noreferrer"
              target="_blank"
              href={url}
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
