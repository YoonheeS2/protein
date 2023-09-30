import React, { useState } from "react";
import Picker from "react-scrollable-picker";

function generateNumberArray(begin, end) {
  let array = [];
  for (let i = begin; i <= end; i++) {
    const value = (i < 10 ? "0" : "") + i;
    array.push({
      value: (i < 10 ? "0" : "") + i,
      label: (i < 10 ? "0" : "") + i,
    });
  }
  return array;
}

const ScrollableTimePicker = () => {
  const [object, setObject] = useState({
    isPickerShow: false,
    valueGroups: {
      year: "1989",
      month: "08",
      day: "12",
    },
    optionGroups: {
      year: generateNumberArray(1970, 2015),
      month: generateNumberArray(1, 12),
      day: generateNumberArray(1, 31),
    },
  });

  let handleChange = (name, value) => {
    setObject(({ valueGroups, optionGroups }) => {
      const nextState = {
        valueGroups: {
          ...valueGroups,
          [name]: value,
        },
      };
      if (name === "year" && valueGroups.month === "02") {
        const yearValue = parseInt(value);
        if (
          (yearValue % 4 === 0 && yearValue % 100 !== 0) ||
          yearValue % 400 === 0
        ) {
          nextState.optionGroups = {
            ...optionGroups,
            day: generateNumberArray(1, 29),
          };
        } else {
          nextState.optionGroups = {
            ...optionGroups,
            day: generateNumberArray(1, 28),
          };
        }
      } else if (name === "month") {
        if (value === "02") {
          nextState.optionGroups = {
            ...optionGroups,
            day: generateNumberArray(1, 28),
          };
        } else if (
          ["01", "03", "05", "07", "08", "10", "12"].indexOf(value) > -1 &&
          ["01", "03", "05", "07", "08", "10", "12"].indexOf(
            valueGroups.month
          ) < 0
        ) {
          nextState.optionGroups = {
            ...optionGroups,
            day: generateNumberArray(1, 31),
          };
        } else if (
          ["01", "03", "05", "07", "08", "10", "12"].indexOf(value) < 0 &&
          ["01", "03", "05", "07", "08", "10", "12"].indexOf(
            valueGroups.month
          ) > -1
        ) {
          nextState.optionGroups = {
            ...optionGroups,
            day: generateNumberArray(1, 30),
          };
        }
      }
      return nextState;
    });
  };

  const togglePicker = () => {
    this.setState(({ isPickerShow }) => ({
      isPickerShow: !isPickerShow,
    }));
  };
  let { isPickerShow, optionGroups, valueGroups } = object;

  return (
    <div>
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={handleChange}
      />
    </div>
  );
};

export default ScrollableTimePicker;
