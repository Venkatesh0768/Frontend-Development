import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormData}) {
    
    const {register , handleSubmit , reset } =  useForm(); 

    const handleFormSubmit = (data)=>{
        handleFormData(data);
        reset();
    }

   
 
  return (
    <div className='flex gap-3'>
        <form className='gap-1.5 space-x-4' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' type="text" placeholder='name'/>
            <input {...register('email')}  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' type="text"  placeholder='email'/>
            <input {...register('image')}  className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500' type="text"  placeholder='image url'/>
            <input className='bg-orange-500 px-4 py-2  rounded-lg
            text-white' type="submit" />
        </form>
    </div>
  )
}

export default Form