import React from "react";
import styled from "styled-components";
import { SearchNormal } from "iconic-react"; // 검색 아이콘 예시, 필요에 따라 아이콘을 변경하세요.

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; /* 배경색 설정 */
  border-radius: 10px; /* 둥근 테두리 설정 */
  padding: 8px; /* 여백 설정 */
  margin-right: 14px;
  margin-left: 14px;
  min-width: 345px; /* 필요한 크기로 조정하세요 */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
`;

const ArrowButton = styled.button`
  color: #000; /* 화살표 버튼 텍스트 색상 설정 */
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <IconWrapper>
        <SearchNormal size={20} /> {/* 검색 아이콘 */}
      </IconWrapper>
      <Input type="text" placeholder="검색어를 입력하세요" />
      <ArrowButton>취소</ArrowButton> {/* 화살표 버튼 */}
    </SearchInputWrapper>
  );
};

export default SearchInput;
