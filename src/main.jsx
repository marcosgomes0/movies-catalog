import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Search from "./components/pages/Search";
import Error404 from "./components/static/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
