import { useState } from 'react';

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

const ressourcesVideos = [
  { id: 1, titre: "Introduction à l'algèbre linéaire", duree: "15 min", videoUrl: "#", niveau: "Lycée" },
  { id: 2, titre: "Structures conditionnelles en Python", duree: "22 min", videoUrl: "#", niveau: "Collège" },
  { id: 3, titre: "Fonctions en JavaScript", duree: "18 min", videoUrl: "#", niveau: "Lycée" },
  { id: 4, titre: "Base de données relationnelles", duree: "25 min", videoUrl: "#", niveau: "Université" },
];

const ressourcesPDF = [
  { id: 1, titre: "Cours de Physique Quantique", fichierUrl: "#", niveau: "Université" },
  { id: 2, titre: "Introduction au Machine Learning", fichierUrl: "#", niveau: "Université" },
  { id: 3, titre: "Cours de Calcul Différentiel", fichierUrl: "#", niveau: "Lycée" },
  { id: 4, titre: "Réseaux Informatiques", fichierUrl: "#", niveau: "Université" },
];

const niveaux = ["Tous", "Maternel", "Primaire", "Collège", "Lycée", "Université"];

export default function DashboardEleve() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [niveauFiltre, setNiveauFiltre] = useState("Tous");
  const [videoPage, setVideoPage] = useState(1);
  const [pdfPage, setPdfPage] = useState(1);
  const [ongletActif, setOngletActif] = useState("videos");
  const itemsPerPage = 2;

  const filtreCombiné = (ressource) =>
    ressource.titre.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (niveauFiltre === "Tous" || ressource.niveau === niveauFiltre);

  const filteredVideos = ressourcesVideos.filter(filtreCombiné);
  const filteredPDFs = ressourcesPDF.filter(filtreCombiné);

  const paginatedVideos = filteredVideos.slice(
    (videoPage - 1) * itemsPerPage,
    videoPage * itemsPerPage
  );
  const paginatedPDFs = filteredPDFs.slice(
    (pdfPage - 1) * itemsPerPage,
    pdfPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <nav className="bg-base-100 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">
          Tableau de bord Professeur
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <a href="#questions" className="btn btn-link text-lg text-secondary hover:text-primary">Questions</a>
          <a href="#forum" className="btn btn-link text-lg text-secondary hover:text-primary">Forum</a>
          <button className="btn btn-dash btn-primary">Déconnexion</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <TbMenuDeep size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow-md p-4 flex flex-col gap-2">
          <a href="#questions" className="btn btn-link text-lg text-secondary hover:text-primary">Questions</a>
          <a href="#forum" className="btn btn-link text-lg text-secondary hover:text-primary">Forum</a>
          <button className="btn btn-dash btn-primary">Déconnexion</button>
        </div>
      )}

      <main className="p-4 md:p-8 space-y-10">
        {/* Prof info */}
        <section className="bg-base-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <img src={professeur.photo} alt={professeur.nom} width={100} height={100} className="rounded-full object-cover border-2 border-primary" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-primary">{professeur.nom}</h2>
            <p className="text-base text-secondary">{professeur.email}</p>
            <p className="text-sm text-muted mt-2">Matières : {professeur.matieres.join(", ")}</p>
          </div>
        </section>

        {/* Recherche + Filtrage */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
          <select
            className="select select-bordered"
            value={niveauFiltre}
            onChange={(e) => {
              setNiveauFiltre(e.target.value);
              setVideoPage(1);
              setPdfPage(1);
            }}
          >
            {niveaux.map((niveau) => (
              <option key={niveau} value={niveau}>
                {niveau}
              </option>
            ))}
          </select>
        </div>

        {/* Onglets */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className={`btn ${ongletActif === "videos" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setOngletActif("videos")}
          >
            🎥 Vidéos
          </button>
          <button
            className={`btn ${ongletActif === "pdfs" ? "btn-primary" : "btn-outline"}`}
            onClick={() => setOngletActif("pdfs")}
          >
            📄 PDFs
          </button>
        </div>

        {/* Vidéos */}
        {ongletActif === "videos" && (
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4">🎥 Mes Vidéos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedVideos.map((video) => (
                <div key={video.id} className="card bg-base-100 shadow-xl rounded-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg text-primary">{video.titre}</h4>
                    <span className="badge badge-info">{video.duree}</span>
                  </div>
                  <span className="text-sm text-muted">Niveau : {video.niveau}</span>
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
        )}

        {/* PDFs */}
        {ongletActif === "pdfs" && (
          <section>
            <h3 className="text-2xl font-semibold text-primary mb-4">📄 Mes PDFs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedPDFs.map((pdf) => (
                <div key={pdf.id} className="card bg-base-100 shadow-xl rounded-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold text-lg text-primary">{pdf.titre}</h4>
                  <span className="text-sm text-muted">Niveau : {pdf.niveau}</span>
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
        )}
      </main>
    </div>
  );
}
