import React, { useState } from "react";
import styled from "styled-components";
import { Profile2User } from "iconic-react";

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0px;
  padding: 5px;
  border-radius: 5px;
  width: 100%; // 원하는 너비로 조정하세요.
  margin-left: 20px;
  margin-right: 20px;
  height: 48px;
  background: #f1f1f1;
`;

const IconGender = styled(Profile2User)`
  margin-right: 5px;
  margin-left: 10px;
`;

const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
  background: #f1f1f1;
`;

const Option = styled.option`
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 14px;
`;

const IconSelectBox = ({ onChange }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <SelectContainer>
      <IconGender></IconGender>
      <Select value={selectedGender} onChange={handleGenderChange}>
        <Option value="" disabled>
          성별 선택
        </Option>
        <Option value="female">여성</Option>
        <Option value="male">남성</Option>
      </Select>
    </SelectContainer>
  );
};

export default IconSelectBox;
