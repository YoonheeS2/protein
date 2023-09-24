import React from 'react';
import Welcome from "./Welcome";

const ListComponent = () => {
    const array = [
        {
            username : "유관우",
            age : 20,
        }, {
            username : "김윤희",
            age : 18,
        }, {
            username : "남은채",
            age : 16,
        }
    ];

  return (
    <div>
        {array.map((user) => {
            return <Welcome username={user.username} 
            age = {user.age}>
            </Welcome>
        })}
    </div>
  );
};

export default ListComponent