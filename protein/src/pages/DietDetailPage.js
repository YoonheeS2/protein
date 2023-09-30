import React from "react";
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

const DietDetailPage = () => {
  return (
    <div>
      <AppHeader title={"아침"}></AppHeader>
      <Container>
        <ScrollableTimePicker></ScrollableTimePicker>
      </Container>
      <SearchInput></SearchInput>
      <FavoFoodList></FavoFoodList>
    </div>
  );
};

export default DietDetailPage;
