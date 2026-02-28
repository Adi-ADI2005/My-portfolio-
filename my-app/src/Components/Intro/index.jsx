import { useEffect, useRef } from "react";
import "./intro.css";
import Logo from "../../assets/name-logo.png";
import TaDum from "../../assets/Netflix.mp3";

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
      <div className="intro-content">
        <img src={Logo} className="netflix-logo" alt="Logo" />

        <h1 className="intro-name">
          {"ADITYA".split("").map((c, i) => (
            <span key={i} style={{ animationDelay: `${1.2 + i * 0.12}s` }}>
              {c}
            </span>
          ))}
        </h1>
      </div>

      <div className="intro-glow" />
      <audio ref={audioRef} src={TaDum} preload="auto" />
    </div>
  );
}

export default Intro;