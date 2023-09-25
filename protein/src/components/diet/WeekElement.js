import React from "react";
import styled from "styled-components";

const WeekElementRect = styled.div`
    padding : 10px 10px 10px 10px;
    width : 14.28%
    height : 57px;
    background : #F2F5FF;
    text-align : center;
    margin : 2px;
`;

const WeekElement = ({ dayName, day }) => {
  return (
    <WeekElementRect>
      {dayName}
      <br />
      {day}
    </WeekElementRect>
  );
};

export default WeekElement;
