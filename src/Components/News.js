import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?" +
      "q=Apple&" +
      "from=2022-11-15&" +
      "sortBy=popularity&" +
      "apiKey=5d6b97044eb6443c9029b9103e296eb1";
    +`&page=${this.state.page}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

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
        <div className="row my-5"></div>
      </div>
    );
  }
}
