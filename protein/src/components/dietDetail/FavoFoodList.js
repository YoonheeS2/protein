import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";

const FavoBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 14px;
  margin-right: 14px;
`;

const Title = styled.div`
  color: #070707;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

const ItemBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemTitle = styled.div`
  color: #1d1617;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  line-height: 21px;
  word-wrap: break-word;
`;

const ItemCalories = styled.div`
  color: #7b6f72;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 18px;
  word-wrap: break-word;
`;

const ItemList = [
  {
    itemName: "삶은달걀",
    calories: 1000,
  },
  {
    itemName: "삶은달걀",
    calories: 1000,
  },
];

const FavoFoodList = () => {
  return (
    <FavoBlock>
      <Title>자주먹은 음식</Title>
      {ItemList.map(({ itemName, calories }) => {
        return <FavoFoodItem itemName={itemName} calories={calories} />;
      })}
    </FavoBlock>
  );
};

const FavoFoodItem = ({ itemName, calories }) => {
  return (
    <ItemBlock>
      <ItemTitle>{itemName}</ItemTitle>
      <ItemCalories>{calories}kcal</ItemCalories>
      <IconButton></IconButton>
    </ItemBlock>
  );
};

export default FavoFoodList;
