import React, { useState } from "react";
import ProfileDetailPage01 from "./ProfileDetailPage01";
import ProfileDetailPage02 from "./ProfileDetailPage02";
import ModeSelection from "./ModeSelection";
import axios from "axios";

const SignUpSummaryPage = () => {
  const [step, setStep] = useState(1);
  const [signupData, setSignUpData] = useState({
    name: "입력전",
    mail: "입력전",
    password: "입력전",
    genderType: "MALE",
    birthDate: "2023-10-15",
    height: 0,
    weight: 0,
    goalWeight: 0,
    modeType: "NORMAL",
  });

  const nextStep = () => {
    let nextStep = step;
    nextStep = nextStep + 1;
    console.log(nextStep);
    setStep(nextStep);
  };

  const backStep = () => {
    let nextStep = step;
    nextStep = nextStep - 1;
    if (nextStep < 1) {
      nextStep = 1;
    }
    console.log(nextStep);
    setStep(nextStep);
  };

  const signup = () => {
    axios
      .post("api/v1/user/signup", signupData)
      .then((response) => {
        if (response.status === 200) {
          alert("회원가입 성공");
        } else {
          alert(response.data.errorMsg);
        }
      })
      .catch((error) => {
        console.error("회원가입 실패:", error);
      });
  };

  const changeSignupData = (e) => {
    console.log(`${e.target.name} 내가 입력한 인풋 ${e.target.value}`);
    if (e.target.name === "name") {
      setSignUpData(...signupData,{
        signupData[e.target.name] : e.target.value
      });
    }
  };

  return (
    <div>
      {step === 1 && (
        <ProfileDetailPage01
          nextStep={nextStep}
          handleChange={changeSignupData}
        />
      )}
      {step === 2 && <ProfileDetailPage02 nextStep={nextStep} />}
      {step === 3 && <ModeSelection />}
    </div>
  );
};

export default SignUpSummaryPage;
