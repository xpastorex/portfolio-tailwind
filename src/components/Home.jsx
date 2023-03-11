import Logo from "../img/PfLogo.jpg";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Vite from "../../public/vite.svg";

function Home() {
  return (
    <div
      id="home"
      className=" flex flex-col justify-around items-center ease-in-out duration-150 text-white md:flex-row pt-32 md:pt-0"
    >
      <div className="flex h-screen w-4/5 md:w-1/2 md:h-1/3 flex-col justify-evenly text-center bg-transparent text-black dark:text-white z-10 rounded-md md:rounded-full md:bg-blue-500 dark:bg-indigo-500 md:p-28 shadow-2xl shadow-blue-500">
        <h1 className=" text-3xl md:text-5xl font-bold">Hi, My name is Matias Campos</h1>
        <span className="md:text-2xl pt-12 md:pt-0">
          This <strong>Web Site</strong> is made with:
        </span>
        <div className="flex w-full flex-col md:flex-row items-center md:justify-between pt-10 gap-11 xl:flex-wrap">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="flex h-auto hover:scale-110 ease-in-out duration-150 flex-col items-center shadow-xl w-fit bg-white dark:bg-slate-700  rounded-lg p-2"
          >
            <SiTailwindcss size={50} color="#07ADCA" />
            <h1>TailWind CSS</h1>
          </a>
          <a
            href="https://en.reactjs.org/"
            target="_blank"
            className="flex h-auto hover:scale-110 ease-in-out duration-150 flex-col items-center justify-around shadow-xl w-24 bg-white dark:bg-slate-700  rounded-lg p-2"
          >
            <FaReact size={50} color="#07ADCA" />
            <h1>React</h1>
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            className="flex h-auto hover:scale-110 ease-in-out duration-150 flex-col items-center justify-around shadow-xl w-24 bg-white dark:bg-slate-700 rounded-lg p-2"
          >
            <img src={Vite} alt="vite-logo" />
            <h1>Vite</h1>
          </a>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center ">
        <img
          className="rounded-full shadow-2xl h-64 sm:h-1/2 shadow-indigo-500"
          src={Logo}
          alt="PfLogo"
        />
      </div>
    </div>
  );
}

export default Home;
