import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdFormatColorFill } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [darkMode, setDarkMode] = useState(false);
  const [name , setName] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate();
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const generateName = (length = 8) => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    // Ensure the generated name starts with "Amit"
    const prefix = "Amit";
    const remainingLength = length - prefix.length;

    if (remainingLength <= 0) {
      return prefix;
    }

    const randomSuffix = Array.from({ length: remainingLength }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");

    return prefix + randomSuffix;
  };

  const handleClose = () => {
    navigate("/userPage");
  };

  const handleGenerate = () => {
    const name = generateName();
    setName(name)

    if(inputRef.current){
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-gray-100 dark:bg-gray-800 h-[90%] w-3/4 p-6 rounded-lg shadow-lg">
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Settings
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition"
            >
              {darkMode ? (
                <BsSun className="h-6 w-6 text-yellow-400" />
              ) : (
                <BsMoon className="h-6 w-6 text-gray-800" />
              )}
            </button>
            <IoClose
              onClick={handleClose}
              className="h-8 w-8 text-gray-800 dark:text-gray-100 cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 transition"
            />
          </div>
        </header>
        <div className="flex mt-6">
          <aside className="w-52 text-lg space-y-4">
            <h2 className="flex items-center hover:text-blue-600  text-gray-700 dark:text-gray-200">
              <RiAccountCircleLine className="mr-3 text-xl" /> Account
            </h2>
            <h2 className="flex items-center text-gray-700 dark:text-gray-200">
              <MdFormatColorFill className="mr-3 text-xl" /> Theme
            </h2>
            <h2 className="flex items-center text-gray-700 dark:text-gray-200">
              <VscSettings className="mr-3 text-xl" /> Advanced
            </h2>
            <h2 className="flex items-center text-gray-700 dark:text-gray-200">
              <MdOutlineRoomPreferences className="mr-3 text-xl" /> User
              Preferences
            </h2>
          </aside>
          <div className="flex-1 ml-8 pl-4 border-l h-[550px] border-gray-300 dark:border-gray-600 overflow-y-scroll">
            <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Personal Info
            </h1>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Account type: <span className="font-bold">Student</span>
            </p>
            <form>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Profile
              </h2>
              <div className="relative w-full max-w-md ">
                <input
                value={name}
                ref={inputRef}
                  type="text"
                  id="floatingInputName"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                  onBlur={()=>{}}
                />
                <CgArrowsExchangeAlt
                  className="absolute left-[410px] top-3 h-5 w-5"
                  onClick={handleGenerate}
                />
                <label
                  htmlFor="floatingInputName"
                  className="absolute text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  User Name
                </label>
              </div>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                The name is visible to other users during question comment
                discussion.
              </p>
              <div className="relative w-full max-w-md  mb-6">
                <input
                  disabled
                  type="text"
                  id="floatingInputEmail"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <CiLock className="absolute left-[410px] top-3 h-5 w-5" />
                <label
                  htmlFor="floatingInputEmail"
                  className="absolute text-gray-500  dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  Email
                </label>
              </div>
              <div className="relative w-full max-w-md  mb-6">
                <input
                  type="text"
                  id="floatingInputEmail"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floatingInputEmail"
                  className="absolute text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  First Name
                </label>
              </div>
              <div className="relative w-full max-w-md  mb-6">
                <input
                  type="text"
                  id="floatingInputEmail"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floatingInputEmail"
                  className="absolute text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  Last Name
                </label>
              </div>

              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Education
              </h2>
              <div className="relative w-full max-w-md mb-6">
                <input
                  disabled
                  type="text"
                  id="floatingInputOther"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <CiLock className="absolute left-[410px] top-3 h-5 w-5" />
                <label
                  htmlFor="floatingInputOther"
                  className="absolute text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  Enter university
                </label>
              </div>
              <div className="relative w-full max-w-md  mb-6">
                <input
                  type="text"
                  id="floatingInputClass"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floatingInputClass"
                  className="absolute  text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  Class
                </label>
              </div>
              <div className="relative w-full max-w-md mb-6">
                <input
                  type="text"
                  id="floatingInputGraduation"
                  className="block px-4 py-2 w-full text-gray-900 dark:text-gray-100 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600 dark:focus:border-yellow-400 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floatingInputGraduation"
                  className="absolute text-gray-500 dark:text-gray-300 transform transition-all duration-300 left-4 top-2 scale-100 origin-[0] bg-gray-100 dark:bg-gray-800 px-1 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:peer-focus:text-yellow-400 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 cursor-text"
                >
                  Year of Graduation
                </label>
              </div>
            </form>
            <hr className="w-full my-10 bg-gray-600 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
