import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

const AuthScreen = () => {
  const { userName } = useUser();
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingTexts = [
    `Mengautentikasi Auditor: ${userName}...`,
    "Menghubungkan ke Server Pusat Neo-Career...",
    "Menganalisis Sistem Rekrutmen DEWA Kreatif..."
  ];

  useEffect(() => {
    if (loadingTextIndex < loadingTexts.length - 1) {
      const timer = setTimeout(() => {
        setLoadingTextIndex(prev => prev + 1);
      }, 2000); // Change text every 2 seconds
      return () => clearTimeout(timer);
    }
  }, [loadingTextIndex, loadingTexts.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white font-sans">
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in p-8 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
        {/* Minimalist Loading Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 border-opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 border-r-4 border-transparent border-b-4 border-transparent border-l-4 border-transparent animate-spin"></div>
        </div>

        {/* Sequential Loading Text */}
        <p className="text-xl text-center text-blue-200 h-8 transition-all duration-500">
          {loadingTexts[loadingTextIndex]}
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;
