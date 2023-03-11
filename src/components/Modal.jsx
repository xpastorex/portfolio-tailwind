import React from "react";
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal({abrirModal}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-30 bg-black overflow-hidden opacity-95">
      <button className="absolute top-10 right-24 text-white" onClick={abrirModal}><AiFillCloseCircle size={60} color="#cb4242"/></button>
    </div>
  );
}

export default Modal;
