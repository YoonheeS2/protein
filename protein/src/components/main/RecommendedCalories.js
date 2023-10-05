import React from "react";
import styled from "styled-components";

const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;

const RecomCalories = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
  font-family: ABeeZee;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
  font-family: ABeeZee;
  margin: 0px 3px 0px 3px;
`;

const EatenCalories = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #22215b;
  font-family: ABeeZee;
`;

const RecommendedCalories = ({ eatendata, recomdata }) => {
  return (
    <CaloriesContainer>
      <EatenCalories>{eatendata}</EatenCalories>
      <Text>/</Text>
      <RecomCalories>{recomdata}</RecomCalories>
      <Text>kcal</Text>
    </CaloriesContainer>
  );
};

export default RecommendedCalories;
