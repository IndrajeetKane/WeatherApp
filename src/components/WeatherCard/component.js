import React from "react";
import styled from "@emotion/styled";

import Location from "./location";
import Icon from "./icon";
import Condition from "./condition";

const WeatherCard = ({ temp, condition }) => {
  let bg = null;
  if (temp >= 35) {
    let highColor = (1 - (temp - 35) / 15) * 255;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${highColor - 150}, 0)
    )`;
  } else if (temp >= 20) {
    let highColor = ((temp - 20) / 15) * 255;
    bg = `linear-gradient(
      to top,
      rgb(${highColor},255, 0),
      rgb(${highColor + 150},255, 0)
    )`;
  } else if (temp >= 5) {
    let highColor = (1 - (temp - 20) / 15) * 255;
    bg = `linear-gradient(
      to top,
      rgb(0,255,${highColor}),
      rgb(0,255,${highColor - 150})
    )`;
  } else {
    let highColor = ((temp + 20) / 25) * 255;
    bg = `linear-gradient(
      to top,
      rgb(0,${highColor}, 255),
      rgb(0,${highColor + 100}, 255)
    )`;
  }
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location></Location>
      <Icon condition={condition}></Icon>
      <Condition temp={temp} condition={condition}></Condition>
    </Card>
  );
};

export default WeatherCard;
