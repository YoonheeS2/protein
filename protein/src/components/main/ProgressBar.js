import React from "react";
import styled from "styled-components";

// 스타일을 정의합니다.
const ProgressBarWrapper = styled.div`
  max-width: 368px;
  width: 100%;
  height: 36px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #e7eaf2 0%,
    #f2f5ff 0.01%,
    #1a73e9 105.44%
  );
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;

// 프로그레스 바 컴포넌트를 정의합니다.
const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill progress={progress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
