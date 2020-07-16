import React from "react";
import styled from "@emotion/styled";

const condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;
  const Cond = styled.h3`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.1rem;
  `;
  return (
    <>
      <Temp>20 C</Temp>
      <Cond>Cloudy</Cond>
    </>
  );
};

export default condition;
