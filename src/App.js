import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container text-center">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News country="us" category="general" />}
            />
            <Route
              path="/business"
              element={<News country="us" category="business" />}
            />
            <Route
              path="/entertainment"
              element={<News country="us" category="entertainment" />}
            />
            <Route
              path="/health"
              element={<News country="us" category="health" />}
            />
            <Route
              path="/science"
              element={<News country="us" category="science" />}
            />
            <Route
              path="/sports"
              element={<News country="us" category="sports" />}
            />
            <Route
              path="/technology"
              element={<News country="us" category="technology" />}
            />
            <Route
              path="/general"
              element={<News country="us" category="general" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
