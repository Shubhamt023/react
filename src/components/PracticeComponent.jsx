import React, { useRef } from 'react'


const PracticeComponent = ({index, name, image, artist, added,handleClick}) => {
  return (
    <>
<div className='w-100 h-100 flex justify-center items-center  gap-10 py-5'>


<div className='w-60 p-4 bg-zinc rounded-md relative pb-10 flex gap-4'>
  <div className="w-20 h-20 bg-orange-600 rounded-md"> <img src={image} className='w-full h-full object-cover rounded-md' alt="" /></div>
  <div className="">
    <h1 className='text-xl font-semibold '>{name}</h1>
    <h6>{artist}</h6>
  </div>
  <button onClick={() => handleClick(index)} className={ ` px-4 py-1 rounded-full  absolute bottom-0 left-1/2 whitespace-nowrap -translate-x-[50%]  translate-y-[50%] ${added === true ? "bg-orange-600" :"bg-teal-800"}`}> {added === true ? "Added" :"Add to Favourite"} </button>
</div>
</div>


    </>
  )
}

export default PracticeComponent


// import React from 'react'

// const PracticeComponent = ({index,name,profession,image,handleClick, friends}) => {
//   return (
//     <>
//         <div className='w-60 rounded border-2 p-2 '>
// <img src={image} className='w-100 h-100 rounded my-2 ' alt="" />
// <h1>{name}</h1>
// <h4>{profession}</h4>
// <button onClick={() => handleClick(index)} className='px-3 py-1 bg-blue text-white rounded my-2'>{ friends === true ? "Remove Friend" : "Add Friend"}</button>
//         </div>
//     </>
//   )
// }

// export default PracticeComponent