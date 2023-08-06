import React, { useEffect, useState } from 'react'
import logo from '../assets/images/Logonetflix.png'
import avatar from '../assets/images/Netflix-avatar.png'
const Navbar = () => {
  const [show, setShow]= useState(false)

  const handleTransition = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleTransition)
    return ()=> window.removeEventListener('scroll', handleTransition)
  }, [])

  return (
    <>
      <div>
        <div
          className={`flex flex-row justify-between bg-[#111] fixed top-0 w-full p-10 z-[1] ${
            !show && "transition-all duration-500 ease-in bg-transparent"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            className="fixed left-0 w-[10%] h-[5%] pl-5 cursor-pointer"
          />
          <img
            src={avatar}
            alt=""
            className="w-[30px] h-[30px] fixed right-5 cursor-pointer"
          />
        </div>
        <h1>peep</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
        <h1>join</h1>
      </div>
    </>
  );
}

export default Navbar