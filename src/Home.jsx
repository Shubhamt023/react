import React from 'react'
import { useState } from "react"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import PracticeComponent from "./components/PracticeComponent"
import FormComponent from "./components/FormComponent"
import Cards from "./Formhandling/Cards"
import Form from "./Formhandling/Form"






const Home = () => {
    const data= [
        {
          id:1,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'Sprinklers',
          added:false,
          artist:"Dojo Cat"
        },
        {
          id:2,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'What Have You Done',
          added:false,
          artist:"Shawn Mendes"
        },
        {
          id:3,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'Drum Roll',
          added:false,
          artist:"American Dreams"
        },
        {
          id:4,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'ME!!!',
          added:false,
          artist:"Taylor Swift"
        },
        {
          id:5,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'Ventures',
          added:false,
          artist:"Coldplay"
        },
        {
          id:6,
          image:'https://images.unsplash.com/photo-1535083252457-6080fe29be45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          name:'Ma Ma Mia!!',
          artist:"Dojo Cat",
          added:true
        },
      ]
    
      const [musicData , setMusicData] = useState(data);
      const handleAdded = (index) =>{
        setMusicData((prev) => {
          return prev.map((item, itemIndex) =>{
            if(itemIndex === index) return{...item , added: !item.added}
    return item;
          })
        })
      }
    
      // const [ data, setData] = useState({name:"Raman" , banned:false});
      // const [val, setVal] = useState([1,2,3,4,5,6]);
    
    //   const data = [
    //     {
    //       id:1,
    //       name:"sumit",
    //       profession:"Artist",
    //       friend:false,
    //       image:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:2,
    //       name:"John Doe",
    //       profession:"Artist",
    //       friend:false,
    //       image:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:3,
    //       name:"Alina Dewis",
    //       profession:"Artist",
    //       friend:false,
    //       image:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //     {
    //       id:4,
    //       name:"Sturat Brook",
    //       profession:"Artist",
    //       friend:false,
    //       image:"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     },
    //   ]
    //   console.log(data);
    //   const [friendReq, setFriendReq] = useState(data);
    
    //   const handleRequest = (cardIndex) =>{
    // setFriendReq((prev) =>{
    //   return prev.map((item, index) =>{
    //     if(index === cardIndex){
    //       return {...item, friend: !item.friend}
    //     }
    //     return item;
    //   })
    // })
    //   }
    
    const [user , setUser] = useState([]);
    
    const formHandle = (data) =>{
      setUser([...user , data])
    }
    
    const handleRemove =(id) =>{
    setUser(() => user.filter((item,index) => index!=id))
    }
  return (
   <>
        <main className="bg-black">
      {/* <Navbar />
      <Hero />
      <Highlights /> */}

      {/* <div className="w-100 h-100 p-3">
        <h1>Name: {data.name} </h1>
        <h3>Banned: {data.banned.toString()}</h3>
        <button className={`px-3 py-1  rounded-full text-white mt-3 ${data.banned === true  ?"bg-blue" : "bg-red-600" }`} onClick={() => setData({...data, banned: !data.banned})}>{data.banned === true  ?"Unbanned" : "Banned"}</button>
      

      {val.map(item =>{
         return <h1>{item}</h1>
      })}
      <button onClick={() =>{
        setVal(() =>  val.filter((item,index) => index!=val.length -1))
      }}>Remove Items</button>
      </div> */}

{/* <div className="w-full p-5 h-full flex flex-row  justify-center items-center gap-5">
{friendReq.map((item,index) =>{
 return  <PracticeComponent index={index} name={item.name} profession={item.profession} image={item.image} friends={item.friend} handleClick={handleRequest}/>
})}
</div> */}

<div>
<div className="navbar flex flex-row gap-10 flex-wrap justify-center items-center my-10">
  <button className='px-4 py-1 rounded-md bg-orange-600'>{musicData.filter(item => item.added).length} Favourite Songs</button>

</div>
 <div className="flex flex-row gap-10 flex-wrap justify-center items-center my-10">
 {musicData.map((item, index) =>{
return <PracticeComponent image={item.image} index={index} name={item.name} artist={item.artist} added={item.added} handleClick={handleAdded}  />
  })}
 </div>
</div>
<FormComponent />
<Cards handleRemove={handleRemove} users= {user} />
<Form formHandle={formHandle} />
    </main>
   </>
  )
}

export default Home