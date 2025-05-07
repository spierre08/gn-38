import 'aos/dist/aos.css';

import React, {
  useEffect,
  useState,
} from 'react';

import AOS from 'aos';
import { FaTimes } from 'react-icons/fa';
import {
  MdPictureAsPdf,
  MdPlayCircleFilled,
} from 'react-icons/md';
import { TbMenuDeep } from 'react-icons/tb';

const professeur = {
  nom: "Dr. Jean Diallo",
  email: "jean.diallo@univ.edu",
  photo: "/login.png",
  matieres: ["Maths", "Physique", "Informatique"],
};

const ressourcesVideosInitial = [
  {
    id: 1,
    titre: "Introduction à l'algèbre linéaire",
    duree: "15 min",
    videoUrl: "#",
  },
  {
    id: 2,
    titre: "Structures conditionnelles en Python",
    duree: "22 min",
    videoUrl: "#",
  },
  {
    id: 3,
    titre: "Fonctions en JavaScript",
    duree: "18 min",
    videoUrl: "#",
  },
  {
    id: 4,
    titre: "Base de données relationnelles",
    duree: "25 min",
    videoUrl: "#",
  },
];

const ressourcesPDFInitial = [
  { id: 1, titre: "Cours de Physique Quantique", fichierUrl: "#" },
  { id: 2, titre: "Introduction au Machine Learning", fichierUrl: "#" },
  { id: 3, titre: "Cours de Calcul Différentiel", fichierUrl: "#" },
  { id: 4, titre: "Réseaux Informatiques", fichierUrl: "#" },
];

export default function DashboardProfesseur() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [videoPage, setVideoPage] = useState(1);
  const [pdfPage, setPdfPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [ressourcesVideos, setRessourcesVideos] = useState(ressourcesVideosInitial);
  const [ressourcesPDF, setRessourcesPDF] = useState(ressourcesPDFInitial);

  const [newResource, setNewResource] = useState({
    type: "video",
    titre: "",
    lien: "",
    duree: "",
  });

  const itemsPerPage = 2;

  const filteredVideos = ressourcesVideos.filter((v) =>
    v.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredPDFs = ressourcesPDF.filter((p) =>
    p.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedVideos = filteredVideos.slice(
    (videoPage - 1) * itemsPerPage,
    videoPage * itemsPerPage
  );
  const paginatedPDFs = filteredPDFs.slice(
    (pdfPage - 1) * itemsPerPage,
    pdfPage * itemsPerPage
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newResource.type === "video") {
      setRessourcesVideos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          titre: newResource.titre,
          duree: newResource.duree || "0 min",
          videoUrl: newResource.lien,
        },
      ]);
    } else {
      setRessourcesPDF((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          titre: newResource.titre,
          fichierUrl: newResource.lien,
        },
      ]);
    }
    setNewResource({ type: "video", titre: "", lien: "", duree: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <nav className="bg-base-100 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Tableau de bord Professeur</h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#questions" className="btn btn-link text-lg text-secondary hover:text-primary">Questions</a>
          <a href="#messages" className="btn btn-link text-lg text-secondary hover:text-primary">Messages</a>
          <button onClick={() => setShowModal(true)} className="btn btn-link text-lg text-secondary hover:text-primary">Ajouter une ressource</button>
          <button className="btn btn-dash btn-primary">Déconnexion</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <TbMenuDeep size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow-md p-4 flex flex-col gap-2">
          <a href="#questions" className="btn btn-link text-lg text-secondary hover:text-primary">Questions</a>
          <a href="#messages" className="btn btn-link text-lg text-secondary hover:text-primary">Messages</a>
          <button onClick={() => setShowModal(true)} className="btn btn-link text-lg text-secondary hover:text-primary">Ajouter une ressource</button>
          <button className="btn btn-dash btn-primary">Déconnexion</button>
        </div>
      )}

      {/* Modal pour ajout de ressource */}
      {showModal && (
        <div className="fixed inset-0 bg-[#f1eaea] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setShowModal(false)}
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center">Ajouter une nouvelle ressource</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={newResource.type}
                onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
                className="select select-bordered w-full"
              >
                <option value="video">Vidéo</option>
                <option value="pdf">PDF</option>
              </select>
              <input
                type="text"
                placeholder="Titre"
                className="input input-bordered w-full"
                value={newResource.titre}
                onChange={(e) => setNewResource({ ...newResource, titre: e.target.value })}
                required
              />
              {newResource.type === "video" && (
                <input
                  type="text"
                  placeholder="Durée (ex: 15 min)"
                  className="input input-bordered w-full"
                  value={newResource.duree}
                  onChange={(e) => setNewResource({ ...newResource, duree: e.target.value })}
                />
              )}
              <input
                type="text"
                placeholder="Lien (URL)"
                className="input input-bordered w-full"
                value={newResource.lien}
                onChange={(e) => setNewResource({ ...newResource, lien: e.target.value })}
                required
              />
              <button type="submit" className="btn btn-primary w-full">Ajouter</button>
            </form>
          </div>
        </div>
      )}

      {/* Corps de page */}
      <main className="p-4 md:p-8 space-y-10">
        {/* Infos professeur */}
        <section className="bg-base-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6" data-aos="fade-up">
          <img src={professeur.photo} alt={professeur.nom} width={100} height={100} className="rounded-full object-cover border-2 border-primary" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-primary">{professeur.nom}</h2>
            <p className="text-base text-secondary">{professeur.email}</p>
            <p className="text-sm text-muted mt-2">Matières : {professeur.matieres.join(", ")}</p>
          </div>
        </section>

        {/* Recherche */}
        <div className="flex justify-center" data-aos="fade-up">
          <input
            type="text"
            placeholder="🔍 Rechercher une ressource..."
            className="input input-bordered w-full max-w-md"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setVideoPage(1);
              setPdfPage(1);
            }}
          />
        </div>

        {/* Vidéos */}
        <section data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-primary mb-4">🎥 Mes Vidéos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedVideos.map((video) => (
              <div key={video.id} className="card bg-base-100 shadow-xl rounded-lg p-6" data-aos="zoom-in">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg text-primary">{video.titre}</h4>
                  <span className="badge badge-info">{video.duree}</span>
                </div>
                <a href={video.videoUrl} className="btn btn-outline btn-sm mt-2 flex items-center gap-2 hover:bg-primary hover:text-white">
                  <MdPlayCircleFilled /> Regarder
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="btn btn-sm" disabled={videoPage === 1} onClick={() => setVideoPage(videoPage - 1)}>← Précédent</button>
            <span className="text-sm font-medium">Page {videoPage}</span>
            <button className="btn btn-sm" disabled={videoPage * itemsPerPage >= filteredVideos.length} onClick={() => setVideoPage(videoPage + 1)}>Suivant →</button>
          </div>
        </section>

        {/* PDFs */}
        <section data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-primary mb-4">📄 Mes PDFs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPDFs.map((pdf) => (
              <div key={pdf.id} className="card bg-base-100 shadow-xl rounded-lg p-6" data-aos="zoom-in">
                <h4 className="font-semibold text-lg text-primary">{pdf.titre}</h4>
                <a href={pdf.fichierUrl} className="btn btn-outline btn-sm mt-2 flex items-center gap-2 hover:bg-primary hover:text-white">
                  <MdPictureAsPdf /> Télécharger
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="btn btn-sm" disabled={pdfPage === 1} onClick={() => setPdfPage(pdfPage - 1)}>← Précédent</button>
            <span className="text-sm font-medium">Page {pdfPage}</span>
            <button className="btn btn-sm" disabled={pdfPage * itemsPerPage >= filteredPDFs.length} onClick={() => setPdfPage(pdfPage + 1)}>Suivant →</button>
          </div>
        </section>
      </main>
    </div>
  );
}
