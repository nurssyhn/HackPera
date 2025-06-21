"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Plus } from "lucide-react";
// import Pay from "./components/Pay"; // Adjust the import path as necessary
// TODO: Update the import path below to the correct location of Pay.tsx
import Pay from "../components/Pay";
type Contact = {
  name: string;
  email: string;
  description: string;
  amount: string;
  telegram: string;
};

export default function SafePayPage() {
  // Transaction History'de gösterilecek kişiler (örnek statik veri)
  const transactionHistory = [
    {
      name: "Nur Sultan Şeyhanlıoğlu",
      email: "nursultan.seyhan@gmail.com",
      description: "Member",
      amount: "100 XLM",
      telegram: "56********",
    },
    {
      name: "İbrahim Batuhan Tekin",
      email: "employee2@example.com",
      description: "Frontend Developer",
      amount: "120 USDC",
      telegram: "42********",
    },
  ];

  const [contacts, setContacts] = useState<Contact[]>([
    {
      name: "Nur Sultan Şeyhanlıoğlu",
      email: "nursultan.seyhan@gmail.com",
      description: "Member",
      amount: "100 XLM",
      telegram: "56********",
    },
    {
      name: "İbrahim Batuhan Tekin",
      email: "employee2@example.com",
      description: "Frontend Developer",
      amount: "120",
      telegram: "42********",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelegram, setNewTelegram] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showTelegram, setShowTelegram] = useState(false);

  const handleAddContact = () => {
    if (!newName || !newEmail) return;
    if (!newEmail.includes("@")) {
      setEmailError("Email must contain '@'");
      return;
    }
    setContacts([
      ...contacts,
      {
        name: newName,
        email: newEmail,
        description: newName,
        amount: "0",
        telegram: newTelegram,
      },
    ]);
    setNewName("");
    setNewEmail("");
    setNewTelegram("");
    setEmailError("");
    setModalOpen(false);
  };

  // Pay modalı aç
  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setPayModalOpen(true);
  };

  // Pay modalı kapat
  const handleClosePayModal = () => {
    setPayModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-2">
      <div className="flex w-full max-w-6xl gap-8">
        {/* Main Card */}
        <div className="flex-1 flex flex-col">
          {/* Add Contact Button (outside card) */}
          <div className="w-full flex justify-end mb-4">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => setModalOpen(true)}
            >
              <Plus className="w-5 h-5" />
              Add Contact
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 w-full">
            <h1 className="text-2xl font-extrabold mb-6 text-left">
              Transaction History
            </h1>
            {/* Table */}
            <div
              className="overflow-x-auto"
              style={{
                maxHeight: "340px",
                overflowY: "auto",
                scrollbarColor: "#1e293b #1e193b", // scroll thumb ve track rengi
                scrollbarWidth: "thin",
              }}
            >
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-white/10">
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Amount</th>
                    <th className="py-3 px-4 text-left">Telegram ID</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((c, i) => (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-2 px-4">{c.name}</td>
                      <td className="py-2 px-4">{c.email}</td>
                      <td className="py-2 px-4">{c.description}</td>
                      <td className="py-2 px-4">${c.amount}</td>
                      <td className="py-2 px-4">{c.telegram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contacts Vertical Card */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">Contacts</h2>
            <div
              className="flex-1 space-y-4 overflow-y-auto"
              style={{
                maxHeight: "340px",
                scrollbarColor: "#1e293b #1e193b",
                scrollbarWidth: "thin",
              }}
            >
              {contacts.length === 0 && (
                <div className="text-gray-400 text-center">No contacts yet.</div>
              )}
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-4 flex flex-col gap-1 cursor-pointer hover:bg-white/20 transition"
                  onClick={() => handleContactClick(c)}
                >
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-gray-300 break-all">{c.email}</div>
                  <div className="text-xs text-blue-300">{c.telegram}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl relative">
            <h2 className="text-xl font-bold mb-4 text-center">Add Contact</h2>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                value={newEmail}
                onChange={e => {
                  setNewEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="Enter email"
              />
              {emailError && (
                <div className="text-red-400 text-xs mt-1">{emailError}</div>
              )}
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-sm">Telegram ID</label>
              <div className="relative flex items-center">
                <input
                  type={showTelegram ? "text" : "password"}
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none pr-10"
                  value={newTelegram}
                  onChange={e => setNewTelegram(e.target.value)}
                  placeholder="Enter Telegram ID"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  tabIndex={-1}
                  onClick={() => setShowTelegram(v => !v)}
                >
                  {showTelegram ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setModalOpen(false);
                  setEmailError("");
                  setShowTelegram(false);
                }}
                className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddContact}
                className="px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pay Modal */}
      {payModalOpen && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={handleClosePayModal}
            >
              ×
            </button>
            {/* pay.tsx componentini burada modalda gösteriyoruz */}
            <Pay contact={selectedContact} onClose={handleClosePayModal} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
        /* Scrollbar stilleri */
        .overflow-y-auto::-webkit-scrollbar,
        .overflow-x-auto::-webkit-scrollbar {
          width: 8px;
          background: #1e293b;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb,
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}