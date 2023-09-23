import React, { useState } from 'react'

const InputComponent = () => {

    const [data, setData] = useState("바뀔 데이터");
    const [viewData, setViewData] = useState("바뀔 데이터");

    const handleClick = () => {
        console.log("버튼을 클릭합니다.");
        setViewData(data);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setData(e.target.value);
    };
    return (
        <div>
            <h1>{viewData}</h1>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>전송</button>
        </div>
      );

    }



export default InputComponent