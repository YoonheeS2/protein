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
    valueGroups: {
      시: "00",
      분: "00",
      AM: "AM",
    },
    optionGroups: {
      시: generateNumberArray(0, 12),
      분: generateNumberArray(0, 59),
      AM:[
        { value: "AM", label: "AM" },
        { value: "PM", label: "PM" },
      ]
    },
  });

  const handleChange = (name, value) => {
    setObject((prevObject) => {
      return {
        ...prevObject,
        valueGroups: {
          ...prevObject.valueGroups,
          [name]: value,
        },
      };
    });
  };

  const { optionGroups, valueGroups } = object;

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
