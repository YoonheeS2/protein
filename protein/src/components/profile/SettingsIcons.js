import React, { startTransition } from 'react';
import styled from 'styled-components';
import { Alarm, DirectInbox, Heart } from "iconic-react";


const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CircleIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const IconLabel = styled.div`
  font-size: 12px;
  text-align: center;
`;

const IconAlarm = styled(Alarm)`

`;

const IconDirectInbox = styled(DirectInbox)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconHeart = styled(Heart)`
`;


const SelectedIcon = ({ icontype }) => {
    console.log(icontype);
    if (icontype === "alarm") {
      return (
        <IconAlarm size={20} color="#000">
          아이콘
        </IconAlarm>
      );
    } else if (icontype === "directInbox") {
      return (
        <IconDirectInbox size={20} color="#000">
          아이콘
        </IconDirectInbox>
      );
    } else if (icontype === "heart") {
      return (
        <IconHeart size={20} color="#000">
          아이콘
        </IconHeart>
      );
    } else {
      return null;}
    };

const SettingsIcons = ({icontype}) => {
  return (
    <IconsContainer>
      <div>
        <CircleIcon>
            <SelectedIcon icontype={"alarm"}/>
        </CircleIcon>
        <IconLabel>알람 설정</IconLabel>
      </div>
      <div>
      <CircleIcon>
            <SelectedIcon icontype={"directInbox"}/>
        </CircleIcon>
        <IconLabel>커뮤니티 관리</IconLabel>
      </div>
      <div>
      <CircleIcon>
            <SelectedIcon icontype={"heart"}/>
      </CircleIcon>
        <IconLabel>팔로잉 관리</IconLabel>
      </div>
    </IconsContainer>
  );
};

export default SettingsIcons;