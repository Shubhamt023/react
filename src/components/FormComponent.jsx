import React, { useRef, useState } from 'react'

const FormComponent = () => {
    const [data,setData] = useState({name:""})
    const name = useRef(null);
    const age= useRef(null);
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name.current.value , age.current.value,);
    console.log(data)
}


  return (
   <>
   <div className=" flex justify-center items-center flex-col">
   <form action="" onSubmit={handleSubmit} className=" flex justify-center items-center flex-col gap-5">
  <input ref={name} type="text" placeholder="Name" style={{color:"black"}} onChange={(e) =>setData({name: e.target.value})} id="" />
  <input ref={age} type="text" className='text-dark' style={{color:"black"}} placeholder='Age'/>
  <input type="submit" />
</form>
   </div>
   </>
  )
}

export default FormComponent