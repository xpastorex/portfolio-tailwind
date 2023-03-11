import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { SiMicrosoftsqlserver } from "react-icons/si";
import Csharp from "../img/ccharp.png";
import DuocLogo from "../img/duoclogo.png";

function AboutMe() {

  
  return (
    <div id="about" className="md:h-screen flex w-screen flex-col justify-around items-center ease-in-out duration-150 text-center text-black md:flex-row dark:text-white ">
      <div className="md:w-1/2 w-screen h-screen justify-center flex flex-col items-center text-center p-5 md:p-0">
        <h1 className="text-3xl md:text-5xl font-bold pb-10">About Me</h1>
        <span className="md:text-2xl">
          Im a <strong>Web Developer</strong> that likes to learn{" "}
          <strong>New Stuff</strong>
          <h1>I studied in Duoc UC</h1>
        </span>
        <img className="md:w-1/2" src={DuocLogo} alt="" />
        <div className="md:w-full w-screen flex justify-around  items-center md:px-10 xl:px-32 pt-14">
          <button className="bg-green-500 border-slate-900 p-5 mt-5 rounded-md w-36 hover:scale-110 ease-in-out duration-75">
            Download SV
          </button>
          <button className="bg-green-500 border-slate-900 p-5 mt-5 rounded-md w-36 hover:scale-110 ease-in-out duration-75">
            Duoc UC
          </button>
        </div>
      </div>
      <div className="h-screen w-screen md:w-1/2 justify-center flex flex-col items-center md:h-1/2">
        <h1 className="text-3xl md:text-5xl font-bold ">My Skills</h1>
        <hr className="w-80 mt-4" />
        <div className=" h-full w-screen md:w-4/5 justify-center items-center gap-16 flex flex-wrap p-10">
          <div className="flex justify-center h-24 text-center w-28 hover:scale-110 ease-in-out duration-150 flex-col items-center shadow-xl dark:bg-slate-700 md:w-32 rounded-lg p-2">
            <SiTailwindcss size={50} color="#07ADCA" />
            <h1>TailWind CSS</h1>
          </div>
          <div className="flex h-24 hover:scale-110 ease-in-out  duration-150 flex-col items-center justify-around shadow-xl dark:bg-slate-700 w-28 md:w-32 rounded-lg p-2">
            <FaReact size={50} color="#07ADCA" />
            <h1>React</h1>
          </div>
          <div className="flex h-24 hover:scale-110 ease-in-out duration-150 flex-col items-center justify-around shadow-xl dark:bg-slate-700 w-28 md:w-32 rounded-lg p-2">
            <DiSass size={50} color="#C76494" />
            <h1>Sass</h1>
          </div>
          <div className="flex h-24 hover:scale-110 ease-in-out duration-150 flex-col items-center justify-around shadow-xl dark:bg-slate-700 w-28 md:w-32 rounded-lg p-2">
            <SiMicrosoftsqlserver size={50} color="#A01C20" />
            <h1>Sql Server</h1>
          </div>
          <div className="flex h-24 hover:scale-110 ease-in-out duration-150 flex-col items-center justify-around shadow-xl dark:bg-slate-700 w-28 md:w-32 rounded-lg p-2">
            <img src={Csharp} alt="c#" />
            <h1>C#</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
