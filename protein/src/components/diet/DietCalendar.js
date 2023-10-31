import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const CalendarCustom = styled.div`
  .calender {
    border-bottom: 1px solid #f2f2f2;
    width: 100%;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
      height: 46px;
      border: none;
      background: #fff;
    }
  }

  .react-calendar__month-view__weekdays {
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
  }

  // 현재 선택된 타일 스타일 지정
  .selected-date {
    background-color: #5f89f5;
    border-radius: 50%;
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--active {
    background-color: #fff !important;
    color: black !important;
    border-radius: 50% !important;
    width: 45px !important;
    border: 2px solid #5f89f5 !important;
    height: 45px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: auto !important;
    text-align: center !important;
    box-sizing: border-box !important;
  }
`;

const DietCalendar = ({ handleClick, selectedDate }) => {
  // 로컬 상태를 삭제하므로, setSelectedDate 관련 코드도 삭제합니다.

  const handleChange = (date) => {
    handleClick(date); // date를 바로 handleClick 함수로 전달합니다.
  };

  return (
    <CalendarCustom>
      <Calendar
        onChange={handleChange}
        value={selectedDate} // selectedDate prop을 사용합니다.
        calendarType={"US"}
        minDetail={"month"}
        formatShortWeekday={(locale, date) =>
          ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
        }
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        showNavigation={false}
        // tileClassName={({ date, view }) =>
        //   view === "month" &&
        //   date.toDateString() === new Date(selectedDate).toDateString() // selectedDate prop을 사용하여 Date 객체로 변환
        //     ? "selected-date"
        //     : ""
        // }
      />
    </CalendarCustom>
  );
};

export default DietCalendar;
