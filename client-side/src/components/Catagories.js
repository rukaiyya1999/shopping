import React from 'react'
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem'
import { catagories } from '../data'
import { mobile } from '../Responsive'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({padding:"0px", flexDirection:'column'})}
`

function Catagories() {
  return (
    <Container>
    {
        catagories.map(item=>(
            <CatagoryItem item = {item} key = {item.id}/>
        ))
    }  
    </Container>
  )
}

export default Catagories