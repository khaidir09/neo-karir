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
        }}
      ></div>
    </div>
  );
}

export default App;
