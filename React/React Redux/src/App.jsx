import React from 'react'
import { useSelector } from 'react-redux'

function App() {
  const d = useSelector((state)=> state.userReducer);
  console.log(d);
  
  return (
    <div className='bg-zinc-900 w-full h-screen flex justify-center  '>
        <div className='w-290 h-60 bg-zinc-700 rounded-2xl  mt-20 flex justify-center items-center'>
            <h1 className='text-white text-6xl'>React Redux</h1>
        </div>
    </div>
  )
}

export default App