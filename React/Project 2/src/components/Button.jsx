import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";


function Button({name}) {
  return (
    <div className='bg-zinc-100  text-black px-6 py-2 rounded-4xl flex justify-center items-center gap-4'>
        <span className='text-sm' >{name}</span>
        <BsArrowReturnRight/>
    </div>
  )
}

export default Button