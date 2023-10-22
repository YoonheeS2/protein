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
import MealData from "../components/data/RecommendedMeal.json";

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
  justify-content: space-between;
  width: 300px;
`;
const MainPage = () => {
  const [percent, setPercent] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [calories, setCalories] = useState(0);
  const [recpcalories, setRecCalories] = useState(0);
  const [searchResult, setSearchResult] = useState({
    success: true,
    result: {
      productId: 0,
      productName: "string",
      brandName: "string",
      calories: 0,
      protein: 0,
      totalCarbohydrate: 0,
      sugars: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      sodium: 0,
      cholesterol: 0,
    },
    errorMsg: "string",
  });
  const [carbohydrateCircleColor, setCarbohydrateCircleColor] =
    useState("#C8DDFA");
  const [proteinCircleColor, setProteinCircleColor] = useState("#C8DDFA");
  const [fatCircleColor, setFatCircleColor] = useState("#C8DDFA");
  const [randomTip, setRandomTip] = useState("");
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
    console.log(MealData);
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
    axios.get("/api/v1/meal/log/summary/today/3").then((response) => {
      //응답 데이터 확인
      console.log("-------response--------");
      console.log(response.data);
      console.log("-------response end--------");
      const todayCalories = response.data.result.calories;
      const todayCarbohydrate = response.data.result.carbohydrate;
      const todayProtein = response.data.result.protein;
      const todayFat = response.data.result.fat;
      axios.get("/api/v1/user/3").then((userResponse) => {
        console.log(userResponse.data);
        console.log(userResponse.data.result.recommendCalories);
        const recommendCalories = userResponse.data.result.recommendCalories;
        console.log(recommendCalories);
        setRecCalories(recommendCalories);
        // percent 계산
        const calculatedPercent = (todayCalories / recommendCalories) * 100;
        setPercent(calculatedPercent);
        const recCarbohydrate =
          userResponse.data.result.recommendTotalCarbohydrate;
        const recProtein = userResponse.data.result.recommendProtein;
        const recFat = userResponse.data.result.recommendTotalFat;
        if (todayCarbohydrate > recCarbohydrate) {
          setCarbohydrateCircleColor("#1A73E9");
        } else {
          setCarbohydrateCircleColor("#C8DDFA");
        }
        if (todayProtein > recProtein) {
          setProteinCircleColor("#1A73E9");
        } else {
          setProteinCircleColor("#C8DDFA");
        }
        if (todayFat > recFat) {
          setFatCircleColor("#1A73E9");
        } else {
          setFatCircleColor("#C8DDFA");
        }
      });
      setSummaryMealToday(response.data);
      console.log(summaryMealToday);
      setCalories(todayCalories);
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
        <CircleComponent color={proteinCircleColor} />
        <Line />
        <CircleComponent color={fatCircleColor} />
        <Line />
        <CircleComponent color={carbohydrateCircleColor} />
      </CircleLine>
      <RecomContainer>
        <Recommened
          value={summaryMealToday.result.carbohydrate}
          name="탄수화물"
        ></Recommened>
        <Recommened
          value={summaryMealToday.result.protein}
          name="단백질"
        ></Recommened>
        <Recommened
          value={summaryMealToday.result.fat}
          name="지방"
        ></Recommened>
      </RecomContainer>
      <SearchContainer>
        <SearchText name={searchResult.result.productName}></SearchText>
        <SearchButton handleClick={handleModalButton} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="검색기능"
        >
          <SearchPopup
            isOpen={modalIsOpen}
            onClose={closeModal}
            setResult={setSearchResult}
          />
        </Modal>
      </SearchContainer>
      <BoxIngredientWrap>
        <BoxIngredient
          name={"탄수화물"}
          value={searchResult.result.totalCarbohydrate}
        ></BoxIngredient>
        <BoxIngredient
          name={"당"}
          value={searchResult.result.sugars}
        ></BoxIngredient>
        <BoxIngredient
          name={"단백질"}
          value={searchResult.result.protein}
        ></BoxIngredient>
        <BoxIngredient
          name={"지방"}
          value={searchResult.result.totalFat}
        ></BoxIngredient>
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
