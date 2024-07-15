import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({formHandle}) => {
    const {register , handleSubmit , reset} = useForm();
   const handleFormSubmit =(data) =>{
    formHandle(data);
    reset();
   }
  return (
    
    <>
       <div className=" flex justify-center items-center p-5 my-5">
       <form action="" className='flex flex-row gap-5 text-black' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} type="text" placeholder='Name' className='px-3 py-2 rounded-full' />
            <input {...register('image')} type="text" placeholder='Image' className='px-3 py-2 rounded-full' />
            <input {...register('email')} type="text" placeholder='Email' className='px-3 py-2 rounded-full' />
            
            <input {...register('desc' , { required: true, maxLength: 40 }) } type="text" placeholder='Description' className='px-3 py-2 rounded-full' />
            <input type="submit" className='text-white px-4 py-2 rounded-full border-white border-2'  />
        </form>
       </div>
    </>
  )
}

export default Form