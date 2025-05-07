import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
} from 'react-icons/fa';

const stats = [
  {
    label: "Élèves inscrits",
    value: "1,200",
    icon: <FaUserGraduate className="text-3xl text-blue-800" />,
  },
  {
    label: "Ressources disponibles",
    value: "5,000+",
    icon: <FaBookOpen className="text-3xl text-green-700" />,
  },
  {
    label: "Enseignants actifs",
    value: "85",
    icon: <FaChalkboardTeacher className="text-3xl text-purple-700" />,
  },
];

export default function StatsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation une seule fois
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10"
          data-aos="fade-up"
        >
          Une bibliothèque numérique au service de tous
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200} // Délai progressif
            >
              <div className="mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
