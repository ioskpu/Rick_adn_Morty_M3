import React from 'react'
import { useState } from 'react';
import validation from './validation';
import rickmorty from "../../assets/Rick_and_Morty.png"
import style from "./Form.module.css"

function Form ({ handleLogin }) {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [name]: value})
    setErrors(validation({...userData, [name]: value}));
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    handleLogin(userData);
  }

  return (
    <div className={style.formBack}>
      <div className={style.formContainer}>

        <h2>Bienvenido</h2>
        <p>Ingrese usuario y contraseña para acceder</p>

        <img src={ rickmorty } alt="Rick and Morty" />

        <form className={style.form} onSubmit={handleSubmit}>

          <p>
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="username" id="email" placeholder="Ingrese su mail" value={userData.username} onChange={handleInputChange}/>
          </p>
          {errors.username && <p className={style.error}>{errors.username}</p>}

          <p>
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleInputChange}/>
          </p>
          {errors.password && <span className={style.error}>{errors.password}</span>}

          <p>
            <button className='btn' type="submit" disabled={!userData.username || !userData.password || errors.username || errors.password}>LOGIN</button>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Form