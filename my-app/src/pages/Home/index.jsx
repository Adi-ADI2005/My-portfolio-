import './style.css';
import HeroImage from '../../assets/hero.png';
import AdiImg from '../../assets/adiimg.png';
import NameLogo from '../../assets/name-logo.png';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Journey from '../Journey/index.jsx';
import Contact from '../Contact/index.jsx';
import Intro from '../../Components/Intro/index.jsx';

import Herobg from '../../assets/name-logo.png';

const roles = [
  "Programmer",
  "Software Developer",
  "Backend Developer",
  "AI Developer",
  "ML/DL Developer"
];

function Home() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Typing effect
  useEffect(() => {
    let currentRole = roles[index];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(currentRole.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentRole.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index]);

  // Netflix intro timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <Intro />}

      {!showIntro && (
        <>
          {/* Wrapper with background image & color */}
          <section
            className="hero-wrapper"
            style={{
              backgroundImage: `url(${Herobg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#0e0e0e"
            }}
          >
            {/* Transparent overlay */}
            <div className="hero-overlay">
              <section className="hero-bg d-flex align-items-center">
                <div className="container hero-container d-flex flex-column-reverse flex-md-row align-items-center">

                  {/* Left Side */}
                  <div className="hero-left fade-in-left text-center text-md-start">
                    <div className="hero-title">
                      <h1>
                        Hi There 👋 <br />
                        I'm <span>Aditya </span>Mishra
                      </h1>
                      <p>
                        I'm a <span className="typing">{displayText}</span>
                        <span className="cursor">|</span>
                      </p>

                      {/* Buttons */}
                      <div className="hero-buttons">
                        <button onClick={() => setShowAbout(true)}>About</button>
                        <a href="/Aditya_Mishra_CV.pdf" download>
                          <button>Download CV</button>
                        </a>
                      </div>

                      {/* Contact Icons */}
                      <div className="contact-icons">
                        <a href="mailto:myselfadi009@gmail.com" target="_blank" rel="noopener noreferrer">
                          <FaEnvelope />
                        </a>
                        <a href="https://linkedin.com/in/myselfadi" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/my_self_____adi" target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                        <a href="https://x.com/my_self__adi" target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="hero-right fade-in-right">
                    <div className="hero-image-container">
                      <div className="background-wall"></div>
                      <img src={HeroImage} alt="Aditya" className="hero-image" />
                    </div>
                  </div>

                </div>
              </section>
            </div>
          </section>

          {/* About Popup */}
          {showAbout && (
            <div className="popup" onClick={() => setShowAbout(false)}>
              <div
                className="popup-content"
                style={{ backgroundImage: `url(${NameLogo})` }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={() => setShowAbout(false)}>✖</button>

                <div className="about-container">
                  <div className="about-left">
                    <img src={AdiImg} alt="Aditya" />
                  </div>
                  <div className="about-right">
                    <h2>About Me</h2>
                    <p>
                      Hi! I'm <span>Aditya Mishra</span>, a dedicated Full Stack Developer and Machine Learning enthusiast.
                      I specialize in both frontend and backend development, creating responsive UIs with React.js and robust server-side apps using Flask, Django and Java.
                      I work with databases like MySQL, MongoDB, and Oracle, and have hands-on ML experience using Python, Pandas, NumPy, and Scikit-learn.
                    </p>
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

export default Home;