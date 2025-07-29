import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='bg-zinc-100 p-4 flex justify-center gap-5'>
      <Link to="/user/venky" className='bg-amber-300 p-2 px-4 rounded-md hover:bg-amber-200'>Venky</Link>
      <Link to="/user/adithi" className='bg-amber-300 p-2 px-4 rounded-md hover:bg-amber-200'>Adithi</Link>
      <Link to="/user/venkatesh" className='bg-amber-300 p-2 px-4 rounded-md hover:bg-amber-200'>Venkatesh</Link>
    </div>
  )
}

export default User
