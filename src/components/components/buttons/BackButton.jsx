import React from 'react'

const BackButton = ({text, onClick}) => {
  return (
    <div
    onClick={onClick}
    className='w-full px-4 py-2 text-center  border border-primary rounded-full hover:bg-primary hover:text-white animate-in ease-in duration-300 cursor-pointer'>{text}</div>
  )
}

export default BackButton