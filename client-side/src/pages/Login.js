import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { json } from 'react-router-dom'
import { publicRequest } from '../Axios'
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),
 url("https://threadcurve.com/wp-content/uploads/2021/05/european-style-men-may072021.jpg.webp") ;
 display: flex;
 align-items: center;
 justify-content: center;
 background-size: cover;
`
const Wrapper = styled.div`
background-color: white;
width: 25%;
padding: 20px;
${mobile({width:"75%"})}
`
const Title = styled.h1`
font-style: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: wheat;
cursor: pointer;
margin-bottom: 10px;
/* ${mobile({width:"60%"})} */
&:disabled{
  color: green;
  cursor: not-allowed;
}
`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`

const Error = styled.span`
color:red;
`

function Login() {
  const [ username, setusername] = useState("")
  const [ password, setpassword] = useState("")
  const dispatch = useDispatch()
  const {isFeching, error} = useSelector((state)=>state.user)

  const handleClick = async (e) =>{
    e.preventDefault()
    login(dispatch,{username, password})
  }
  return (
    <Container>
    <Wrapper>
        <Title>Sign In</Title>
        <Form> 
            <Input placeholder = "username"
              onChange={(e)=>setusername(e.target.value)}
            />
            <Input placeholder = "Password"
               onChange={(e)=>setpassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFeching}>Create</Button>
            { error && <Error>Something went wrong</Error>}
            <Link>Forgot Password</Link>
            <Link>Create New Account</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login