import React from 'react'

const Card = ({user,handleRemove, id}) => {
  return (
    <>
          <div key={id} className="flex justify-center flex-col h-100 items-center w-60  bg-white text-black p-3 gap-2 rounded-xl">
        <div className="w-20 h-20 rounded-full bg-gray-100"> <img src={user.image} className='w-full h-full rounded-full object-cover' alt="" /></div>
        <h1 className='font-bold text-2xl'>{user.name}</h1>
        <p className='opacity-60 text-sm'>{user.email}</p>
        <p className='text-center text-xs' >{user.desc}</p>
        <button className='btn bg-red-400 text-white font-semibold' onClick={() => handleRemove(id)} >Remove</button>

        </div>
    </>
  )
}

export default Card