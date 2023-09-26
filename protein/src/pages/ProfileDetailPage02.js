import React from "react";
import SignupTitle2 from "../components/signup/SignupTitle2";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import IconSelect from "../components/signup/IconSelect";
import IconSelectBox from "../components/signup/IconSelectBox";
import IconInput2 from "../components/signup/IconInput2";
import ButtonComponent from "../components/signup/ButtonComponent";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputForm2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        <IconInput icontype={"Calendar"} placeholder={"생년월일"}></IconInput>
        <InputForm2>
          <IconInput2 placeholder={"현재 체중"} rightSpan={"Kg"}></IconInput2>
          <IconInput2 placeholder={"목표 체중"} rightSpan={"Kg"}></IconInput2>
        </InputForm2>
        <IconInput
          icontype={"ArrowSwapVertical"}
          placeholder={"키"}
          rightSpan={"Kg"}
        ></IconInput>
      </InputForm>
      <ButtonComponent text={"다음"} icontype={"ArrowRight2"}></ButtonComponent>
    </PageBlock>
  );
};

export default ProfileDetailPage02;
