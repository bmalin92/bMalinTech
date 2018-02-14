import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutMe from "./components/pages/AboutMe";

import "./App.css";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/about" exact component={AboutMe} />
  </div>
);

export default App;
