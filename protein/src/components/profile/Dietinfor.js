import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
  margin: 30px 20px;
  position: relative; /* 부모 컨테이너를 기준으로 자식을 배치하기 위해 position 속성 추가 */
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  margin-bottom: 10px;
`;

const InputLabel = styled.span`
  margin-right: 10px;
`;

const EditButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-left: 10px;
`;

const Dietinfor = () => {
  return (
    <Container>
      <EditButton>수정</EditButton>
      <SectionTitle>내 식단정보</SectionTitle>
      <InputRow>
        <InputLabel>식단 카테고리:</InputLabel>
        <input type="text" placeholder="식단 카테고리 입력" />
      </InputRow>
      <InputRow>
        <InputLabel>키:</InputLabel>
        <input type="text" placeholder="키 입력" />
      </InputRow>
      <InputRow>
        <InputLabel>몸무게:</InputLabel>
        <input type="text" placeholder="몸무게 입력" />
      </InputRow>
      <InputRow>
        <InputLabel>목표체중:</InputLabel>
        <input type="text" placeholder="목표체중 입력" />
      </InputRow>
    </Container>
  );
};

export default Dietinfor;

