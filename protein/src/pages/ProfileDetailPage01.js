import React from "react";
import SignupTitle1 from "../components/signup/SignupTitle1";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import { Lock, Sms, User } from "iconic-react";
import ButtonComponent from "../components/signup/ButtonComponent";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 21px;
`
const ProfileDetailPage01 = () => {
  return (
    <PageBlock>
      <SignupTitle1
        title={"환영합니다 !"}
        logo={
          "PROTEIN BODY"
        }
      ></SignupTitle1>
      <InputForm>
        <IconInput icontype={"user"} placeholder={"이름"}></IconInput>
        <IconInput icontype={"sms"} placeholder={"이메일"}></IconInput>
        <IconInput icontype={"lock"} placeholder={"비밀번호"}></IconInput>
      </InputForm>
      <br></br>
      <PrivacyCheckbox
        label={
          "귀하는 당사의 개인 정보 보호 정책 및 이용 약관에 계속 동의합니다"
        }
      ></PrivacyCheckbox>
      <ButtonContainer>
        <ButtonComponent text="완성하기"></ButtonComponent>
      </ButtonContainer>
    </PageBlock>
  );
};

export default ProfileDetailPage01;
