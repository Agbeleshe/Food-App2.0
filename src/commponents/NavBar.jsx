import React, { useState } from 'react'

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai'
import { GiHotMeal } from 'react-icons/gi'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" Parent flex text-2xl md:text-3xl  xl:text-4xl px-2">
          Bioba
          <span className="flex font-bold pr-5">
            Eats <GiHotMeal className="ml-[5px]  mt-[5px]" parent={'Parent'} />
          </span>
        </h1>
        <div className=" cursor-pointer hidden md:flex bg-gray-300 rounded-full text-[14px] ">
          <p
            className="focus:bg-black focus:rounded-full focus:text-white p-2"
            tabindex="1"
          >
            Delivery
          </p>
          <p
            className="p-2 focus:bg-black focus:rounded-full focus:text-white "
            tabindex="0"
          >
            Pick Up
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex bg-slate-300 p-1 w-[400px] md:w-[300px] xl:w-[500px] rounded-full">
        <AiOutlineSearch size={25} />
        <input
          className="focus:outline-none px-1 w-full bg-transparent"
          type="text"
          placeholder="Seach foods"
        />
      </div>

      {/* Shopping Cart */}
      <div>
        <button className="hidden md:flex bg-black text-white py-2 items-center rounded-full hover:bg-slate-300 hover:text-black hover:border-none active:bg-black active:text-white transition-all duration-500 ease-in-out">
          <BsFillCartFill size={20} className="mr-2" /> Cart
        </button>
      </div>

      {/* Mobile Menu */}
      {/* OverLay */}
      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ''
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 z-10 bg-white w-[300px] h-screen duration-300'
            : 'fixed top-0 left-[-100%] z-10 bg-white w-[300px] h-screen duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="hover:animate-spin text-white absolute top-4 right-4 cursor-pointer"
        />
        <h1 className=" bg-black text-white p-4 flex text-xl ">
          Bioba
          <span className="flex font-bold pr-5">
            Eats
            <GiHotMeal
              className="hover:animate-ping ml-[5px]  mt-[5px]"
              parent={'Parent'}
            />
          </span>
        </h1>
        {/* nav list */}

        <nav>
          <ul className=" text-blacks flex flex-col px-3">
            <li className="hover:text-red-600 py-2 flex text-sm">
              <TbTruckDelivery size={25} className="mr-4" />
              <h1>Orders</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <MdFavorite size={25} className="mr-4" />
              <h1>Favorite</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <FaWallet size={25} className="mr-4" />
              <h1>Wallet</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <MdHelp size={25} className="mr-4" />
              <h1>Help</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <AiFillTag size={25} className="mr-4" />
              <h1>Promotions</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <BsFillSaveFill size={25} className="mr-4" />
              <h1>Best 0nes</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <FaUserFriends size={25} className="mr-4" />
              <h1>Invite Friends</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default NavBar
