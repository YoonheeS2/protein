import React from "react";
import styled from "styled-components";

const Background = styled.button`
  display: flex;
  width: 95%; // 원하는 너비로 조정하세요.
  min-width: 340px;
  height: 100px;
  border: 0px;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 15px;
  text-align: left;
  justify-content: center;
  margin: 10px;
  -webkit-box-shadow: 11px 6px 22px 0px rgba(0.1, 0.1, 0.1, 0.1);
  box-shadow: 11px 6px 22px 0px rgba(0.1, 0.1, 0.1, 0.1);
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #7b6f72;
`;

const GoalButton = ({ title, description }) => {
  return (
    <Background>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Background>
  );
};

export default GoalButton;
