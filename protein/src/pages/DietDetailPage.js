import React from "react";
import AppHeader from "../components/common/AppHeader";
import { TimePicker } from "react-ios-time-picker";

const DietDetailPage = () => {
  return (
    <div>
      <AppHeader title={"아침"}></AppHeader>
      <TimePicker></TimePicker>
    </div>
  );
};

export default DietDetailPage;
