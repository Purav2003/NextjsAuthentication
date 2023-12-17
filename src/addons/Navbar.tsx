"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [currentPathname, setCurrentPathname] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
      toast.success('Logout Successful');
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPathname(window.location.pathname);
    }
  }, []);

  return (
    <div>
      <nav className="bg-white fixed w-full z-50 top-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="data:image/jpeg;base64,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" className="h-12 object-cover rounded-full w-12" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hehehehe</span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 lg:w-full w-[24%] mt-2 lg:mt-0 sm:w-[13.5%] md:w-[10%] ${
                    currentPathname === '/' ? 'bg-white text-blue-700 rounded' : 'text-white-900'
                  } `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className={`block py-2 px-3 lg:w-full w-[26%] mt-2 lg:mt-0 sm:w-[13.5%] md:w-[10%] ${
                    currentPathname === '/profile' ? 'bg-white text-blue-700 rounded' : 'text-white-900'
                  } `}
                >
                  Profile
                </Link>
              </li>
              <li onClick={logout}>
                <Link
                  href="/"
                  className={`block py-2 px-3 lg:w-full w-[26%] mt-2 lg:mt-0 sm:w-[13.5%] md:w-[10%] bg-[tomato] rounded`}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
