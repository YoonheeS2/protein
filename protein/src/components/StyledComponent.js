import React from 'react';
import styled from "styled-components";
import StyleSheet from 'styled-components';

const Mystyle = styled.div `
    color : red;
    font-weight : bold;
    font-size : 20px;
`


const StyledComponent = () => {
  return (
    <Mystyle>StyledComponent</Mystyle>
  )
}

export default StyledComponent
