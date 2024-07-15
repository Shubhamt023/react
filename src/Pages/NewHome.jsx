import React from 'react'
import { NavLink } from 'react-router-dom'

const NewHome = () => {
  return (
    <>
        <nav className='flex justify-center items-center gap-4'>
            <NavLink to='/' style={(e) =>{
                return {
                    color: e.isActive ?"orange" : ""
                }
            }}>
                Home
            </NavLink>
            <NavLink to='/about' style={(e) =>{
                return {
                    color: e.isActive ?"orange" : ""
                }
            }}>
                About
            </NavLink>
            <NavLink to='/friends' style={(e) =>{
                return {
                    color: e.isActive ?"orange" : ""
                }
            }}>
                Friends
            </NavLink>
            <NavLink to='/contact' style={(e) =>{
                return {
                    color: e.isActive ?"orange" : ""
                }
            }}>
                Contact
            </NavLink>
            
        </nav>
    </>
  )
}

export default NewHome