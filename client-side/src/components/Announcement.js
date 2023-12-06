import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500
`
function Announcement() {
  return (
    <div>
        <Container>Get a coupun of RS 1000 on shopping of Rs 10000</Container>
    </div>
  )
}

export default Announcement