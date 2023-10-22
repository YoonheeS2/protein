import React, { useState } from "react";
import styled from "styled-components";
import { SearchNormal } from "iconic-react";
import axios from "axios";

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 8px;
  margin-right: 14px;
  margin-left: 14px;
  min-width: 345px;
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
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const SearchInput = ({ onProductFound }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get("/api/v1/product/search", {
        params: {
          query: inputValue,
        },
      });

      if (
        response.data &&
        response.data.products &&
        response.data.products.length > 0
      ) {
        onProductFound(response.data.products[0]);
      }
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };

  return (
    <SearchInputWrapper>
      <IconWrapper>
        <SearchNormal size={20} />
      </IconWrapper>
      <Input
        type="text"
        placeholder="검색어를 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ArrowButton onClick={handleSearchClick}>검색</ArrowButton>
    </SearchInputWrapper>
  );
};

export default SearchInput;
