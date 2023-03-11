import React, { useState } from "react";
import Gastos from "../img/Gastos.png";
import Citas from "../img/Citas.png";
import Pokedex from '../img/pokedex.png'

function Projects({ modal, abrirModal, setModalNombre }) {
  return (
    <>
      <div id="project" className=" text-black dark:text-white text-center pt-32 w-screen pb-32 md:h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold md:text-5xl">Projects</h1>
        <span>
          This are some of my <strong>Projects</strong>
        </span>
        <div className="w-screen pt-10 justify-center items-center flex flex-wrap gap-10">
          <div className=" w-96 py-10 gap-2 bg-indigo-500 rounded-lg shadow-lg shadow-slate-400 flex justify-center items-center text-center flex-col">
            <img src={Gastos} className="w-52" alt="controlGastos" />
            <h1 className="font-bold text-2xl">Expense Control</h1>
            <span>
              Application that allows you to manage expenses based on a budget
            </span>
            <div className="w-full flex justify-around">
              <a
                href="https://celadon-fenglisu-000cd9.netlify.app/"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
                target="_blank"
              >
                Visit WebSite
              </a>
              <a
                href="https://github.com/xpastorex/control-gastos"
                target="_blank"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
              >
                Code
              </a>
            </div>
          </div>
          <div className=" w-96 py-10 gap-2 bg-indigo-500 rounded-lg shadow-lg shadow-slate-400 flex justify-center items-center text-center flex-col">
            <img src={Citas} className="w-52" alt="controlGastos" />
            <h1 className="font-bold text-2xl">Pets Appointments</h1>
            <span>System to book an appointment for pets</span>
            <div className="w-full flex justify-around">
              <a
                href="https://splendid-puppy-908af9.netlify.app/"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
                target="_blank"
              >
                Visit WebSite
              </a>
              <a
                href=""
                target="_blank"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
              >
                Code
              </a>
            </div>
          </div>
          <div className=" w-96 py-10 gap-2 bg-indigo-500 rounded-lg shadow-lg shadow-slate-400 flex justify-center items-center text-center flex-col">
            <img src={Pokedex} className="w-52" alt="controlGastos" />
            <h1 className="font-bold text-2xl">Pokedex</h1>
            <span>
              A website made for consult pokemon data using the{" "}
              <strong>PokeApi</strong>
            </span>
            <div className="w-full flex justify-around">
              <a
                href="https://marvelous-cucurucho-eda06f.netlify.app/"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
                target="_blank"
              >
                Visit WebSite
              </a>
              <a
                href=""
                target="_blank"
                className="bg-green-500 w-1/3 rounded-md py-2 shadow-lg font-bold"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*
      modal ? <Modal/> : null*/}
    </>
  );
}

export default Projects;
