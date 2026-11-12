import React from 'react'
import "./button.css"

const LoginButton = ({text,onClick}) => {
  return (
    <div className='loginButton'
    onClick={onClick}>{text}</div>
  )
}

export default LoginButton