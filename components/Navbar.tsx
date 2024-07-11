"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-transparent top-0 md:flex md:justify-between border-b-2 border-tertiary  md:px-10 max-md:p-5 h-20 ">
      <div className="flex justify-between  items-center">
        <span className="text-xl">Logo</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`mt-4 md:flex md:h-10 max-md:bg-tertiary font-semibold  transition-transform md:space-x-8 top-10 right-0  ${isOpen ? "h-fit absolute" : "h-0 hidden"}`}
      >
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link href={item.path}>
              <p className="block py-2 px-4 hover:scale-95 hover:text-tertiary transition-all">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
