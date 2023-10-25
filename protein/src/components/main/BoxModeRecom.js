import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecommendedMeal from "../data/RecommendedMeal.json";

const BoxIngredientWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 179px;
  height: 60px;
  border-radius: 4px;
  border: 1px solid #a3b6f7;
  margin-right: 7px;
  padding-left: 10px;
`;

const RecomMain = styled.span`
  color: #345a99;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Recomvalue = styled.span`
  color: #464646;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

const RecomImage = styled.img`
  width: 40px;
`;
const BoxModeRecom = () => {
  const [data, setData] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);

  //   const getStaduimInfoList = () => {
  //     axios.get('RecommendedMeal')
  //         .then((response) => {
  //             console.log(response);
  //         })
  // }
  useEffect(() => {
    // 서버에서 사용자 데이터를 가져옵니다.
    axios.get("/api/v1/user/22").then((userResponse) => {
      const userMode = userResponse.data.mode;
      setSelectedMode(userMode);

      const filteredData = RecommendedMeal.data.filter(
        (item) => item.mode === userMode
      );
      setData(filteredData);
    });
    console.log(setData);
  }, []);

  return (
    <BoxIngredientWrap>
      {data.map((item, index) => (
        <Box key={index}>
          <RecomImage src={item.image} alt={item.food}></RecomImage>
          <RecomMain>{item.mode}</RecomMain>
          <Recomvalue>{item.food}</Recomvalue>
        </Box>
      ))}
    </BoxIngredientWrap>
  );
};

export default BoxModeRecom;
