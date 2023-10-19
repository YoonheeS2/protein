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

const TimeSelection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TimeButton = styled.button`
  background-color: ${(props) => (props.selected ? "#007BFF" : "#E0E0E0")};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#000000")};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;

const DietDetailPage = () => {
  const [selectedTime, setSelectedTime] = useState("아침"); // Default is "아침"

  return (
    <div>
      <AppHeader title={selectedTime}></AppHeader>
      <Container>
        <TimeSelection>
          <TimeButton
            selected={selectedTime === "아침"}
            onClick={() => setSelectedTime("아침")}
          >
            아침
          </TimeButton>
          <TimeButton
            selected={selectedTime === "점심"}
            onClick={() => setSelectedTime("점심")}
          >
            점심
          </TimeButton>
          <TimeButton
            selected={selectedTime === "저녁"}
            onClick={() => setSelectedTime("저녁")}
          >
            저녁
          </TimeButton>
        </TimeSelection>
        <ScrollableTimePicker></ScrollableTimePicker>
      </Container>
      <SearchInput></SearchInput>
      <FavoFoodList></FavoFoodList>
    </div>
  );
};

export default DietDetailPage;
