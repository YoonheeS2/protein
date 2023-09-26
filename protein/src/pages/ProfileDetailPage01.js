import React from "react";
import SignupTitle1 from "../components/signup/SignupTitle1";
import styled from "styled-components";
import IconInput from "../components/signup/IconInput";
import PrivacyCheckbox from "../components/signup/PrivacyCheckbox";
import { Lock, Sms, User } from "iconic-react";
import ButtonComponent from "../components/signup/ButtonComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 46px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  text-size: 14px;
`;

const ProfileDetailPage01 = () => {
  return (
    <PageBlock>
      <SignupTitle1 title={"환영합니다 !"} logo={"PROTEIN BODY"}></SignupTitle1>
      <InputForm>
        <IconInput icontype={"user"} placeholder={"이름"}></IconInput>
        <IconInput icontype={"sms"} placeholder={"이메일"}></IconInput>
        <IconInput icontype={"lock"} placeholder={"비밀번호"}></IconInput>
      </InputForm>
      <PrivacyCheckbox
        label={
          "귀하는 당사의 개인 정보 보호 정책 및 이용 약관에 계속 동의합니다"
        }
      ></PrivacyCheckbox>
      <ButtonContainer>
        <ButtonComponent text="완성하기"></ButtonComponent>
      </ButtonContainer>
      <Text>
        계정이 있으신가요?
        <Link>로그인</Link>
      </Text>
    </PageBlock>
  );
};

export default ProfileDetailPage01;
