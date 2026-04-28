import { useState, useRef, useEffect } from "react";
import "./App.css";
import { useUser } from "./UserContext";
import AuthScreen from "./AuthScreen";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [volume, setVolume] = useState(0.2);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [dialogStep, setDialogStep] = useState(0);
  const [auditorName, setAuditorName] = useState("");
  const [auditorSchool, setAuditorSchool] = useState("");
  const [view, setView] = useState("home");
  const { setUserName, setUserSchool } = useUser();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const dialogContent = [
    "",
    "Selamat datang di Pusat Kendali Neo-Career. Senang melihatmu bergabung dalam tim Audit Teknologi.",
    "Saat ini, ribuan perusahaan menggunakan AI untuk menyeleksi pelamar kerja. Namun, ada laporan bahwa sistem tersebut mulai bertindak tidak adil.",
    "Algoritma yang salah dapat mendiskriminasi pelamar berbakat hanya karena asal sekolah, tempat tinggal, atau faktor lain yang tidak relevan.",
    "Tugasmu adalah mengaudit sistem ini. Kamu akan memperbaiki basis data, menyeimbangkan algoritma, dan menjaga privasi para pelamar.",
    "Integritas rekrutmen ada di tanganmu. Sebelum kita mulai, silakan identifikasi dirimu sebagai Auditor resmi.",
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
      {view === "auth" ? (
        <AuthScreen />
      ) : (
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
                {dialogStep === 5 ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setUserName(auditorName);
                      setUserSchool(auditorSchool);
                      setView("auth");
                    }}
                    className="flex flex-col gap-4 text-left"
                  >
                    <div>
                      <label className="block text-white/80 text-sm mb-1">
                        Nama Lengkap Auditor
                      </label>
                      <input
                        type="text"
                        value={auditorName}
                        onChange={(e) => setAuditorName(e.target.value)}
                        autoFocus
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-white/30"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-1">
                        Sekolah Asal
                      </label>
                      <input
                        type="text"
                        value={auditorSchool}
                        onChange={(e) => setAuditorSchool(e.target.value)}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-white/30"
                        placeholder="Masukkan asal sekolah"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                      Mulai Audit
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setDialogStep(dialogStep + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Selanjutnya
                  </button>
                )}
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
            className="fixed inset-0 w-screen h-screen bg-black/50 flex justify-center items-center z-[1000]"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-10 rounded-[10px] w-1/2 min-w-[300px] max-w-[600px] relative shadow-md"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-[15px] right-[15px] bg-transparent border-none text-[20px] cursor-pointer font-bold text-[#f30404]"
              >
                X
              </button>
              <h2 className="mt-0 text-2xl font-bold mb-4">{activeModal}</h2>
              {activeModal === "Tujuan" ? (
                <>
                  <p className="text-justify text-[18px] mb-4">
                    Melalui media pembelajaran interaktif Detektif AI: Misi
                    Rekrutmen Adil, murid diharapkan dapat:
                  </p>
                  <ul className="text-[18px] leading-[1.6] list-disc list-inside">
                    <li>Menganalisis Etika Kecerdasan Artifisial</li>
                    <li>Menerapkan Prinsip Keamanan Data</li>
                    <li>Mengevaluasi Dampak Sosial AI</li>
                    <li>Mengintegrasikan Berpikir Komputasional</li>
                  </ul>
                </>
              ) : activeModal === "Profil" ? (
                <ul className="text-[18px] leading-[1.6] list-disc list-inside">
                  <li>Muhammad Khaidir, S.Kom</li>
                  <li>Guru Teknik Jaringan Komputer & Telekomunikasi</li>
                  <li>SMK Negeri 1 Amuntai</li>
                </ul>
              ) : activeModal === "Panduan" ? (
                <p className="text-justify">
                  Panduan penggunaan elemen literasi dan etika kecerdasan
                  artifisial akan dijelaskan di sini.
                </p>
              ) : (
                <p className="text-justify">
                  Konten untuk {activeModal} akan ditampilkan di sini.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      )}
    </>
  );
}

export default App;
