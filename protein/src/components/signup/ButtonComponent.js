import React from 'react'
import styled from 'styled-components'

const ButtonComponent = () => {

    const BasicButton = styled.button`
    height : 60px;
    width : 315px;
    border-radius: 48px;
    background-color: #A0BBFF;
    padding: 10px 20px;
    `
    const Text = styled.div`
    text-size : 16px;
    font-weight: bold;
    color : #ffffff;
    `
  return (
    <BasicButton>
        <Text>완성하기</Text>
    </BasicButton>
  )
}

export default ButtonComponent