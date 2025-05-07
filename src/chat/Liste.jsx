import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: "Fatou Diallo", role: "enseignant" },
  { id: 2, name: "Mamadou Bah", role: "élève" },
  { id: 3, name: "Aïssatou Camara", role: "enseignant" },
  { id: 4, name: "Alpha Barry", role: "élève" },
];

export default function UserList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const handleUserSelect = (user) => {
    navigate(`/chat/${user.id}`, { state: { user } });
  };

  const filteredUsers =
    filter === "all"
      ? users
      : users.filter((user) => user.role === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Choisissez un utilisateur</h1>

      {/* Barre de filtre */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded-full font-medium border ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600 border-blue-600"
          }`}
          onClick={() => setFilter("all")}
        >
          Tous
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium border ${
            filter === "enseignant"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-green-600"
          }`}
          onClick={() => setFilter("enseignant")}
        >
          Enseignants
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium border ${
            filter === "élève"
              ? "bg-purple-600 text-white"
              : "bg-white text-purple-600 border-purple-600"
          }`}
          onClick={() => setFilter("élève")}
        >
          Élèves
        </button>
      </div>

      {/* Liste des utilisateurs */}
      <div className="max-w-md mx-auto space-y-4">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500">Aucun utilisateur trouvé.</p>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center hover:bg-blue-50 cursor-pointer transition"
              onClick={() => handleUserSelect(user)}
            >
              <div>
                <span className="text-lg font-semibold text-gray-800">{user.name}</span>
                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
              </div>
              <button className="text-blue-600 hover:underline">Discuter</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
