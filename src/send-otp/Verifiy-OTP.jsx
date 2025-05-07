import React, {
  useEffect,
  useState,
} from 'react';

import AOS from 'aos';
import {
  useNavigate,
} from 'react-router-dom'; // Pour rediriger après validation

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Pour la redirection après succès

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      const result = await response.json();

      if (result.success) {
        navigate('/success'); // Redirection en cas de succès
      } else {
        setError('Le code OTP est incorrect');
      }
    } catch (error) {
      setError('Erreur de connexion. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center text-primary mb-6">Vérification OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-lg font-medium text-gray-700">Entrez le code OTP</label>
            <input
              type="text"
              id="otp"
              maxLength="6"
              value={otp}
              onChange={handleChange}
              className="input input-bordered w-full mt-2 text-center"
              placeholder="Entrez le code OTP"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
            {loading ? 'Vérification...' : 'Vérifier'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Renvoyer le code</a>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
