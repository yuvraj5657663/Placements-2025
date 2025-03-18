import React from 'react'
import { SiFacebook, SiInsta360, SiInstagram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import pic from "../assets/yuvraj.png";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text 4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
               className="text-red-700 font-bold first-letter:uppercase"
                strings={["developer", "designer", "freelancer" ,"coder","programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Yuvraj Kumar is a dedicated Full Stack Software Developer with
              expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js,
              MongoDB, PHP, WordPress, and SEO. He is currently preparing for a
              Full Stack Software Engineer role in top MNCs while strengthening
              his knowledge of Java, Spring, and Spring Boot. With a keen
              interest in artificial intelligence, he is developing his own AI
              project, InfinityAI, focusing on detailed planning and execution.{" "}
            </p>
            <br />
            {/* socail media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Availble on</h1>
                <ul className="flex space-x-5 ">
                  <li>
                    {""} <SiFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""} <SiInstagram className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""} <MdMarkEmailRead className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    {""} <BsLinkedin className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">currently working on</h1>
                <ul className="flex space-x-5 ">
                  <li>
                    {""}{" "}
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </li>
                  <li>
                    {""}{" "}
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </li>
                  <li>
                    {""}{" "}
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full  border-[2px]cursor-pointer" />
                  </li>
                  <li>
                    {""}{" "}
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-5 ">
            <img
              src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="profile-alternative profile" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
