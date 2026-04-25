import { useState } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

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
          onEnded={() => setShowIntro(false)}
          onError={() => setShowIntro(false)}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    );
  }

  return (
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
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "96px",
            fontWeight: "bold",
          }}
        >
          <a
            href="#tujuan"
            onClick={(e) => { e.preventDefault(); setActiveModal("Tujuan"); }}
            style={{ color: "white", fontSize: "30px", textDecoration: "none", cursor: "pointer" }}
          >
            Tujuan
          </a>
          <a
            href="#profil"
            onClick={(e) => { e.preventDefault(); setActiveModal("Profil"); }}
            style={{ color: "white", fontSize: "30px", textDecoration: "none", cursor: "pointer" }}
          >
            Profil
          </a>
          <a
            href="#panduan"
            onClick={(e) => { e.preventDefault(); setActiveModal("Panduan"); }}
            style={{ color: "white", fontSize: "30px", textDecoration: "none", cursor: "pointer" }}
          >
            Panduan
          </a>
          <a
            href="#daftar-pustaka"
            onClick={(e) => { e.preventDefault(); setActiveModal("Daftar Pustaka"); }}
            style={{ color: "white", fontSize: "30px", textDecoration: "none", cursor: "pointer" }}
          >
            Daftar Pustaka
          </a>
        </nav>
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
              }}
            >
              X
            </button>
            <h2 style={{ marginTop: 0 }}>{activeModal}</h2>
            <p>Konten untuk {activeModal} akan ditampilkan di sini.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
