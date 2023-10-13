import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px 29px;
`

const Recom = styled.span`
font-size: 14px;
color: #000;
`

const Name = styled.span`
font-size: 14px;
color: #000;
`

const Recommened = ({value, name}) => {
  return (
    <Container>
        <Recom>{value}</Recom>
        <Name>{name}</Name>
    </Container>
  )
}

export default Recommened