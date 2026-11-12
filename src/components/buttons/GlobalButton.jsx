import React from 'react'

const GlobalButton = ({text, onClick}) => {
  return (
    <div className='px-4 py-2 border border-black rounded-sm cursor-pointer'
    onClick={onClick}>{text}</div>
  )
}

export default GlobalButton