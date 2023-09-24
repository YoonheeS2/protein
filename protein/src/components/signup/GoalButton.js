import React from "react";
import styled from "styled-components";

const Backgroud = styled.button`
  display: flex;
  height: 100px;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 15px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #7b6f72;
`;

const GoalButton = () => {
  return (
    <Backgroud>
      <Title>일반모드</Title>
      <Description>
        특별 관리가 필요한 사람이 아닌 건강한 사람의 균형 잡힌 식단모드에요{" "}
      </Description>
    </Backgroud>
  );
};

export default GoalButton;
