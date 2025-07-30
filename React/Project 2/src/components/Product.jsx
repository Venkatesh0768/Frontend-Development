import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div className='flex justify-between items-center w-full h-60  pt-10 mt-20 '>
        <span className='text-5xl font-medium flex justify-center items-center w-[30%]  font-satoshi '>{val.name}</span>
        <div className='w-[50%]  flex flex-col justify-center items-center'>
            <div className='w-[40%] flex flex-col'>
            <p>{val.descripation}</p>
            <div className='gap-5 pt-4 flex justify-center items-center'>
                <Button name={"Live Project"}/>
                <Button name={"Case Project"}/>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Product