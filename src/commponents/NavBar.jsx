import React, { useState } from "react";

import { AiOutlineHome, AiOutlineMenu, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { GiHotMeal } from "react-icons/gi";
import { MdOutlineFindInPage, MdFavorite, MdHelp } from "react-icons/md";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center px-4 py-1 md:px-5 fixed z-10 bg-white w-full shadow-md">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" Parent flex text-2xl sm:text-4xl md:text-4xl  xl:text-4xl px-2">
          Kitchen
          <span className="flex font-bold pr-5">
            Connect
            <GiHotMeal className="ml-[5px]  mt-[5px]" parent={"Parent"} />
          </span>
        </h1>
      </div>

      {/* Mobile Menu */}
      {/* OverLay */}
      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 z-10 bg-white w-[300px] h-screen duration-300"
            : "fixed top-0 left-[-100%] z-10 bg-white w-[300px] h-screen duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="hover:animate-spin text-white absolute top-4 right-4 cursor-pointer"
        />
        <h1 className=" bg-black text-white p-4 flex text-xl ">
          Kitchen
          <span className="flex font-bold pr-5">
            Connect
            <GiHotMeal
              className="hover:animate-ping ml-[5px]  mt-[5px]"
              parent={"Parent"}
            />
          </span>
        </h1>
        {/* nav list */}

        <nav>
          <ul className=" text-blacks flex flex-col px-3">
            <li className="hover:text-red-600 py-2 flex text-sm">
              <AiOutlineHome size={25} className="mr-4" />
              <h1>Home</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <MdFavorite size={25} className="mr-4" />
              <h1>Our Kitchen</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <MdOutlineFindInPage size={25} className="mr-4" />
              <h1>About</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <MdHelp size={25} className="mr-4" />
              <h1>Help</h1>
            </li>
            <span className="w-full h-0 border border-solid border-black-500"></span>
            <li className="hover:text-red-600 py-2 flex text-sm">
              <AiFillTag size={25} className="mr-4" />
              <h1>More</h1>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
