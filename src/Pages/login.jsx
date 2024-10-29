import rapimage from "../assets/rap.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
function Login() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="cari flex flex-col md:flex-row h-screen">
      {/* Image Section - hidden on mobile */}
      <div className=" hidden md:flex justify-center items-center  p-4 w-1/2">
        <div className="flex justify-center items-center w-full h-full">
          <img
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src={rapimage}
            alt="img"
          />
        </div>
      </div>

      {/* Login Form */}

      <div className="flex items-center flex-col w-full  mt-3 md:w-1/2 bg-transparent p-1 mt-3">
        {/* Adjusted Logo Image with reduced margin */}
        <img
          className="w-1/2 md:w-1/3 lg:w-1/4 rounded-3xl"
          src={logo}
          alt="Logo"
        />{" "}
        {/* Add margin-top with mt-2 for less space */}
        {!flag ? (
          <div className="nice flex flex-col w-full max-w-xl p-4 mt-10 gap-3 rounded-md shadow-md">
            <h1 className="text-3xl md:text-4xl font-semibold font-serif text-center">
              {" "}
              {/* Centered text */}
              Login
            </h1>
            <p className="mt-2 text-center">
              Welcome back! Please login to your account.
            </p>
            <label htmlFor="username" className="mt-4 text-sm md:text-base">
              User Name
            </label>{" "}
            {/* Responsive label size */}
            <input
              className="border rounded mt-1 p-2 text-sm md:text-base"
              type="text"
              id="username"
              name="username"
            />
            <label htmlFor="password" className="mt-4 text-sm md:text-base">
              Password
            </label>{" "}
            {/* Responsive label size */}
            <input
              className="border rounded mt-1 p-2 text-sm md:text-base"
              type="password"
              id="password"
              name="password"
            />
            <button className="mt-4 bg-blue-500 text-white p-2 rounded text-sm md:text-base w-full">
              {" "}
              {/* Full-width button */}
              Login
            </button>
            <div className="mt-4 text-center">
              <h1 className="text-sm md:text-base">New User?</h1>
              <Link
                to=""
                className="text-blue-600 underline text-sm md:text-base"
                onClick={() => setFlag(!flag)}
              >
                Signup
              </Link>
            </div>
          </div>
        ) : (
          <div className="nice flex flex-col w-full max-w-xl p-4 mt-10 gap-3 rounded-md shadow-md">
            <h1 className="text-3xl md:text-4xl font-semibold font-serif text-center">
              {" "}
              {/* Centered text */}
              Sign Up
            </h1>
            <p className="mt-2 text-center">
              Welcome! Please sign up to create your account.
            </p>
            <label htmlFor="name" className="mt-4 text-sm md:text-base">
              Name
            </label>{" "}
            {/* Responsive label size */}
            <input
              className="border rounded mt-1 p-2 text-sm md:text-base"
              type="text"
              id="name"
              name="name"
            />
            <label htmlFor="email" className="mt-4 text-sm md:text-base">
              Email
            </label>{" "}
            {/* Responsive label size */}
            <input
              className="border rounded mt-1 p-2 text-sm md:text-base"
              type="text"
              id="email"
              name="email"
            />
            <label htmlFor="password" className="mt-4 text-sm md:text-base">
              Password
            </label>{" "}
            {/* Responsive label size */}
            <input
              className="border rounded mt-1 p-2 text-sm md:text-base"
              type="password"
              id="password"
              name="password"
            />
            <button className="mt-4 bg-blue-500 text-white p-2 rounded text-sm md:text-base w-full">
              {" "}
              {/* Full-width button */}
              Sign Up
            </button>
            <div className="mt-4 text-center">
              <h1 className="text-sm md:text-base">Account already exist?</h1>
              <Link
                to=""
                className="text-blue-600 underline text-sm md:text-base"
                onClick={() => setFlag(!flag)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
