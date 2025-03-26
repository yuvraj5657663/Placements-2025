import React, { useState } from "react";
import pic from "../assets/yuvraj.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="container fixed top-0 left-0 right-0 h-16 px-4 mx-auto shadow-md max-w-screen-2xl md:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-2">
            <img
              src={pic}
              className="w-12 h-12 rounded-full"
              alt="profile-pic"
            />
            <h1 className='"font-semibold text-xl cursor-pointer'>
              Yuvraj <span className="text-2xl text-green-500">Kumar</span>
              <p className="text-sm">Web devloper</p>
            </h1>
          </div>
          {/* destop navbar */}
          <div>
            <ul className="hidden space-x-8 md:flex">
              {navItems.map(({ id, text }) => (
                <li
                  className="duration-200 cursor-pointer hover:scale-105"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="flex flex-col items-center justify-center h-screen space-y-3 text-xl md:hidden">
              {navItems.map(({ id, text }) => (
                <li
                  className="font-semibold duration-200 cursor-pointer hover:scale-105"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
