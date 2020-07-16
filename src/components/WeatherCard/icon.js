import React from "react";
import styled from "@emotion/styled";

const icon = (props) => {
  const Icon = styled.img`
    width: 60%;
  `;
  return <Icon className="icon" src="./img/cloudy.png" alt="Weather Icon" />;
};

export default icon;
