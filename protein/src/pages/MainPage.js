import React from "react";
import AppHeader from "../components/common/AppHeader";
import TipBox from "../components/profile/TipBox";

const MainPage = () => {
  return (
    <div>
      <AppHeader title={"PROTEIN BODY"}></AppHeader>
      <TipBox text={"수분을 많이 섭취하면 포만감을 유지하기 좋아요!"}></TipBox>
    </div>
  );
};

export default MainPage;
