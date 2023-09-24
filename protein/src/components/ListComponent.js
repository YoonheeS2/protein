import React from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
  const array = [
    {
      username: "유관우",
      age: 17,
    },
    {
      username: "윤희",
      age: 24,
    },
    {
      username: "은채",
      age: 20,
    },
  ];
  return (
    <div>
      {array.map((user) => {
        return <Welcome username={user.username} age={user.age}></Welcome>;
      })}
    </div>
  );
};

export default ListComponent;
