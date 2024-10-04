import React, { useState } from "react";
import Login from "./Authentication/Login";
import { BsSun, BsMoon } from "react-icons/bs"; // Import icons for dark/light mode

function Nav() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSignInModal = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className={`absolute inset-x-0 top-0 z-50 ${isDarkMode ? 'dark' : ''}`}>
      <nav
        className="flex items-center justify-between lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ExamEase</span>
            <img className="h-20 w-auto" src="logo.png" alt="ExamEase Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            aria-label="Open main menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Features
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            onClick={toggleSignInModal}
            href="#"
            className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Log in{" "}
            <span aria-hidden="true" className="pulsate-fwd">
              →
            </span>
          </a>
          <Login isOpen={isSignInOpen} onClose={toggleSignInModal} />
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <BsSun className="h-6 w-6" /> : <BsMoon className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" onClick={toggleMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-700/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ExamEase</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                aria-label="Close menu"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <button
                    onClick={toggleSignInModal}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Log in
                  </button>
                  <Login isOpen={isSignInOpen} onClose={toggleSignInModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
