import React, { useEffect, useState } from "react";
import AppHeader from "../components/common/AppHeader";
import DietCalendar from "../components/diet/DietCalendar";
import styled from "styled-components";
import WeekSelector from "../components/diet/WeekSelector";
import IndividualInfo from "../components/diet/IndividualInfo";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const DietContainer = styled.div`
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid #f2f2f2;
`;

const DietPage = () => {
  const [todayMeal, setTodayMeal] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [weekRange, setWeekRange] = useState({ start: "", end: "" });
  const navigate = useNavigate();
  const isAllMealsRecorded = (date) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const meals = todayMeal[dateString];
    return meals && meals.BREAKFAST && meals.LUNCH && meals.DINNER;
  };

  useEffect(() => {
    console.log("date : ", moment(new Date()).format("YYYY-MM-DD"));
    setSelectedDate(moment(new Date()).format("YYYY-MM-DD"));
    getTodayMeal(new Date());
  }, []);

  const getTodayMeal = (date) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found!");
      return;
    }

    const mealDateString = moment(date).format("YYYY-MM-DD");
    setSelectedDate(mealDateString);

    const startOfWeek = moment(date).startOf("week").format("YYYY-MM-DD");
    const endOfWeek = moment(date).endOf("week").format("YYYY-MM-DD");
    console.log(weekRange);
    setWeekRange({ start: startOfWeek, end: endOfWeek });

    const requestOption = {
      url: `/api/v1/meal/log/${userId}/${mealDateString}`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    };

    axios(requestOption)
      .then((response) => {
        if (response.data && response.data.result) {
          setTodayMeal(response.data.result);
          const { BREAKFAST, LUNCH, DINNER } = response.data.result;
          console.log("기록", BREAKFAST, LUNCH, DINNER);
          // 아침, 점심, 저녁 중 하나라도 누락된 경우 경고창 표시
          if (
            BREAKFAST === undefined ||
            LUNCH === undefined ||
            DINNER === undefined
          ) {
            alert(
              "아침, 점심, 저녁 중 하나 이상의 식사 기록이 누락되었습니다."
            );
          }
        } else {
          console.error("Unexpected response structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching meal data:", error);
      });
  };

  const goToDetail = () => {
    navigate("/diet/detail", { state: { selectedDate: selectedDate } });
  };

  return (
    <div>
      <AppHeader
        title={"PROTEIN BODY"}
        backButton={false}
        type={"diet"}
        addEvent={goToDetail}
      ></AppHeader>
      <DietCalendar
        handleClick={getTodayMeal}
        selectedDate={selectedDate}
        isAllMealsRecorded={isAllMealsRecorded}
      ></DietCalendar>
      <WeekSelector
        weekRange={weekRange}
        selectedDate={selectedDate}
        handleClick={getTodayMeal}
      ></WeekSelector>
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
          title={"점심"}
          calories={todayMeal.LUNCH.calories}
          meals={todayMeal.LUNCH.length}
          foodList={todayMeal.LUNCH}
        ></IndividualInfo>
      )}
      {todayMeal.DINNER && (
        <IndividualInfo
          title={"저녁"}
          calories={todayMeal.DINNER.calories}
          meals={todayMeal.DINNER.length}
          foodList={todayMeal.DINNER}
        ></IndividualInfo>
      )}
    </div>
  );
};

export default DietPage;
