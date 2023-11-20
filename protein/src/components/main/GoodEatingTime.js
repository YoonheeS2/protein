import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #d1e1fb;
  border-radius: 5px;
  width: 100%;
  min-width: 270px;
  height: 220px;
  background-color: white;
`;

const Title = styled.span`
color: #5F89F5;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: 24px; /* 120% */
margin: 28px 0px 0px 20px;
`

const Text = styled.span`
color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
margin: 18px 0px 0px 20px`


const GoodEatingTime = ({ onClose }) => {
  return (
  <Container onClose={onClose}>
    <Title>건강한 식습관 시간대</Title>
    <Text>아침 : 6시 ~ 8시30분</Text>
    <Text>점심 : 12시 ~ 14시30분</Text>
    <Text>저녁 : 17시 ~ 19시30분</Text>
  </Container>)
};

export default GoodEatingTime;
