import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import TipBox from "../components/main/TipBox";
import ProgressBar from "../components/main/ProgressBar";
import axios from "axios";
import styled from "styled-components";
import RecommendedCalories from "../components/main/RecommendedCalories";
import CircleComponent from "../components/main/CircleComponent";
import Modal from "react-modal";
import SearchPopup from "../components/main/SearchPopup";
import Recommened from "../components/main/Recommened";
import SearchComponent from "../components/main/SearchComponent";
import SearchButton from "../components/main/SearchButton";
import SearchText from "../components/main/SearchText";
import BoxIngredient from "../components/main/BoxIngredient";
import ModeRecomText from "../components/main/ModeRecomText";
import BoxModeRecom from "../components/main/BoxModeRecom";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 75px;
  height: 2px;
  background-color: #1a73e9;
`;

const CircleLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const BoxIngredientWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const RecomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MainPage = () => {
  const [percent, setPercent] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [calories, setCalories] = useState(0);
  const [recpcalories, setRecoCalories] = useState(0);
  const [circleColor, setCirlcleColor] = useState("#C8DDFA");

  useEffect(() => {
    getMainPageData();
  }, []);

  const handleModalButton = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const getMainPageData = () => {
    axios.get("/api/v1/meal/log/summary/today/1").then((response) => {
      setCalories(response.data.calories);
      setRecoCalories(response.data.recomandedCalories);
      let percentFromServer =
        (response.data.calories / response.data.recomandedCalories) * 100;
      console.log(percentFromServer);
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
          eaten={calories}
          recom={recpcalories}
        ></RecommendedCalories>
      </div>
      <CircleLine>
        <CircleComponent color="#1A73E9" />
        <Line />
        <CircleComponent color="#1A73E9" />
        <Line />
        <CircleComponent color="#C8DDFA" />
      </CircleLine>
      <RecomContainer>
        <Recommened value="100" name="단백질"></Recommened>
        <Recommened value="100" name="단백질"></Recommened>
        <Recommened value="100" name="단백질"></Recommened>
      </RecomContainer>
      <SearchContainer>
        <SearchText name={"딸기 샌드위치"}></SearchText>
        <SearchButton onClick={handleModalButton} />
        {modalIsOpen && (
          <SearchPopup isOpen={modalIsOpen} onClose={closeModal} />
        )}
      </SearchContainer>
      <BoxIngredientWrap>
        <BoxIngredient name={"단백질"} value={"100g"}></BoxIngredient>
        <BoxIngredient name={"단백질"} value={"100g"}></BoxIngredient>
        <BoxIngredient name={"단백질"} value={"100g"}></BoxIngredient>
        <BoxIngredient name={"단백질"} value={"100g"}></BoxIngredient>
      </BoxIngredientWrap>
      <ModeRecomText mode={"일반모드"} name={"윤희"}></ModeRecomText>
      <BoxIngredientWrap>
        <BoxModeRecom main={"물"} value={"체내 수분량 늘리기"}></BoxModeRecom>
        <BoxModeRecom
          main={"샐러드"}
          value={"포만감을 유지해줘요!"}
        ></BoxModeRecom>
      </BoxIngredientWrap>
    </PageBlock>
  );
};

export default MainPage;
