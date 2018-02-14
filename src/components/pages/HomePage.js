import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/about">About Me</Link>
  </div>
);

export default HomePage;
