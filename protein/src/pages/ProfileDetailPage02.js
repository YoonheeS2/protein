import React from "react";
import SignupTitle2 from "../components/signup/SignupTitle2";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import IconSelect from "../components/signup/IconSelect";
import IconSelectBox from "../components/signup/IconSelectBox";

const PageBlock = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
`;

const InputForm = styled.div`
  display: flex;
  width: 340px;
  height: 170px;
  flex-direction: column;
  height: 40%;
  justify-content: space-between;
`;

const handleGenderChange = (selectedGender) => {
  // 선택한 성별을 처리하는 로직을 여기에 추가하세요.
  console.log("선택한 성별:", selectedGender);
};

const ProfileDetailPage02 = () => {
  return (
    <PageBlock>
      <SignupTitle2
        title="당신의 프로필을 만들어 봅시다!"
        description="이것은 우리가 당신에 대해 더 많이 알도록 도와줄 것입니다!"
      ></SignupTitle2>
      <InputForm>
        <IconSelectBox onChange={handleGenderChange} />
        <IconInput></IconInput>
        <IconInput></IconInput>
      </InputForm>
    </PageBlock>
  );
};

export default ProfileDetailPage02;
