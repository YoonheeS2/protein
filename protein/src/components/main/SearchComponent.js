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

const SearchComponent = ({ placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResult] = useState([]);
  const handleTransferButton = () => {
    let requestOption = {
      url: "/api/v1/product/search",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
    // axios(requestOption).then((data) => {
    //   console.log(data.data);
    // });
    axios(requestOption).then((response) => {
      console.log(response.data);
      setSearchResult(response.data);
    });
  };

  const handleChange = (e) => {
    //첫번째 인자 e
    // 우리가 원하는 인풋에 값은 e.target.value
    console.log(e.target.value);
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <InputContainer>
      <BoxContainer>
        <Box>
          <Text>제품</Text>
        </Box>
        {/* INPUT 에서 입력받은 값을 handleChange 를 통해 전달 */}
        <Input type="text" onChange={handleChange} placeholder={placeholder} />
        <button onClick={handleTransferButton}>전송</button>
      </BoxContainer>
      {searchResults.map((result) => {
        return <p>{result.productName}</p>;
      })}
    </InputContainer>
  );
};

export default SearchComponent;
