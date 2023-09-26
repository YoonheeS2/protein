import React from "react";
import styled from "styled-components";
import { ArrowRight2 } from "iconic-react";

const BasicButton = styled.button`
  display: flex;
  height: 60px;
  width: 315px;
  border-radius: 48px;
  background-color: #a0bbff;
  padding: 10px 20px;
  border: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const IconNext = styled(ArrowRight2)`
  margin-right: 5px;
  margin-left: 10px;
  color: #ffffff; //흰색으로 지정 어떻게 하나요?
  fill: none;
`;

export const SelectedIcon = ({ icontype }) => {
  console.log(icontype);
  if (icontype === "ArrowRight2") {
    return (
      <IconNext size={20} color="#fff">
        아이콘
      </IconNext>
    );
  }
};

const ButtonComponent = ({ icontype, text }) => {
  return (
    <BasicButton>
      <Text>{text}</Text>
      <SelectedIcon icontype={icontype}></SelectedIcon>
    </BasicButton>
  );
};

export default ButtonComponent;
