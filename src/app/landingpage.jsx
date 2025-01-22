"use client";

import { Link } from "react-router-dom";

export default function Landingpage() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border border-white p-4 rounded-lg relative">
        <Link
          to="/home"
          className="absolute top-0 right-0 m-2 hover:cursor-pointer"
        >
          X
        </Link>
        <h1 className="text-center mb-2 text-[24px]">Login</h1>
        <div>
          <label htmlFor="username" className="block ml-2">
            Username:
          </label>
          <input
            type="text"
            placeholder="Username"
            className="border border- rounded-[20px] p-3 w-[100%] text-black"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block ml-2 ">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className="border border- rounded-[20px] p-3 w-[100%] text-black"
          />
        </div>
        <div className="p-2 w-[100%] text-center bg-white text-black mt-4 rounded-[12px] hover:bg-[gray]">
          <button>Login</button>
        </div>
        <div className="text-center mt-2 hover:cursor-pointer">
          Forgot Password?
        </div>
      </div>
    </div>
  );
}
