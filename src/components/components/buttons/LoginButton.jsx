import React from 'react'
import "./button.css"
import { ArrowDown } from 'lucide-react'


const LoginButton = ({text,onClick}) => {
  return (
    <div className='loginButton'
    onClick={onClick}>{text}<ArrowDown size={16} className='ml-1'/></div>
  )
}

export default LoginButton