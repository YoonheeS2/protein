import React from 'react'
import styled from 'styled-components';

const Background = styled.button`
    display: flex;
    height: 100px;
    background-color: #ffffff;
    flex-direction: column;
    border-radius: 15px;
    -webkit-box-shadow: 11px 6px 22px 0px rgba(0,0,0,0.23); 
box-shadow: 11px 6px 22px 0px rgba(0,0,0,0.23);
    `;

const Title = styled.div`
    font-weight: bold;
    font-size: 16px;
    `;

const Description = styled.div`
    font-size: 12px;
    color: #7b6f72;
    `;

const GoalButton = ({title, description}) => {
  return (
    <Background>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Background>
  )
}

export default GoalButton
