import React from 'react'
import styled from 'styled-components'

const HeartBeat = styled.img`
width: 68px;
`
const LineComponent = () => {
  return (
    <div>
    <HeartBeat src={`/heartBeat.png`}/>
    </div>
  )
}

export default LineComponent