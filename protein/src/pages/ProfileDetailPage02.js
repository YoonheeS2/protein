import React from "react";
import SignupTitle from "../components/signup/SignupTitle";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import IconSelect from "../components/signup/IconSelect";

const PageBlock = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
`;

const InputFromRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputForm = styled.div`
  display: flex;
  width: 340px;
  height: 170px;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
`;

const ProfileDetailPage01 = () => {
  return (
    <PageBlock>
      <SignupTitle
        title={"당신의 프로필을 만들어 봅시다!"}
        description={
          "이것은 우리가 당신에 대해 더 많이 알도록 도와줄 것입니다!"
        }
      ></SignupTitle>
      <InputForm>
        <IconSelect></IconSelect>
        <IconInput></IconInput>
        <IconInput></IconInput>
        <IconInput></IconInput>
      </InputForm>
      <br></br>
      <PrivacyCheckbox
        label={
          "귀하는 당사의 개인 정보 보호 정책 및 이용 약관에 계속 동의합니다"
        }
      ></PrivacyCheckbox>
    </PageBlock>
  );
};

export default ProfileDetailPage01;
