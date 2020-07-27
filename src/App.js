import React from "react";
import "./App.css";

import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={45} condition="Clear" />
      <WeatherCard temp={25} condition="Clouds" />
      <WeatherCard temp={10} condition="Haze" />
      <WeatherCard temp={-1} condition="Clear" />
      <WeatherCard temp={-25} condition="Clear" />
    </div>
  );
}

export default App;
