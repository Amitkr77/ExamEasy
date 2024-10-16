import { useState } from "react";
import axios from "axios";

const SignUp = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validate = () => {
    const error = {};
    if (!username) {
      error.username = "Username is required";
    }
    if (!phone) {
      error.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) { // Example regex for 10-digit phone number
      error.phone = "Invalid phone number";
    }
    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Invalid email";
    }
    if (!password) {
      error.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    ) {
      error.password = "Password must be at least 8 characters long and include upper/lowercase, a number, and a special character.";
    }
    return error;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const validationErr = validate();
    if (Object.keys(validationErr).length === 0) {
      try {
        const response = await axios.post("http://localhost:8002/api/auth/register", {
          username,
          email,
          phone,
          password,
        });
        console.log(response);
        
        onClose();
      } catch (error) {
        alert(`User creation failed: ${error.response?.data?.message || "Unknown error"}`);
        console.error(error);
      }
    } else {
      setError(validationErr);
      console.log("Failed", validationErr);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-70 ${isOpen ? "block" : "hidden"}`}>
      <div className="flex items-center w-full justify-center h-screen">
        <div className="lg:w-1/2 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">Sign up with</p>
            {/* Buttons for Github and Google */}
            <div className="flex items-center justify-center space-x-4 mt-3">
              {/* Github Button */}
              <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Github
              </button>
              {/* Google Button */}
              <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {/* Google Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48">
                  <path fill="#fbc02d" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  <path fill="#e53935" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                  <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                  <path fill="#1565c0" d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                </svg>
                Google
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-light">Or sign up with credentials</p>
            <form className="mt-6" onSubmit={handleSignUp}>
              <div className="relative">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-invalid={!!error.username}
                />
                {error.username && (
                  <p className="text-xs italic text-red-500 text-left">{error.username}</p>
                )}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  name="phone"
                  type="tel"
                  placeholder="123-456-789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!error.phone}
                />
                {error.phone && (
                  <p className="text-xs italic text-red-500 text-left">{error.phone}</p>
                )}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error.email}
                />
                {error.email && (
                  <p className="text-xs italic text-red-500 text-left">{error.email}</p>
                )}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {/* Icon */}
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!error.password}
                />
                {error.password && (
                  <p className="text-xs italic text-red-500 text-left">{error.password}</p>
                )}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {/* Icon */}
                </div>
              </div>
              <p className="mt-4 italic text-gray-500 font-light text-xs">
                Password strength:{" "}
                <span className="font-bold text-green-400">strong</span>
              </p>
              <div className="mt-4 flex items-center text-gray-500">
                <input type="checkbox" name="remember" className="mr-2" />
                <label className="text-sm" htmlFor="remember">
                  I agree with the{" "}
                  <a href="#" className="text-indigo-400 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button
        className="absolute top-20 right-0 m-4 text-white focus:outline-none"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default SignUp;
