import { useState } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

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
            gap: "24px",
          }}
        >
          <a href="#tujuan" style={{ color: "white", fontSize: "22px", textDecoration: "none" }}>Tujuan</a>
          <a href="#profil" style={{ color: "white", fontSize: "22px", textDecoration: "none" }}>Profil</a>
          <a href="#panduan" style={{ color: "white", fontSize: "22px", textDecoration: "none" }}>Panduan</a>
          <a href="#daftar-pustaka" style={{ color: "white", fontSize: "22px", textDecoration: "none" }}>Daftar Pustaka</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
