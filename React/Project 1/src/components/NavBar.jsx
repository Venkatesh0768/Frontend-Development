import React from 'react'

function NavBar() {
  return (
    <nav className='w-[15%] h-screen bg-zinc-300 px-15 py-10'>
        <a  className='bg-blue-500 px-4 py-2 rounded-xl text-white' href="/create">Add a product</a>
        <h1 className='mt-5 text-xl font-bold'>Category Filter</h1>
        <ul>
          <li className='mt-4 font-semibold '>category 1</li>
        </ul>
    </nav>
  )
}

export default NavBar;