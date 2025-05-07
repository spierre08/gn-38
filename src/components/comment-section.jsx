import 'aos/dist/aos.css'; // Importez le CSS d'AOS

import React, {
  useEffect,
  useState,
} from 'react';

import AOS from 'aos';

export default function CommentSection() {
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Initialiser AOS avec des paramètres
    AOS.init({
      duration: 1000, // Durée de l'animation
      easing: "ease-in-out", // Type de transition
      once: false, // Réexécuter l'animation chaque fois que l'élément devient visible
      offset: 100, // Décalage de l'animation
    });
  }, []);

  // Fonction pour gérer la soumission du commentaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setIsSubmitted(true);
      setComment("");
      setTimeout(() => setIsSubmitted(false), 3000); // Efface le message de confirmation après 3 secondes
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Laissez votre commentaire
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Partagez vos impressions ou vos suggestions pour améliorer notre
          bibliothèque numérique.
        </p>
        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Votre commentaire..."
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Soumettre le commentaire
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 text-green-500 font-semibold">
              Merci pour votre commentaire ! Nous l'apprécions beaucoup.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
