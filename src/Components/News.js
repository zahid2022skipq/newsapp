import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=5d6b97044eb6443c9029b9103e296eb1" +
      `&page=${this.state.page}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handleNextPage = async () => {
    this.setState({
      page: this.state.page + 1,
      loading: true,
    });

    await this.componentDidMount();
  };

  handlePrevPage = async () => {
    this.setState({
      page: this.state.page - 1,
      loading: true,
    });

    await this.componentDidMount();
  };

  render() {
    return (
      <div className="container my-5">
        <h2>Top Headlines</h2>

        <div className="row my-4">
          {this.state.articles.map((news) => (
            <div key={news.url} className="col-md-4">
              <NewsItem
                title={news.title}
                description={news.description}
                imageURL={news.urlToImage}
              />
            </div>
          ))}
        </div>
        <div className="container my-5  d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextPage}
            disabled={this.state.page <= 1}
          >
            &#8592; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevPage}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}
