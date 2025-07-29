import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  const [users , setUsers] = useState([])

  const handleFormData =(data)=>{
      setUsers([...users, data])
  }

   const handleRemove = (id)=>{
        setUsers(()=>users.filter((item , index)=> index!=id))
    }

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <Cards handleRemove={handleRemove} users={users}/>
      <Form handleFormData={handleFormData}/>
    </div>
  )
}

export default App