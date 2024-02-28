import React from 'react'
import './css/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-cotainer">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text"  placeholder='Your name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Alredy have an Account? <span>Login Here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By Continuing , i agree to the terms of use & privacy policy .</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignUp