import React from "react";
import { Link } from "react-router-dom";
import IMG13 from "../assets/IMG13.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${IMG13})` }}>
      <div className="headerContainer">
        <h1> NORAS's Ice Cream </h1>
        <p> ICE CREAM FOR BETTER LYF</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
