import React from 'react'
import Card from './Card'

function Cards({users , handleRemove}) {
  return (
    <div className='bg-zinc-200 w-full  m-3 flex flex-wrap '>
        {users.map((user , index)=>{
           return <Card key={index} index={index} user={user} handleRemove={handleRemove}/>
        })}

    </div>
  )
}

export default Cards