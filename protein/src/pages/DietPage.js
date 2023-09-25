import React from "react";
import AppHeader from "../components/common/AppHeader";
import DietCalendar from "../components/diet/DietCalendar";
import styled from "styled-components";
import WeekSelector from "../components/diet/WeekSelector";
import IndividualInfo from "../components/diet/IndividualInfo";

const DietContainer = styled.div`
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid #f2f2f2;
`;

const DietPage = () => {
  return (
    <div>
      <AppHeader title={"PROTEIN BODY"} backButton={true}></AppHeader>
      <DietContainer>
        <DietCalendar></DietCalendar>
      </DietContainer>
      <WeekSelector></WeekSelector>
      <IndividualInfo title={"아침"} calories={200} meals={2}></IndividualInfo>
    </div>
  );
};

export default DietPage;
