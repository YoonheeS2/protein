import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
width:75px;
height:2px;
background-color:#1A73E9;
`

const LineComponent = () => {
  return (
    <div><Line/></div>
  )
}

export default LineComponent