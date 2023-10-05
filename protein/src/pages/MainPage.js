import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import TipBox from "../components/main/TipBox";
import ProgressBar from "../components/main/ProgressBar";
import axios from "axios";
import styled from "styled-components";
import RecommendedCalories from "../components/main/RecommendedCalories";
import CircleComponent from "../components/main/CircleComponent";
import LineComponent from "../components/main/LineComponent";


const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CircleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const MainPage = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    getMainPageData();
  }, []);

  const getMainPageData = () => {
    axios.get("/api/v1/meal/log/summary").then((response) => {
      console.log(response.data);
      let percentFromServer =
        (response.data.calories / response.data.recomandedCalories) * 100;
      setPercent(percentFromServer);
    });
  };

  return (
    <PageBlock>
      <AppHeader title={"PROTEIN BODY"}></AppHeader>
      <TipBox text={"수분을 많이 섭취하면 포만감을 유지하기 좋아요!"}></TipBox>
      <ProgressBar progress={percent}></ProgressBar>
      <div style={{ marginLeft: "auto" }}>
        <RecommendedCalories
          eatendata={"0"}
          recomdata={"2000"}
        ></RecommendedCalories></div>
        <CircleLine>
          <CircleComponent color="#1A73E9"/><LineComponent/>
          <CircleComponent color="#1A73E9"/><LineComponent/>
          <CircleComponent color="#C8DDFA"/></CircleLine>
    </PageBlock>
  );
};

export default MainPage;
