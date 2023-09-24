import React, { useState } from "react";

const InputComponent = () => {
  const [title, setTitle] = useState("값없음");
  const [viewTitle, setViewTitle] = useState("값없음");
  const handleClick = () => {
    console.log("버튼을 클릭합니다.");
    setViewTitle(title);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div>
      <h1>{viewTitle}</h1>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>전송</button>
    </div>
  );
};

export default InputComponent;
