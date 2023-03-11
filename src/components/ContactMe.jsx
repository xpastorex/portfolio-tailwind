import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ozeuxv",
        "template_9f9skqn",
        form.current,
        "sAdQ71L4hi5StQthJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Email sended succesfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          return;
        }
      );
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4/5 md:w-1/3">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-5xl dark:text-white">
            Contact Me
          </h1>
        </div>
        <div className="pt-10">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <input
                required
                className="border-2 border-none w-full xl:w-3/4 bg-blue-500 py-2 placeholder:text-white text-center placeholder:text-lg text-lg  text-white focus:outline-none rounded-md hover:scale-105 focus:scale-105 transition-all dark:bg-slate-700 dark:placeholder:text-gray-400"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                required
                className="border-2 border-none w-full xl:w-3/4 bg-blue-500 py-2 placeholder:text-white text-center placeholder:text-lg text-lg  text-white focus:outline-none rounded-md hover:scale-105 focus:scale-105 transition-all dark:bg-slate-700 dark:placeholder:text-gray-400"
                type="email"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                required
                rows="4"
                className="resize-none block p-2.5 w-full xl:w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border placeholder:text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="Name"
                name="message"
              />

              <button className="bg-blue-500 text-white px-3 py-2 text-xl rounded-md hover:scale-105 hover:bg-blue-600 transition-all">
                Send Message
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
