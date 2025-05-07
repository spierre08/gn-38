import React, { useState } from 'react';

import {
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from 'react-icons/fi';
import { SiOpslevel } from 'react-icons/si';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [userType, setUserType] = useState('eleve'); // 'eleve' ou 'enseignant'

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5dddd] px-4">
      <form className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">Inscription</h2>

        {/* Choisir le type d'utilisateur */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            type="button"
            onClick={() => setUserType('eleve')}
            className={`btn ${userType === 'eleve' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Élève
          </button>
          <button
            type="button"
            onClick={() => setUserType('enseignant')}
            className={`btn ${userType === 'enseignant' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Enseignant
          </button>
        </div>

        {/* Nom complet */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Téléphone */}
        <div className="relative">
          <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Numéro de téléphone"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Niveau - Spécifique à l'utilisateur */}
        <div className="relative">
          <SiOpslevel className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          {userType === 'eleve' ? (
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
              <option value="">Sélectionnez un niveau d'élève</option>
              <option value="niveau1">Niveau 1</option>
              <option value="niveau2">Niveau 2</option>
              <option value="niveau3">Niveau 3</option>
            </select>
          ) : (
            <select className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
              <option value="">Sélectionnez un département</option>
              <option value="maths">Mathématiques</option>
              <option value="physique">Physique</option>
              <option value="chimie">Chimie</option>
            </select>
          )}
        </div>

        {/* Mot de passe */}
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        </div>

        {/* Confirmer mot de passe */}
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type={showPassword1 ? 'text' : 'password'}
            placeholder="Confirmer le mot de passe"
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword1(!showPassword1)}
          >
            {showPassword1 ? <FiEyeOff /> : <FiEye />}
          </div>
        </div>

        {/* Liens */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <a href="/auth" className="text-blue-600 hover:underline">
            Se connecter
          </a>
          <a href="/send-otp-phone" className="text-blue-600 hover:underline">
            Mot de passe oublié ?
          </a>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
