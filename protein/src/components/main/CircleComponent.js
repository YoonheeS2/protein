import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const ValueBlock = styled.div``;

const ValueText = styled.div``;

const CircleComponent = ({ color, value, valueText }) => {
  return (
    <div>
      <Circle color={color}></Circle>
      <ValueBlock>{value}</ValueBlock>
      <ValueText>{valueText}</ValueText>
    </div>
  );
};

export default CircleComponent;
