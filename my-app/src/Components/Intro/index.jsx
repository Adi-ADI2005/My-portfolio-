import { useEffect, useRef } from "react";
import "./intro.css";
import Logo from "../../assets/name-logo.png";
import TaDum from "../../assets/netflix.mp3";

function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: 60 + Math.random() * 40,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 2.5,
    duration: 1.5 + Math.random() * 1.5,
    opacity: 0.3 + Math.random() * 0.5,
  }));
}

const particles = generateParticles(22);

function Intro({ onFinish }) {
  const audioRef = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const playAudio = () => {
      if (played.current) return;
      audioRef.current?.play().catch(() => {});
      played.current = true;
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("keydown", playAudio);
    };

    window.addEventListener("click", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("keydown", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), 3800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="netflix-intro">
      <div className="intro-bg-glow" />
      <div className="intro-vignette" />

      <div className="intro-streaks">
        <div className="streak" />
        <div className="streak" />
        <div className="streak" />
      </div>

      <div className="intro-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="intro-glow" />

      <div className="intro-content">
        <img src={Logo} className="netflix-logo" alt="Logo" />

        <h1 className="intro-name">
          {"ADITYA".split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${1.1 + i * 0.11}s` }}>
              {c}
            </span>
          ))}
        </h1>

        <div className="intro-line" />
        <div className="intro-loader">
          <div className="intro-loader-fill" />
        </div>
      </div>

      <audio ref={audioRef} src={TaDum} preload="auto" />
    </div>
  );
}

export default Intro;
