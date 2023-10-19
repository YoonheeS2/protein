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
  const [selectedTime, setSelectedTime] = useState("아침"); // Default is "아침"

  return (
    <div>
      <AppHeader
        title={
          <Dropdown
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
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
      <SearchInput></SearchInput>
      <FavoFoodList></FavoFoodList>
    </div>
  );
};

export default DietDetailPage;
