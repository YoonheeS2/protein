import React from "react";
import AppHeader from "../components/common/AppHeader";
import UserProfile from "../components/profile/UserProfile";
import SettingsIcons from "../components/profile/SettingsIcons";
import Dietinfor from "../components/profile/Dietinfor";
import OtherElement from "../components/profile/OtherElement"; // OtherElement 컴포넌트를 import합니다.

const ProfilePage = () => {
  return (
    <div>
      <AppHeader title={"profile"} />
      <UserProfile />
      <SettingsIcons icontype={"alarm"}></SettingsIcons>

      <div style={{ marginTop: "20px" }}>
        <Dietinfor />
      </div>

      <div style={{ marginTop: "20px" }}>
        <OtherElement />
      </div>
    </div>
  );
};

export default ProfilePage;
