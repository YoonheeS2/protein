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

  const [summaryMealToday, setSummaryMealToday] = useState({
    success: false,
    result: {
      calories: 0,
      protein: 0,
      carbohydrate: 0,
      fat: 0,
    },
    errorMsg: null,
  });

  //사용자가 컴포넌트를 렌더링 시작할때 기능을 수행시키기위한 훅
  useEffect(() => {
    getMainPageData();
  }, []);

  const handleModalButton = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // 회원정보를 조회하는 API 요청 실행메서드
  const getMainPageData = () => {
    axios.get("/api/v1/meal/log/summary/today/1").then((response) => {
      //응답 데이터 확인
      console.log("-------response--------");
      console.log(response.data);
      console.log("-------response end--------");
      //사용자 데이터 조회 성공 이후 스테이트 변경
      setSummaryMealToday(response.data);
      console.log(summaryMealToday);
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
        <Recommened
          value={summaryMealToday.result.protein}
          name="단백질"
        ></Recommened>
        <Recommened
          value={summaryMealToday.result.fat}
          name="지방"
        ></Recommened>
        <Recommened
          value={summaryMealToday.result.carbohydrate}
          name="탄수화물"
        ></Recommened>
      </RecomContainer>
      <SearchContainer>
        <SearchText name={"딸기 샌드위치"}></SearchText>
        <SearchButton handleClick={handleModalButton} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="검색기능"
        >
          <SearchPopup isOpen={modalIsOpen} onClose={closeModal} />
        </Modal>
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
