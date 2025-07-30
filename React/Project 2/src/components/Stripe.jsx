import React from 'react'

function Stripe({image , count}) {
  return (
    <div className='w-80 h-15 items-center gap-2  flex justify-between  p-5 border'>
        <img src={image} alt="" />
        <h1>{count}</h1>
    </div>
  )
}

export default Stripe