import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';

export default function PromoSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // L'animation ne se déclenche qu'une fois
    });
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texte avec animation au scroll */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Une bibliothèque numérique moderne et accessible
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Gérez efficacement vos ressources documentaires. Notre plateforme
            fonctionne aussi bien en local qu'en ligne pour répondre aux besoins
            des établissements scolaires, universitaires et communautaires.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
            En savoir plus
          </button>
        </div>

        {/* Image avec animation au scroll */}
        <div className="flex justify-center" data-aos="fade-left">
          <div className="mockup-phone border-primary scale-75 md:scale-100">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display p-0">
              <div className="relative w-full h-full">
                <img
                  src="/login.png"
                  alt="Aperçu de la bibliothèque numérique"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
