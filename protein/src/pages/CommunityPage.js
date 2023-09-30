import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import CommunityContainer from "../components/community/CommunityContainer";

const CommunityPage = () => {
  return (
    <div>
      <AppHeader title={"PROTEIN BODY"}></AppHeader>
      <CommunityContainer></CommunityContainer>
    </div>
  );
};

export default CommunityPage;
