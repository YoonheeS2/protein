import React from "react";
import { User } from "iconic-react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  width: 100%; // 원하는 너비로 조정하세요.
  margin-left: 20px;
  margin-right: 20px;
  height: 48px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 5px;
`;

// Iconic 아이콘을 스타일링하기 위한 스타일 컴포넌트
const Icon = styled(User)`
  margin-right: 5px;
  margin-left: 10px;
`;

const Text = styled.span`
  margin-left: 10px; /* 텍스트와 입력 필드 사이의 간격을 조정하세요. */
  font-size: 14px; /* 텍스트의 크기를 조정하세요. */
`;

const IconInput = ({ placeholder, rightSpan }) => {
  return (
    <InputContainer>
      <Icon size={20} color="#333" /> {/* 아이콘의 크기와 색상을 조정하세요. */}
      <Input type="text" placeholder={placeholder} />
      {rightSpan && <Text>오른쪽 텍스트</Text>}
    </InputContainer>
  );
};

export default IconInput;
