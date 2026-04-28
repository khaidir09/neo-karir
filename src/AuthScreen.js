import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";

const AuthScreen = () => {
  const { userName } = useUser();
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingTexts = [
    `Mengautentikasi Auditor: ${userName}...`,
    "Menghubungkan ke Server Pusat Neo-Career...",
    "Menganalisis Sistem Rekrutmen DEWA Kreatif...",
  ];

  useEffect(() => {
    if (loadingTextIndex < loadingTexts.length - 1) {
      const timer = setTimeout(() => {
        setLoadingTextIndex((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loadingTextIndex, loadingTexts.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in p-8 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
        {/* Spinner yang Diperbaiki */}
        <div className="relative w-20 h-20">
          {/* Lingkaran Luar (Static Ring) */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>

          {/* Lingkaran Berputar (Active Spinner) */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>

          {/* Efek Cahaya Tambahan */}
          {/* <div className="absolute inset-0 rounded-full border-4 border-transparent border-l-blue-400/30 animate-pulse"></div> */}
        </div>

        {/* Teks Loading dengan Animasi Fade */}
        <div className="h-8">
          <p
            key={loadingTextIndex}
            className="text-xl text-center text-blue-200 animate-fade-in"
          >
            {loadingTexts[loadingTextIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
