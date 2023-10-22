import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import DietCalendar from "../components/diet/DietCalendar";
import styled from "styled-components";
import WeekSelector from "../components/diet/WeekSelector";
import IndividualInfo from "../components/diet/IndividualInfo";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom"; // useNavigate로 수정

const DietContainer = styled.div`
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid #f2f2f2;
`;

const DietPage = () => {
  const [todayMeal, setTodayMeal] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    getTodayMeal(new Date());
  }, []);

  const getTodayMeal = (date) => {
    const userId = localStorage.getItem("userId");
    const mealDateString = moment(date).format("YYYY-MM-DD");
    setSelectedDate(mealDateString);

    const requestOption = {
      url: `/api/v1/meal/log/${userId}/${mealDateString}`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };
    axios(requestOption).then((response) => {
      console.log(response.data.result);
      setTodayMeal(response.data.result);
      console.log(todayMeal);
    });
  };

  const goToDetail = () => {
    navigate("/diet/detail", { state: { selectedDate: selectedDate } });
  };

  return (
    <div>
      <AppHeader
        title={"PROTEIN BODY"}
        backButton={true}
        type={"diet"}
        addEvent={goToDetail}
      ></AppHeader>
      <DietContainer>
        <DietCalendar handleClick={getTodayMeal}></DietCalendar>
      </DietContainer>
      <WeekSelector></WeekSelector>
      {todayMeal.BREAKFAST && (
        <IndividualInfo
          title={"아침"}
          calories={todayMeal.BREAKFAST.calories}
          meals={todayMeal.BREAKFAST.length}
          foodList={todayMeal.BREAKFAST}
        ></IndividualInfo>
      )}
      {todayMeal.LUNCH && (
        <IndividualInfo
          title={"아침"}
          calories={todayMeal.LUNCH.calories}
          meals={todayMeal.LUNCH.length}
          foodList={todayMeal.LUNCH}
        ></IndividualInfo>
      )}
      {todayMeal.DINNER && (
        <IndividualInfo
          title={"아침"}
          calories={todayMeal.DINNER.calories}
          meals={todayMeal.DINNER.length}
          foodList={todayMeal.DINNER}
        ></IndividualInfo>
      )}
    </div>
  );
};

export default DietPage;
