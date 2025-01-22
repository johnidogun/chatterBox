import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [input, setInputs] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
})

const navigate = useNavigate();


  const handleInputs = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))    
  }
  console.log(input)

  const handleSubmit = async e =>{
    e.preventDefault()

  try{
    const res = await axios.post("/auth/login", input)
    navigate("/")

   }
  catch(err) {

    }
  

  }
  return (
    <div className='container'>
        <h1 className='text'>Login</h1>
    <form className='form'>
        <input placeholder='userName' name='username' type='text' onChange={handleInputs}/>
        {/* <input placeholder='Surname'name='surname' type='text' onChange={handleInputs}/> */}
        <input placeholder='Email' name='email' type='text' onChange={handleInputs}/>
        <input placeholder='Password' name='password' type='Password' onChange={handleInputs}/>
        <p>This creates an error</p>
        <button onClick={handleSubmit}>Submit</button>
        <span>Do you have an account?<Link to={"/RegisterPage"}> Register </Link></span>
    </form>
    </div>
  )
}

export default Login