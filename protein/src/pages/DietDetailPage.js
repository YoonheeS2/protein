import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { TimePicker } from "react-ios-time-picker";
import SearchInput from "../components/dietDetail/SearchInput";
import FavoFoodList from "../components/dietDetail/FavoFoodList";
import styled from "styled-components";
import TimePickerCustom from "../components/dietDetail/ScrollableTimePicker";
import ScrollableTimePicker from "../components/dietDetail/ScrollableTimePicker";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 20px;
`;

const Dropdown = styled.select`
  appearance: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding-right: 24px;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="%23CBDDFF" d="M2 3L0 0h4z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 2% top 80%;
  background-size: 0.65em auto;
  font-size: 1em;
  outline: none;
`;

const SaveButton = styled.button`
  width: 90%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  position: fixed; // 이 부분 추가
  top: calc(50% + 270px); // 버튼을 현재 위치에서 고정
  left: 50%;
  transform: translateX(-50%); // 화면 중앙으로 정렬

  &:hover {
    background-color: #0056b3;
  }
`;

const DietDetailPage = () => {
  const [selectedTime, setSelectedTime] = useState("아침");
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하기 위한 state
  const [selectedFoods, setSelectedFoods] = useState([]); // 선택된 음식들을 저장하기 위한 state
  const location = useLocation();
  const { selectedDate } = location.state;

  useEffect(() => {
    console.log(selectedDate);
  }, []);
  const [searchedFoods, setSearchedFoods] = useState([]);

  const handleSearchedFoods = (food) => {
    console.log(searchedFoods);
    setSearchedFoods([food]);
  };

  const handleSaveFoods = () => {
    const dataToSave = {
      selectedMeal: selectedTime,
      foods: searchedFoods,
    };
    searchedFoods.map((data) => {
      const sendData = {
        userId: localStorage.getItem("userId"),
        productId: data.productId,
        mealType: "BREAKFAST",
        mealDateTime: new Date(selectedDate),
      };
      const requestObj = {
        url: "/api/v1/meal/log",
        method: "POST",
        data: sendData,
      };
      axios(requestObj).then((response) => {
        console.log(response);
      });
    });
    console.log(searchedFoods);
    alert("저장되었습니다!");
  };

  return (
    <div>
      <AppHeader
        backButton={true}
        title={
          <Dropdown
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="BREAKFAST">아침</option>
            <option value="LUNCH">점심</option>
            <option value="DINNER">저녁</option>
          </Dropdown>
        }
      ></AppHeader>
      <Container>
        <ScrollableTimePicker></ScrollableTimePicker>
      </Container>
      <SearchInput onProductFound={handleSearchedFoods}></SearchInput>
      <FavoFoodList foods={searchedFoods}></FavoFoodList>
      <SaveButton onClick={handleSaveFoods}>저장</SaveButton>
    </div>
  );
};

export default DietDetailPage;
