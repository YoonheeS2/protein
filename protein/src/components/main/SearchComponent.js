import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #d1e1fb;
  border-radius: 5px;
  width: 100%; // 원하는 너비로 조정하세요.
  min-width: 270px;
  height: 300px;
  background-color: white;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 5px;
  background-color: #d1e1fb;
`;

const BoxButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 5px;
  background-color: #d1e1fb;
`;

const BoxContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: solid 1px #d1e1fb;
  outline: none;
  display: flex;
  height: 30px;
  width: 100%;
  padding: 5px;
  background: white;
`;

const Text = styled.span`
  font-size: 14px; /* 텍스트의 크기를 조정하세요. */
  font-weight: bold;
`;

const SearchResultBox = styled.button`
  width: 100%;
  cursor: pointer; // 포인터 커서를 추가하여 클릭 가능한 것임을 나타냅니다.
`;

const SearchResult = styled.span`
  cursor: pointer; // 포인터 커서를 추가하여 클릭 가능한 것임을 나타냅니다.
`;

const SearchComponent = ({ placeholder, setResult }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResult] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleTransferButton = () => {
    const requestOption = {
      url: "/api/v1/product/search",
      method: "POST",
      data: {
        productName: searchText,
      },
    };
    axios(requestOption).then((response) => {
      console.log(response.data);
      setSearchResult(response.data);
      setResult(response.data);
      setIsOpen(true);
    });
  };

  const handleChange = (e) => {
    //첫번째 인자 e
    // 우리가 원하는 인풋에 값은 e.target.value
    // console.log(e.target.value);
    const { value } = e.target;
    setSearchText(value);
  };
  

  const closeModal = () => {
    setIsOpen(false); // 팝업 닫기
  };

  return (
    <InputContainer>
      <BoxContainer>
        <Box>
          <Text>제품</Text>
        </Box>
        {/* INPUT 에서 입력받은 값을 handleChange 를 통해 전달 */}
        <Input type="text" onChange={handleChange} placeholder={placeholder} />
        <BoxButton onClick={handleTransferButton}>
          <Text>전송</Text>
        </BoxButton>
      </BoxContainer>
      {modalIsOpen && (
        <SearchResultBox onClick={closeModal}>
          <SearchResult>
            {searchResults && <p>{searchResults.result.productName}</p>}
          </SearchResult>
        </SearchResultBox>
      )}
    </InputContainer>
  );
};

export default SearchComponent;
