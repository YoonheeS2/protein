import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #a9e2f3; /* Add the actual profile image here */
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const UserName = styled.span`
  font-weight: bold;
`;

const SupportMessage = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #e6e6e6;
`;

const UserProfile = () => {
  const user = {
    name: "조연아",
    supportMessage: "항상 응원합니다!",
  };

  return (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo>
        <UserName>{`${user.name}님 항상 응원합니다!`}</UserName>
      </ProfileInfo>
    </ProfileContainer>
  );
};
export default UserProfile;
