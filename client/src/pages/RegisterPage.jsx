import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",

  }
    
  )
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e =>{
  setInputs((prev) =>({...prev, [e.target.name]: e.target.value}))
  }

   console.log(inputs)

 const handleSubmit = async (e) =>{
  e.preventDefault()
  try{
  const res = await axios.post("/auth/register", inputs)
    navigate("/login")
    
  }
 
  catch(err){
    setError(err.response.data)
  }
  
 }
//  console.log("/test", res)
 
  return (
    <div>
           <div className='container'>
        <h1 className='text'>Register</h1>
    <form className='form'>
        <input required placeholder='User name' name="username" type='text'onChange={handleChange} />
        {/* <input required placeholder='Surname' name="surname" type='text' onChange={handleChange}/> */}
        <input required placeholder='Email' name="email" type='text' onChange={handleChange}/>
        <input required placeholder='Password' name="password" type='Password' onChange={handleChange}/>
       
        <button onClick={handleSubmit}>Register</button>
        {/* {err  && <p>{err}</p>} */}
        
        <span>Do you have an account <Link to={"/Login"}> Login</Link> </span> 
    </form>
    </div>
    </div>
  )
}

export default RegisterPage