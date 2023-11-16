import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-top: 24px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  margin-right: 5px;
`;

const Text = styled.span`
  color: #000;
  font-family: Palanquin;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const Box = styled.div`
  width: 90px;
  height: 90px;
`;

const HealthyComponent = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [weekRange, setWeekRange] = useState({ start: "", end: "" });
  const navigate = useNavigate();

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
        console.log(response)
        // if () {
            
        // };
    });
  };

  return (
    <Container>
      <Line>
        <Title>건강한 식습관</Title>
        <Text>check!</Text>
      </Line>
      <Line>
        <Box />
        <Box />
        <Box />
      </Line>
    </Container>
  );
};

export default HealthyComponent;
