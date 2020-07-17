import React from "react";
import "./App.css";

import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={45} />
      <WeatherCard temp={25} />
      <WeatherCard temp={10} />
      <WeatherCard temp={-1} />
      <WeatherCard temp={-25} />
    </div>
  );
}

export default App;
