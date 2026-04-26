import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [volume, setVolume] = useState(0.2);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [dialogStep, setDialogStep] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const dialogContent = [
    "",
    "Selamat datang di Pusat Kendali Neo-Career. Senang melihatmu bergabung dalam tim Audit Teknologi.",
    "Sebagai anggota baru, tugasmu adalah memastikan sistem AI kita berjalan secara adil dan etis.",
    "Kita baru saja menerima laporan adanya kejanggalan dalam sistem rekrutmen terbaru kita.",
    "Beberapa kandidat merasa AI kita mendiskriminasi mereka berdasarkan data demografis tertentu.",
    "Misi pertamamu adalah menyelidiki laporan ini. Periksa log sistem dan temukan akar masalahnya. Semoga berhasil!"
  ];

  if (showIntro) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          src="/bumber.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setShowIntro(false);
            setDialogStep(1);
          }}
          onError={() => {
            setShowIntro(false);
            setDialogStep(1);
          }}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    );
  }

  return (
    <>
      <audio ref={audioRef} src="/backsound.mp3" autoPlay loop />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <div
          className="App"
          style={{
            backgroundImage: "url('/images/background-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "1280px",
            height: "720px",
            position: "relative",
            overflow: "hidden",
            padding: "56px 72px",
            boxSizing: "border-box",
          }}
        >
          {dialogStep > 0 && dialogStep <= 5 && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm z-[2000]">
              <div
                key={dialogStep}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl w-full max-w-2xl text-center shadow-2xl animate-fade-in"
              >
                <p className="text-white text-2xl leading-relaxed mb-8">
                  {dialogContent[dialogStep]}
                </p>
                <button
                  onClick={() => setDialogStep(dialogStep === 5 ? 0 : dialogStep + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  {dialogStep === 5 ? "Selesai" : "Selanjutnya"}
                </button>
              </div>
            </div>
          )}
          <nav
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "96px",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <a
              href="#tujuan"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("Tujuan");
              }}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Tujuan
            </a>
            <a
              href="#profil"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("Profil");
              }}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Profil
            </a>
            <a
              href="#panduan"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("Panduan");
              }}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Panduan
            </a>
            <a
              href="#daftar-pustaka"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal("Daftar Pustaka");
              }}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Daftar Pustaka
            </a>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "30px",
                  cursor: "pointer",
                  padding: 0,
                }}
                title="Atur Volume"
              >
                &#127925;
              </button>
              {showVolumeSlider && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </nav>

          <button
            style={{
              position: "absolute",
              right: "256px",
              bottom: "220px",
              padding: "16px 73px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => {
              // Based on user request "Setelah pengguna menekan tombol Mulai, buatkan sistem dialog pembuka",
              // we will skip the video for now and trigger dialog directly to address the review comment.
              // If the video is still needed, the trigger should probably be AFTER the video, but the prompt says
              // "Setelah pengguna menekan tombol Mulai, buatkan sistem dialog pembuka".
              // Let's directly trigger the dialog.
              setDialogStep(1);
            }}
          >
            MULAI
          </button>
        </div>

        {activeModal && (
          <div
            onClick={() => setActiveModal(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "10px",
                width: "50%",
                minWidth: "300px",
                maxWidth: "600px",
                position: "relative",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#f30404",
                }}
              >
                X
              </button>
              <h2 style={{ marginTop: 0 }}>{activeModal}</h2>
              {activeModal === "Tujuan" ? (
                <>
                  <p style={{ textAlign: "justify", fontSize: "18px" }}>
                    Melalui media pembelajaran interaktif Detektif AI: Misi
                    Rekrutmen Adil, murid diharapkan dapat:
                  </p>
                  <ul style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    <li>Menganalisis Etika Kecerdasan Artifisial</li>
                    <li>Menerapkan Prinsip Keamanan Data</li>
                    <li>Mengevaluasi Dampak Sosial AI</li>
                    <li>Mengintegrasikan Berpikir Komputasional</li>
                  </ul>
                </>
              ) : activeModal === "Profil" ? (
                <ul style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  <li>Muhammad Khaidir, S.Kom</li>
                  <li>Guru Teknik Jaringan Komputer & Telekomunikasi</li>
                  <li>SMK Negeri 1 Amuntai</li>
                </ul>
              ) : activeModal === "Panduan" ? (
                <p style={{ textAlign: "justify" }}>
                  Panduan penggunaan elemen literasi dan etika kecerdasan
                  artifisial akan dijelaskan di sini.
                </p>
              ) : (
                <p style={{ textAlign: "justify" }}>
                  Konten untuk {activeModal} akan ditampilkan di sini.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
