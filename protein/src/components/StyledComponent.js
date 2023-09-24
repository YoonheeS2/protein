import React from "react";
import styled from "styled-components";
import GoalButton from "./signup/GoalButton";
import SignupTitle from "./signup/SignupTitle";

const MyStyle = styled.div`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const StyledComponent = () => {
  return (
    <div>
      <SignupTitle
        title={"당신의 목표는 무엇입니까?"}
        description={"당신에게 가장 적합한 프로그램을 선택해 봅시다!"}
      ></SignupTitle>
      <GoalButton></GoalButton>
    </div>
  );
};

export default StyledComponent;
