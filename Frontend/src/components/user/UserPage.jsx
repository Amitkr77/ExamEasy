import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaChevronDown,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import ProCard from "./ProCard";
import { BsSun, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSettings = () => {
    navigate("/Admin");
  };

  const handleLogout = () => {
   navigate("/")
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <nav className="flex justify-between items-center px-8 py-4 bg-transparent dark:bg-gray-900  fixed w-full z-10 transition-colors duration-300">
        <div className="flex items-center">
          <img className="h-16" src="logo.png" alt="Logo" />
        </div>
        <div className="relative flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105">
              <FaUser className="h-8 w-8 text-gray-800 dark:text-gray-200" />
            </div>
            <h1 className="text-base text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300">
              Name
            </h1>
          </div>
          <div className="relative">
            <FaChevronDown
              className="h-7 w-7 cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transform hover:rotate-180 transition-transform duration-300"
              onClick={toggleMenu}
            />
            {isOpen && (
              <div className="absolute top-12 right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg p-2 z-10">
                <div
                  className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-600 transition-colors duration-300"
                  onClick={handleSettings}
                >
                  <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
                    <FaCog className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  </div>
                  <span className="text-sm text-gray-800 dark:text-gray-200 ml-2">
                    Settings
                  </span>
                </div>
                <div
                  className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300"
                  onClick={handleLogout}
                >
                  <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300">
                    <FaSignOutAlt className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  </div>
                  <span className="text-sm text-gray-800 dark:text-gray-200 ml-2">
                    Logout
                  </span>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transform hover:scale-105 transition-transform duration-300 text-gray-800 dark:text-yellow-400 focus:outline-none"
          >
            {darkMode ? (
              <BsSun className="h-6 w-6" />
            ) : (
              <BsMoon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <main className="pt-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="flex justify-between items-start mt-20">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Question Paper
              </h1>
              <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
                This is a hub of all the university question papers. You'll find
                all the available question papers that we offer.
              </p>
            </div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="appearance-none bg-transparent border pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black dark:border-gray-600 dark:focus:border-yellow-400 dark:text-gray-200"
              />
              <div className="absolute top-3 left-0 flex items-center pl-3">
                <FaSearch className="text-gray-400 dark:text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <ProCard />
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserPage;
