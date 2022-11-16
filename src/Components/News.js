import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    this.setState({ loading: true });

    let url =
      "https://newsapi.org/v2/top-headlines?" +
      `country=us&` +
      "apiKey=5d6b97044eb6443c9029b9103e296eb1" +
      `&page=${this.state.page}` +
      "&pageSize=8";

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextPage = async () => {
    if (!(this.state.page + 1 >= Math.ceil(this.state.totalResults / 9))) {
      this.setState({ loading: true });
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        `country=us&` +
        "apiKey=5d6b97044eb6443c9029b9103e296eb1" +
        `&page=${this.state.page + 1}` +
        "&pageSize=8";

      let data = await fetch(url);

      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrevPage = async () => {
    if (!(this.state.page + 1 >= Math.ceil(this.state.totalResults / 9))) {
      this.setState({ loading: true });
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        `country=us&` +
        "apiKey=5d6b97044eb6443c9029b9103e296eb1" +
        `&page=${this.state.page - 1}` +
        "&pageSize=8";

      let data = await fetch(url);

      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-2 p-2">
        <h2 className="text-center">Top Headlines</h2>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row my-4">
              {this.state.articles.map((news) => (
                <div key={news.url} className="col-md-3">
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
                onClick={this.handlePrevPage}
                disabled={this.state.page <= 1}
              >
                &#8592; Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleNextPage}
                disabled={
                  this.state.page + 1 >= Math.ceil(this.state.totalResults / 9)
                }
              >
                Next &#8594;
              </button>
            </div>{" "}
          </>
        )}
      </div>
    );
  }
}
