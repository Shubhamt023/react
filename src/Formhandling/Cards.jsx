import React from 'react'
import Card from '../components/Card'

const Cards = ({users, handleRemove}) => {
  return (
    <>
        <div className="w-100  p-3 flex justify-center  my-3 gap-3 flex-wrap items-stretch">
       {users.map((item,index) =>{
        return(
            <Card user={item} handleRemove={handleRemove} key={index} id={index}/>
        )
       })}
        </div>
    </>
  )
}

export default Cards