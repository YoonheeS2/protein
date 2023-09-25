import React from 'react'
import styled from 'styled-components'

const BasicButton = styled.button`
  height : 60px;
  width : 315px;
  border-radius: 48px;
  background-color: #A0BBFF;
  padding: 10px 20px;
  border: 0px;
`
const Text = styled.div`
  text-size : 16px;
  font-weight: bold;
  color : #ffffff;
`

const ButtonComponent = ({text}) => {
  return (
    <BasicButton>
        <Text>{text}</Text>
    </BasicButton>
  )
}

export default ButtonComponent