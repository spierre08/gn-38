import React, { useState } from 'react';

import {
  FaArrowLeft,
  FaPaperPlane,
} from 'react-icons/fa';

export default function ChatProfessionnels() {
  const [messages, setMessages] = useState([
    { from: "Fatou Diallo", text: "Bonjour, comment allez-vous ?" },
    { from: "Mamadou Bah", text: "Très bien merci, et vous ?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { from: "Moi", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleLogout = () => {
    // Simule la déconnexion
    alert("Déconnexion réussie !");
    // Redirection ou suppression du token ici
  };

  const handleBack = () => {
    // Simule le retour (peut être remplacé par useNavigate)
    alert("Retour à la page précédente");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={handleBack} className="hover:underline">
            <FaArrowLeft className="text-lg" />
          </button>
          <h1 className="text-lg font-bold">Fatou Diallo</h1>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          Déconnexion
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.from === "Moi" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-sm text-white ${
                msg.from === "Moi" ? "bg-blue-600" : "bg-gray-600"
              }`}
            >
              <span className="block text-sm font-semibold">{msg.from}</span>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="flex items-center p-4 border-t bg-white">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Tapez votre message..."
          className="flex-1 px-4 py-2 border rounded-full mr-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
