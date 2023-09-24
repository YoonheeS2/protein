import React, { useState } from "react";

const StateComponent = () => {
  //   let userName = "윤희";
  //   setInterval(() => {
  //     userName = "관우";
  //     console.log(userName);
  //   }, 5000);
  const [userName, setUserName] = useState("윤희");
  setInterval(() => {
    setUserName("관우");
  }, 5000);

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
};

export default StateComponent;
