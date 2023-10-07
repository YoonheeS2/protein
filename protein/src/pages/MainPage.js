import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import TipBox from "../components/main/TipBox";
import ProgressBar from "../components/main/ProgressBar";
import axios from "axios";
import styled from "styled-components";
import RecommendedCalories from "../components/main/RecommendedCalories";
import CircleComponent from "../components/main/CircleComponent";
import LineComponent from "../components/main/LineComponent";
import Modal from "react-modal";
import SearchPopup from "../components/main/SearchPopup";

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

const MainPage = () => {
  const [percent, setPercent] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [calories, setCalories] = useState(0);
  const [recpcalories, setRecoCalories] = useState(0);
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
    axios.get("/api/v1/meal/log/summary").then((response) => {
      console.log(response.data);
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
        <LineComponent />
        <CircleComponent color="#1A73E9" />
        <LineComponent />
        <CircleComponent color="#C8DDFA" />
      </CircleLine>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SearchPopup />
      </Modal>
      <button onClick={handleModalButton}>하찮은감자</button>
    </PageBlock>
  );
};

export default MainPage;
