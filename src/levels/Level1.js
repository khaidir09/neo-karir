import React, { useState } from 'react';

const Level1 = () => {
  const [showModal, setShowModal] = useState(true);

  const candidates = [
    { nama: "Budi Santoso", usia: 24, nilaiCoding: 85, hobi: "Membaca", asalDaerah: "Jakarta" },
    { nama: "Siti Aminah", usia: 22, nilaiCoding: 92, hobi: "Berenang", asalDaerah: "Bandung" },
    { nama: "Andi Saputra", usia: 26, nilaiCoding: 75, hobi: "Sepak Bola", asalDaerah: "Surabaya" },
    { nama: "Rina Marlina", usia: 23, nilaiCoding: 88, hobi: "Menulis", asalDaerah: "Yogyakarta" },
    { nama: "Joko Widodo", usia: 25, nilaiCoding: 78, hobi: "Musik", asalDaerah: "Semarang" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-900 text-white font-sans overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-800/50">
        <h1 className="text-2xl font-bold text-blue-400 tracking-wider">LEVEL 1: THE DATABASE TERMINAL</h1>
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-600">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-sm text-slate-300">Status: <span className="text-emerald-500">Online</span></span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6 h-full min-h-0">

        {/* Left Side: Code Area */}
        <div className="flex-1 flex flex-col bg-slate-800/80 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            <h2 className="text-lg font-semibold text-slate-200">Terminal Kueri SQL</h2>
          </div>
          <div className="flex-1 p-6 relative">
            <div className="absolute inset-6 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-400 bg-slate-800/30">
              <svg className="w-12 h-12 mb-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="text-lg mb-2">Tarik & Letakkan Blok Kode SQL di sini</p>
              <p className="text-sm opacity-70">Area ini menanti perintah Anda.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Data Preview */}
        <div className="flex-1 flex flex-col bg-slate-800/80 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-200">Pratinjau Data Pelamar</h2>
            <span className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">Read-only</span>
          </div>
          <div className="flex-1 p-6 overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-600 text-slate-400 text-sm uppercase tracking-wider">
                  <th className="pb-4 font-medium">Nama</th>
                  <th className="pb-4 font-medium">Usia</th>
                  <th className="pb-4 font-medium text-center">Nilai Coding</th>
                  <th className="pb-4 font-medium">Hobi</th>
                  <th className="pb-4 font-medium">Asal Daerah</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {candidates.map((c, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4">{c.nama}</td>
                    <td className="py-4">{c.usia}</td>
                    <td className="py-4 text-center">
                      <span className={`px-2 py-1 rounded text-sm ${c.nilaiCoding >= 80 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-300'}`}>
                        {c.nilaiCoding}
                      </span>
                    </td>
                    <td className="py-4">{c.hobi}</td>
                    <td className="py-4">{c.asalDaerah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 border-t border-slate-700 bg-slate-800/50 text-xs text-slate-400 flex justify-between">
            <span>Tabel: candidates</span>
            <span>Total: {candidates.length} baris</span>
          </div>
        </div>

      </div>

      {/* Modal / Tooltip */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-slate-800 border border-blue-500/30 p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tugas Pertama</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ambil data pelamar yang memiliki <span className="text-blue-400 font-semibold">Nilai Coding di atas 80</span>. Gunakan blok kueri yang tersedia.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Mengerti, Mulai Misi
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Level1;
