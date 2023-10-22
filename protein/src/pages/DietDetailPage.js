import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import { TimePicker } from "react-ios-time-picker";
import SearchInput from "../components/dietDetail/SearchInput";
import FavoFoodList from "../components/dietDetail/FavoFoodList";
import styled from "styled-components";
import TimePickerCustom from "../components/dietDetail/ScrollableTimePicker";
import ScrollableTimePicker from "../components/dietDetail/ScrollableTimePicker";

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
  outline: none; /* 클릭했을 때의 테두리 제거 */
`;

const DietDetailPage = () => {
  const [selectedTime, setSelectedTime] = useState("아침");
  const [searchResults, setSearchResults] = useState([]); // 검색 결과를 저장하기 위한 state
  const [selectedFoods, setSelectedFoods] = useState([]); // 선택된 음식들을 저장하기 위한 state

  const handleSearch = (query) => {
    // TODO: 여기에 음식 검색 로직 추가
    // 가짜 데이터를 사용하여 예시를 만듭니다.
    const fakeData = [
      { name: "사과", calorie: 50 },
      { name: "바나나", calorie: 100 },
    ];
    setSearchResults(fakeData);
  };

  const handleSelectFood = (food) => {
    setSelectedFoods([...selectedFoods, food]);
  };

  return (
    <div>
      <AppHeader
        title={
          <Dropdown
            value={selectedTime}
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedTime(e.target.value);
            }}
          >
            <option value="아침">아침</option>
            <option value="점심">점심</option>
            <option value="저녁">저녁</option>
            <option value="야식">야식</option>
          </Dropdown>
        }
      ></AppHeader>
      <Container>
        <ScrollableTimePicker></ScrollableTimePicker>
      </Container>
      <SearchInput onSearch={handleSearch}></SearchInput>
      {searchResults.map((food, index) => (
        <div key={index} onClick={() => handleSelectFood(food)}>
          {food.name} - {food.calorie}kcal
        </div>
      ))}
      <FavoFoodList foods={selectedFoods}></FavoFoodList>
    </div>
  );
};

export default DietDetailPage;
