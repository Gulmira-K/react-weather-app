import React from "react";
import "./App.css";
import Search from "./Search";
import Description from "./Description";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Search />
      <br />
      <Description />
      <br />
      <Forecast />
    </div>
  );
}
