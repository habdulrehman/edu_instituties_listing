import React from "react";
import Link from 'next/link'
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
  return (
    <div>
      <header className="text-gray-600 body-font bg-pink-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-black justify-center">
            <Link href="#" className="mr-5 hover:text-pink-900">
              Home
            </Link>
            <Link href="#" className="mr-5 hover:text-pink-900">
              About
            </Link>
            <Link href="#" className="mr-5 hover:text-pink-900">
              Content
            </Link>
            <Link href="#" className="mr-5 hover:text-pink-900">
              Contact Us
            </Link>
          </nav>
          <button
            className="inline-flex items-center bg-black border-0 py-2 px-4 focus:outline-none hover:bg-pink-700 rounded text-white mt-4 md:mt-0"
            onClick={() => router.push("Form")}
          >
            Create
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
