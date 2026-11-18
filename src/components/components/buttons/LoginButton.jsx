import React from 'react'
import "./button.css"
import { ChevronDown } from 'lucide-react'


const LoginButton = ({text,onClick}) => {
  return (
    <div className='loginButton'
    onClick={onClick}>{text}<ChevronDown size={16} className='ml-1'/></div>
  )
}

export default LoginButton