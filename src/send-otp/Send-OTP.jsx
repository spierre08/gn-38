import { FaPhoneAlt } from 'react-icons/fa';

export default function SendOTPByPhone() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#e5dddd]">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6 sm:p-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700">
          Entrez votre numéro de téléphone pour recevoir un OTP
        </h2>

        {/* Champ e-mail */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Numéro de téléphone
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <FaPhoneAlt className="text-xl" />
            </span>
            <input
              type="text"
              placeholder="Entrez votre numéro de téléphone"
              className="w-full pl-10 pr-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200">
          Envoyer OTP
        </button>
      </div>
    </div>
  );
}
