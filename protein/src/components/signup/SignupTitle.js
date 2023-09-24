import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const MainTitle = styled.div`
  font-size: 20px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 11px;
`;

const SignupTitle = ({ title, description }) => {
  return (
    <Block>
      <MainTitle>{title}</MainTitle>
      <Description>{description}</Description>
    </Block>
  );
};

export default SignupTitle;
