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
  width: 340px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  text-size: 14px;
`;

const LoginPage = () => {
  return (
    <PageBlock>
      <SignupTitle1 title={"환영합니다 !"} logo={"PROTEIN BODY"}></SignupTitle1>
      <InputForm>
        <IconInput icontype={"sms"} placeholder={"이메일"}></IconInput>
        <IconInput icontype={"lock"} placeholder={"비밀번호"}></IconInput>
      </InputForm>
      <br></br>
      <Text>
        <Link>비밀번호를 잊으셨나요?</Link>
      </Text>
      <ButtonContainer>
        <ButtonComponent text="로그인"></ButtonComponent>
      </ButtonContainer>
      <Text>
        아직 계정이 없으십니까? <Link>회원가입</Link>
      </Text>
    </PageBlock>
  );
};

export default LoginPage;
