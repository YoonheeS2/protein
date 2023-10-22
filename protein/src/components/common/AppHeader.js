import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Add } from "iconic-react";

const HeaderWrapper = styled.header`
  background-color: #fff;
  color: #000;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #f2f2f2;
`;

const BackButton = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
`;

const DietAddbutton = styled(Add)``;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const AppHeader = ({ backButton, title, type, addEvent }) => {
  return (
    <HeaderWrapper>
      {/* {backButton && <BackButton to={backButton}>뒤로</BackButton>} */}
      <Title>{title}</Title>
      {type === "diet" && (
        <DietAddbutton size={20} onClick={addEvent}>
          아이콘
        </DietAddbutton>
      )}
    </HeaderWrapper>
  );
};

export default AppHeader;
