"use client";

import { Link } from "react-router-dom";

export default function About() {
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
      <main className="flex justify-center items-center h-[100%] flex-col p-4">
        <div className="bg-white text-black p-2">
          <h2 className="text-center text-[2rem]">About MFI</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est
            atque provident voluptatum repellat, velit ipsum tempore possimus
            harum dolore itaque asperiores culpa dolor facilis quos odio
            laboriosam voluptas similique?
          </p>
          <hr className="border border-black" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            eius maiores illum repellendus aut unde eum a dicta optio
            repudiandae ullam ab beatae, quidem esse libero quisquam! Hic,
            libero eveniet.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-evenly gap-4 mt-4">
          <div className="card bg-white text-black w-96 p-2 border-[10px] border-[#ccc]">
            <h3>Card 1</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              modi officia alias cupiditate saepe eum voluptas praesentium
              voluptates mollitia sapiente eligendi ea esse, quae impedit nulla
              soluta odio blanditiis nostrum.
            </p>
            <button className="p-2 bg-blue-400 text-white">Click me</button>
          </div>
          <div className="card bg-white text-black w-96 p-2 border-[10px] border-[#ccc]">
            {" "}
            <h3>Card 2</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              modi officia alias cupiditate saepe eum voluptas praesentium
              voluptates mollitia sapiente eligendi ea esse, quae impedit nulla
              soluta odio blanditiis nostrum.
            </p>
            <button className="p-2 bg-blue-400 text-white">Click me</button>
          </div>
          <div className="card bg-white text-black w-96 p-2 border-[10px] border-[#ccc]">
            {" "}
            <h3>Card 3</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              modi officia alias cupiditate saepe eum voluptas praesentium
              voluptates mollitia sapiente eligendi ea esse, quae impedit nulla
              soluta odio blanditiis nostrum.
            </p>
            <button className="p-2 bg-blue-400 text-white">Click me</button>
          </div>
        </div>
      </main>
    </div>
  );
}
