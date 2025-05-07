import React, { useState } from 'react';

import {
  FaBookOpen,
  FaHome,
  FaInfoCircle,
  FaSignInAlt,
} from 'react-icons/fa'; // Import des icônes

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-blue-900 text-white">
      {/* Navbar */}
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold flex items-center">
            <span className="text-blue-300">Edu</span>Connect
          </a>
          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-blue-300 flex items-center">
            <FaHome className="mr-2" />
            Accueil
          </a>
          <div className="relative group">
            <button className="hover:text-blue-300 flex items-center">
              <FaBookOpen className="mr-2" />
              Cour élémentaire
            </button>
            <div className="absolute left-0 hidden mt-2 space-y-2 bg-blue-800 text-white group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-blue-600">
                Maternelle
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-600">
                Primaire (1ere à 4eme année)
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-300 flex items-center">
            <FaInfoCircle className="mr-2" />A propos
          </a>
        </div>

        {/* Connect Button */}
        <div className="lg:flex hidden">
          <a
            href="/auth"
            className="btn btn-outline btn-primary text-white bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white flex items-center"
          >
            <FaSignInAlt className="mr-2" />
            Se connecter
          </a>
        </div>
      </div>

      {/* Mobile Menu (dropdown) */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-900 text-white p-4 space-y-4">
          <a href="/" className="block hover:text-blue-300 flex items-center">
            <FaHome className="mr-2" />
            Accueil
          </a>
          <div className="space-y-2">
            <button className="w-full text-left hover:text-blue-300 flex items-center">
              <FaBookOpen className="mr-2" />
              Cour élémentaire
            </button>
            <div className="space-y-2 pl-4">
              <a
                href="#"
                className="block hover:text-blue-300 flex items-center"
              >
                Maternelle
              </a>
              <a
                href="#"
                className="block hover:text-blue-300 flex items-center"
              >
                Primaire (1ere à 4eme année)
              </a>
            </div>
          </div>
          <a href="#" className="block hover:text-blue-300 flex items-center">
            <FaInfoCircle className="mr-2" />A propos
          </a>
          <a
            href="/auth"
            className="btn btn-outline btn-primary text-white bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white w-full text-center flex items-center"
          >
            <FaSignInAlt className="mr-2" />
            Se connecter
          </a>
        </div>
      )}
    </div>
  );
}
