import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import Search from "./components/pages/Search";
import Error from "./components/static/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="grid">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
