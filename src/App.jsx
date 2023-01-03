import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";

function App() {
  return (
    <div className="grid">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
