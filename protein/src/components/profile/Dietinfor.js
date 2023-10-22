import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  margin: 30px 20px;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between; // 중앙 정렬
  margin-bottom: 10px;
`;

const InputLabel = styled.span`
  margin-right: 10px;
`;

const InputField = styled.input`
  text-align: center; // 입력 필드의 텍스트를 중앙에 배치
  width: 70%; // 입력 필드의 너비 지정
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 10px;
`;

const Dietinfor = ({ profileData }) => {
  console.log(profileData);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  };

  const handleSaveClick = () => {};

  const changeValue = (value) => {
    if (value === "NORMAL") {
      return "일반모드";
    }
  };
  // componentDidMount와 같은 효과로, 컴포넌트가 마운트될 때 한번만 실행됩니다.

  return (
    <Container>
      <EditButton onClick={handleSaveClick}>저장</EditButton>
      <SectionTitle>내 식단정보</SectionTitle>
      <InputRow>
        <InputLabel>식단 :</InputLabel>
        <InputField
          type="text"
          placeholder="식단 카테고리 입력"
          name="category"
          value={changeValue(profileData.result.mode)}
          onChange={handleInputChange}
        />
      </InputRow>
      <InputRow>
        <InputLabel>키:</InputLabel>
        <InputField
          type="text"
          placeholder="키 입력"
          name="height"
          value={`${profileData.result.height} cm`}
          onChange={handleInputChange}
        />
      </InputRow>
      <InputRow>
        <InputLabel>몸무게:</InputLabel>
        <InputField
          type="text"
          placeholder="몸무게 입력"
          name="weight"
          value={`${profileData.result.weight} kg`}
          onChange={handleInputChange}
        />
      </InputRow>
      <InputRow>
        <InputLabel>목표체중:</InputLabel>
        <InputField
          type="text"
          placeholder="목표체중 입력"
          name="targetWeight"
          value={`${profileData.result.goalWeight} kg`}
          onChange={handleInputChange}
        />
      </InputRow>
    </Container>
  );
};

export default Dietinfor;
