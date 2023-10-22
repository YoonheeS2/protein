import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
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

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
  }

  // 현재 선택된 타일 스타일 지정
  .react-calendar__tile--now {
  }
  // 타일 클릭시 스타일 지정
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: red;
  }
`;

const DietCalendar = ({ handleClick }) => {
  const value = new Date();
  const handleChange = (e) => {
    handleClick(e);
  };

  return (
    <CalendarCustom>
      <Calendar
        onChange={handleChange}
        value={value}
        calendarType={"US"}
        minDetail={"month"}
        formatShortWeekday={(locale, date) =>
          ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
        }
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
        showNavigation={false}
      />
    </CalendarCustom>
  );
};

export default DietCalendar;
