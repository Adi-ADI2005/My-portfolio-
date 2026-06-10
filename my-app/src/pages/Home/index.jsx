import './style.css';
import HeroImage from '../../assets/hero.png';
import NameLogo  from '../../assets/name-logo.png';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Journey from '../Journey/index.jsx';
import Contact  from '../Contact/index.jsx';
import Intro    from '../../Components/Intro/index.jsx';

import Python     from '../../assets/skil-img/python.png';
import Pandas     from '../../assets/skil-img/Pandas.png';
import Numpy      from '../../assets/skil-img/NumPy.png';
import Sklearn    from '../../assets/skil-img/scikit-learn.png';
import Tensorflow from '../../assets/skil-img/TensorFlow.png';

const roles = [
  "Programmer",
  "Software Developer",
  "Backend Developer",
  "AI Developer",
  "ML/DL Developer"
];

const aboutSkills = [
  { src: Python,     alt: "Python"      },
  { src: Pandas,     alt: "Pandas"      },
  { src: Numpy,      alt: "NumPy"       },
  { src: Sklearn,    alt: "Scikit-learn"},
  { src: Tensorflow, alt: "TensorFlow"  },
];

function CursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-glow" ref={glowRef} />;
}

export default function Home() {
  const [roleIdx,     setRoleIdx]     = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showAbout,   setShowAbout]   = useState(false);
  const [showIntro,   setShowIntro]   = useState(true);

  /* typing effect */
  useEffect(() => {
    let charIdx = 0;
    const role = roles[roleIdx];
    const id = setInterval(() => {
      setDisplayText(role.slice(0, charIdx + 1));
      charIdx++;
      if (charIdx === role.length) {
        clearInterval(id);
        setTimeout(() => {
          setRoleIdx((p) => (p + 1) % roles.length);
          setDisplayText("");
        }, 1100);
      }
    }, 85);
    return () => clearInterval(id);
  }, [roleIdx]);

  /* intro timer */
  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(t);
  }, []);

  /* lock body scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = showAbout ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showAbout]);

  return (
    <>
      <CursorGlow />

      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          {/* ── HERO ──────────────────────────────────────────── */}
          <section className="hero-wrapper">
            <div className="hero-overlay">
              <section className="hero-bg d-flex align-items-center">
                <div className="container hero-container d-flex flex-column-reverse flex-md-row align-items-center">

                  {/* Left text */}
                  <div className="hero-left text-center text-md-start">
                    <div className="hero-title">
                      <div className="hero-eyebrow">
                        <span className="hero-eyebrow-dot" />
                        Available for opportunities
                      </div>
                      <h1>Hi, I'm <span>Aditya</span> Mishra</h1>

                      {/* Terminal typing block */}
                      <div className="terminal-box">
                        <div className="terminal-bar">
                          <span className="t-dot t-red" />
                          <span className="t-dot t-yellow" />
                          <span className="t-dot t-green" />
                          <span className="t-title">bash — aditya@portfolio</span>
                        </div>
                        <div className="terminal-body">
                          <span className="t-prompt">user@portfolio:~$&nbsp;</span>
                          <span className="t-cmd">whoami</span>
                          <br />
                          <span className="t-prompt">&gt;&nbsp;</span>
                          <span className="t-output">{displayText}</span>
                          <span className="t-cursor">█</span>
                        </div>
                      </div>
                    </div>

                    <div className="hero-buttons">
                      <button onClick={() => setShowAbout(true)}>About Me</button>
                      <a href="/Aditya_Mishra_CV.pdf" download>
                        <button>Download CV</button>
                      </a>
                    </div>

                    <div className="contact-icons">
                      <a href="mailto:aadityamishra.0085@gmail.com"      target="_blank" rel="noopener noreferrer" title="Email">    <FaEnvelope  /></a>
                      <a href="https://linkedin.com/in/myselfadi"        target="_blank" rel="noopener noreferrer" title="LinkedIn"> <FaLinkedin  /></a>
                      <a href="https://instagram.com/my_self_____adi"    target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                      <a href="https://x.com/my_self__adi"               target="_blank" rel="noopener noreferrer" title="X">        <FaXTwitter  /></a>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="hero-right">
                    <div className="hero-image-container">
                      <div className="hero-ring" />
                      <div className="background-wall" />
                      <img src={HeroImage} alt="Aditya Mishra" className="hero-image" />
                      <div className="hero-badge">
                        <span className="hero-badge-num">9+</span>
                        <span className="hero-badge-label">Projects</span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </section>

          {/* ── ABOUT POPUP ───────────────────────────────────── */}
          {showAbout && (
            <div className="popup" onClick={() => setShowAbout(false)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setShowAbout(false)}>✖</button>

                {/* Watermark logo — sits behind all content */}
                <img src={NameLogo} alt="" className="about-watermark" aria-hidden="true" />

                <div className="about-container">

                  {/* Large red heading — top left */}
                  <div className="about-heading-row">
                    <h2>About Me</h2>
                  </div>

                  {/* Body text */}
                  <div className="about-body">
                    <p>
                      Hi! I'm <span className="highlight-name">Aditya Mishra</span>— a passionate
                      Full Stack Developer and Machine Learning enthusiast who loves turning ideas into
                      powerful, user-focused digital experiences. I specialize in building modern,
                      scalable, and visually engaging{" "}
                      <span className="highlight-tech">web applications</span> that not only look great
                      but also perform seamlessly. From crafting{" "}
                      <span className="highlight-tech">responsive frontends</span> to developing robust{" "}
                      <span className="highlight-tech">backend systems</span>, I enjoy working across
                      the entire development lifecycle.
                    </p>
                  </div>

                  {/* Skill icons — centred row */}
                  <div className="about-skills-row">
                    {aboutSkills.map((s) => (
                      <img
                        key={s.alt}
                        src={s.src}
                        alt={s.alt}
                        title={s.alt}
                        className="about-skill-icon"
                      />
                    ))}
                  </div>

                </div>
              </div>
            </div>
          )}

          <Journey />
          <Contact />
        </>
      )}
    </>
  );
}
