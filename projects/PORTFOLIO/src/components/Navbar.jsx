import React from 'react'
import pic from "../assets/yuvraj.png";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
    const [menu, setMenu] = React.useState(false);
    const [close, setClose] = React.useState(false);
    const navItems = [
        {
            id: 1,
            name: "HOME",
        },
        {
            id: 2,
            name: "ABOUT",
        },
        {
            id: 3,
            name: "PORTFOLIO",
        },
        {
            id: 4,
            name: "EXPERIENCE",
        },
        {
            id: 5,
            name: "CONTACT",
        }
    ]
    return (
      <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-2">
              <img
                src={pic}
                className="h-12 w-12 rounded-full"
                alt="profile-pic"
              />
              <h1 className='"font-semibold text-xl cursor-pointer'>
                Yuvraj <span className="text-green-500 text-2xl">Kumar</span>
                <p className="text-sm">Web devloper</p>
              </h1>
            </div>
            {/* destop navbar */}
            <div>
              <ul className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <li className='hover:scale-105 duration-200 font-semibold cursor-pointer'
                        key={item.id}>{item.name}</li>
                ))}
              </ul>
              <div onClick={() => setMenu(!menu)} className="md:hidden">
                {menu ? <HiMenu size={24} /> : <IoCloseSharp size={24} />}
              </div>
            </div>
          </div>

          {/* mobile navbar */}
          {menu && (
            <ul className="md:hidden flex flex-col h-screen font-semibold items-center justify-center space-y-3 text-xl">
              {navItems.map((item) => (
                  <li className='hover:scale-105 duration-200 font-semibold cursor-pointer'
                      key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
}

export default Navbar;
