import { useState } from 'react';

import {
  FiEye,
  FiEyeOff,
  FiLock,
} from 'react-icons/fi';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5dddd] px-4">
      <form className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">
          Nouveau mot de passe
        </h2>

        {/* Nouveau mot de passe */}
        <div className="relative">
          <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nouveau mot de passe"
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
            type={showPassword1 ? "text" : "password"}
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
          <a href="/register" className="text-blue-600 hover:underline">
            Créer un compte
          </a>
          <a href="/auth" className="text-blue-600 hover:underline">
            Se connecter
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Modifier
        </button>

        <a
          href="/"
          className="block mt-2 text-center text-blue-700 hover:underline"
        >
          Retour
        </a>
      </form>
    </div>
  );
}
