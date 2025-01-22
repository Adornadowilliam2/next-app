"use client";

import { Link } from "react-router-dom";

export default function Web() {
  return (
    <div>
      <nav className="p-4 bg-white text-black flex justify-between items-center">
        <div>MFI</div>
        <ul className="flex items-center gap-4 hover:cursor-pointer">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <img
          src="https://www.mfi.org.ph/wp-content/uploads/2020/03/industrial-electrician.jpg"
          alt="logo"
          className="block m-auto w-[100%]"
        />
      </main>
    </div>
  );
}
