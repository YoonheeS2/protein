import React from "react";
import styled from "styled-components";
import WeekElement from "./WeekElement";

const WeekSelectTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const LeftArrow = styled.div`
  margin-right: 30px;
`;

const RightArrow = styled.div`
  margin-left: 30px;
`;

const WeekSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const WeekSelector = () => {
  let weekMonth = "May";
  let year = "2023";

  let weekContentsArrayExample = [
    {
      dayName: "Mon",
      day: 13,
    },
    {
      dayName: "Mon",
      day: 14,
    },
    {
      dayName: "Mon",
      day: 15,
    },
    {
      dayName: "Mon",
      day: 16,
    },
    {
      dayName: "Mon",
      day: 17,
    },
    {
      dayName: "Mon",
      day: 18,
    },
    {
      dayName: "Mon",
      day: 19,
    },
  ];

  return (
    <div>
      <WeekSelectTitle>
        <LeftArrow>{"<"}</LeftArrow> {weekMonth} {year}
        <RightArrow>{">"}</RightArrow>
      </WeekSelectTitle>
      <WeekSelectorContainer>
        {weekContentsArrayExample.map((ele) => {
          return (
            <WeekElement dayName={ele.dayName} day={ele.day}></WeekElement>
          );
        })}
      </WeekSelectorContainer>
    </div>
  );
};

export default WeekSelector;
