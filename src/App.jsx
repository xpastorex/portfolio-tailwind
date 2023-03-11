import { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [theme, setTheme] = useState("light");
  const [modal ,setModal] = useState(false)
  const [modalNombre , setModalNombre] = useState("")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  const abrirModal = () =>{
    setModal(!modal);
  }
  

  return (
    <>
      <div className="font-nunito bg-slate-50 dark:bg-slate-800 w-screen ">
        <NavBar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Home />
        <AboutMe />
        <Projects modal={modal} abrirModal={abrirModal} setModalNombre={setModalNombre}/>
        <ContactMe/>
      </div>
      
    </>
  );
}

export default App;
