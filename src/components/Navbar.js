import React from 'react'
import logo from '../assets/images/Logonetflix.png'
import avatar from '../assets/images/Netflix-avatar.png'
const Navbar = () => {
  return (
    <div className=" ">
      <div className="flex flex-row justify-between bg-[#111] fixed top-0 w-full p-10">
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
    </div>
  );
}

export default Navbar