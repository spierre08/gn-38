import { useState } from 'react';

import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5dddd] px-4">
      <form className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">Connexion</h2>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="email"
            placeholder="Email ou Téléphone"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type={showPassword ? "text" : "password"}
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

        {/* Liens */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <Link to="/register" className="text-blue-600 hover:underline">
            Créer un compte
          </Link>
          <Link to="/send-otp-phone" className="text-blue-600 hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Se connecter
        </button>
        <Link to="/" className="block text-center text-blue-600 hover:underline">Retour</Link>
      </form>
    </div>
  );
}
