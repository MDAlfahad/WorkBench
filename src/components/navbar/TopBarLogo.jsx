import React from 'react'

const TopBarLogo = () => {
  return (
    <div className='flex w-full h-32 items-center justify-between px-6 lg:px-20 border border-slate-200'>
        <div className='flex items-center border-b border-primary'>
            <h1 className='text-7xl font-bold '>DPS</h1>
        <p className='text-md '>Delhi Public <br /> School</p>
        </div>
        <div>
            <div className='w-24 h-24 bg-primary rounded-full'></div>
        </div>
    </div>
  )
}

export default TopBarLogo