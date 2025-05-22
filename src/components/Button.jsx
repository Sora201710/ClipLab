import React from 'react'

const Button = ({text, icon}) => {
  return (
    <button className='px-4 w-15 h-15  bg-cyan-500 hover:bg-cyan-600 cursor-pointer p-2 rounded-full flex items-center justify-center focus:outline-none'>
        <img src={icon} alt={text} />
    </button>
  )
}

export default Button
