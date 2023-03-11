import React from "react";
import Logo from "../img/LogoHeader.png";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function NavBar({ handleThemeSwitch, theme }) {
  return (
    <nav className="z-20 w-screen fixed flex top-0 justify-between px-10 bg-slate-50 shadow-sm dark:bg-slate-800 py-5 dark:text-white items-center left-0">
      <div className="container mx-auto py-1 flex justify-between items-center ">
        <div className="  flex items-center gap-5 w-1/4">
          <img className="w-10" src={Logo} alt="LogoImg" />
          <h1 className="font-bold text-2xl text-indigo-500 uppercase md:text-2xl">
            Matias Campos
          </h1>
        </div>
        <ul className=" gap-5 text-xl justify-center hidden md:flex w-1/2">
          <a href="#home" className="hover:scale-110 ease-in-out duration-150">
            <li>Home</li>
          </a>
          <a href="#about" className="hover:scale-110 ease-in-out duration-150">
            <li>About Me</li>
          </a>
          <a href="#project" className="hover:scale-110 ease-in-out duration-150">
            <li>Projects</li>
          </a>
          <a href="#" className="hover:scale-110 ease-in-out duration-150">
            <li>Contact Me</li>
          </a>
        </ul>
        <div className=" justify-end flex md:w-1/4">
          <button onClick={handleThemeSwitch}>
            {theme === "dark" ? (
              <BsSunFill size={30} color="#F7C600" />
            ) : (
              <MdDarkMode size={30} color="#1E293B" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
