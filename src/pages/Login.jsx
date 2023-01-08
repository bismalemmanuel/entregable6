import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/home.css'

const Login = () => {

  const navigate = useNavigate()

  const [IsLogged, setIsLogged] = useState(false)
  const { handleSubmit, register, reset } = useForm()

  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.data.token)
        setIsLogged(true)
        navigate('/')
      })
      .catch(err => console.log(err))


    reset({
      email: "",
      password: ""
    })
  }

  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false
    setIsLogged(condition)

  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (IsLogged) {
    return (
      <div >

        <h1> User Logged 😁</h1>
        <button onClick={handleLogout}>logout</button>
      </div>
    )
  }


  return (
    <div className='login'>
      <form onSubmit={handleSubmit(submit)} className='login__frm' >
        <div>
          <label htmlFor="email" className='login__label'>Email  </label>
          <input type="text" id='email' {...register("email")} className='login__input'/>
        </div>
        <div>
          <label htmlFor="password" className='login__labelpass'>Password  </label>
          <input type="password" id='password' {...register("password")} className='login__pass' />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login