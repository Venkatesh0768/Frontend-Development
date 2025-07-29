import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {name} = useParams()
    const  navigate = useNavigate();

    const backToHandler = ()=>{
        navigate(-1);
    }
  return (
    <div className='p-4 '>
        <h1 className='font-bold text-2xl '>Name {name}</h1>
        <button onClick={backToHandler} className='bg-amber-500 p-2 px-4 rounded-md hover:bg-amber-200 text-white' >GO BACK</button>
    </div>
  )
}

export default UserDetails