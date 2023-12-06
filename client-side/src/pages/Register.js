import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),
 url("https://assets.vogue.com/photos/6345ce101d7bcd79cb8fbe82/4:3/w_1600%2Cc_limit/00-promo%2520(3).jpg") ;
 display: flex;
 align-items: center;
 justify-content: center;
`
const Wrapper = styled.div`
background-color: white;
width: 40%;
padding: 20px;
${mobile({width:"75%"})}
`
const Title = styled.h1`
font-style: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
max-width: 40%;
margin: 20px 10px 0px px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: wheat;
cursor: pointer;
`
function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder = "name"/>
                <Input placeholder = "Last Name"/>
                <Input placeholder = "Username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "Password"/>
                <Input placeholder = "Confirm password"/>
                <Agreement>By clicking the Create button you will accept the Terms and Conditions.</Agreement>
                <Button>Create</Button>
            </Form>

        </Wrapper>
    </Container>
  )
}

export default Register