import React, { useState } from 'react'

const StateComponent = () => {
    const [username, setUserName] = useState("윤희");
    setInterval (() => {
        setUserName("관우");
    }, 5000);
    
  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default StateComponent
