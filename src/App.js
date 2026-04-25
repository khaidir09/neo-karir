import { useState } from "react";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {["Menu 1", "Menu 2", "Menu 3"].map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveModal(menu)}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              cursor: "pointer",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              border: "2px solid #ccc",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {menu}
          </button>
        ))}
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
              width: "60%",
              height: "60%",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              position: "relative",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                padding: "5px",
                lineHeight: "1",
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <div style={{ marginTop: "30px" }}>
              <h2>{activeModal} Content</h2>
              <p>This is the content for the {activeModal} menu.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
