import './style.css';
import Evote from '../../assets/image/evote.png';
import Farmtech from '../../assets/image/farmtech.png';
import Netflix from '../../assets/image/Netflix.png';
import Homesathi from '../../assets/image/Homesathi.png';
import Aichaker from '../../assets/image/Aichaker.png';
import Kisansathi from '../../assets/image/kishan sathi.png';
import Ecom from '../../assets/image/ecom.png';
import MadicAi from '../../assets/image/medicAi.png';
import Accident from '../../assets/image/Accident.png';

export default function ExpConpo() {
  const projects = [
    {
      title: "AI Powered e-Voting System",
      description: "A secure e-voting prototype that authenticates voters using real-time face recognition.",
      image: Evote,
      problem: "Traditional voting systems are slow and prone to fraud.",
      solution: "Uses Flask, SQL, OpenCV for secure voting & authentication.",
      impact: "Reduces fraud and speeds up validation.",
      technology: "HTML, CSS, Bootstrap, JavaScript, Python, Flask, SQL, OpenCV",
      github: "https://github.com/Adi-ADI2005/AI-Powered-EVoting-System",
      liveDemo: "#",
    },
    {
      title: "FarmTech",
      description: "ML model predicting the best crop using soil & weather data.",
      image: Farmtech,
      problem: "Farmers struggle to pick optimal crops.",
      solution: "Predicts crops + weather forecast + AI chatbot.",
      impact: "Improves productivity & reduces loss.",
      technology: "Python, Flask, scikit-learn, Pandas, Numpy, HTML, CSS,  Bootstrap, JavaScript, open AI API, OpenWeather API, Mongodb ,AI chatbot",
      github: "https://github.com/Adi-ADI2005/FarmTech-.git",
      liveDemo: "#",
    },
    {
      title: "AcciAlartAi",
      description: "AcciAlartAi is a machine learning-based system that predicts accident severity using road and weather details.",
      image: Accident,
      problem: "Road accidents cause major loss of life, and it is difficult to quickly assess how severe an accident might be..",
      solution: "The system takes inputs like weather condition, road junction type, and road condition to predict severity as Minor, Major, or Fatal.",
      impact: "It helps authorities and drivers take faster safety measures and improve emergency response planning.",
      technology: "HTML, CSS, Bootstrap, JavaScript, MongoDB,Flask, scikit-learn, Pandas, Numpy",
      github: "https://github.com/Adi-ADI2005/AcciAlart-AI.git",
      liveDemo: "#",

    },
    {
      title: "Netflix Clone",
      description: "Frontend Netflix clone using React.",
      image: Netflix,
      problem: "Streaming UI personalization is difficult.",
      solution: "Smooth responsive React UI.",
      impact: "Shows frontend development skills.",
      technology: "React, CSS, Bootstrap, HTML",
      github: "https://github.com/Adi-ADI2005/Netflix-clone",
      liveDemo: "#",
    },
    
    {
      title: "Home Sathi AI",
      description: "Real estate price prediction using ML.",
      image: Homesathi,
      problem: "Property prices fluctuate unpredictably.",
      solution: "Flask + ML for accurate predictions.",
      impact: "Improves buying/selling decisions.",
      technology: "HTML, CSS, Bootstrap, JavaScript, Python, Flask, pandas, scikit-learn",
      github: "https://github.com/Adi-ADI2005/HomeSight",
      liveDemo: "#",
    },
    {
      title: "AICheckMate",
      description: "AI plagiarism checker for text, PDF, and code.",
      image: Aichaker,
      problem: "Manual plagiarism checking is slow.",
      solution: "Flask + AI similarity detection.",
      impact: "Ensures originality.",
      technology: "HTML, CSS, Bootstrap, JavaScript, Python, Flask, AI ,SERP API KEY , SAPLING API KEY ",
      github: "https://github.com/Adi-ADI2005/AICheckMate",
      liveDemo: "#",
    },
    {
      title: "Kisansathi AI",
      description: "Predicts top 3 crops + market prices.",
      image: Kisansathi,
      problem: "Hard to choose profitable crops.",
      solution: "ML crop prediction + market data.",
      impact: "Improves farmer profit.",
      technology: "React JS, CSS, Bootstrap, Python, Flask, scikit-learn, OpenWeather API, AGMARKNET API ",
      github: "https://github.com/Adi-ADI2005/KisanSathi-AI",
      liveDemo: "#",
    },
    {
      title: "Ecom",
      description: "Full e-commerce platform.",
      image: Ecom,
      problem: "Small businesses lack online stores.",
      solution: "Java Spring Boot + MySQL + Admin panel.",
      impact: "Boosts online sales.",
      technology: "Java Spring Boot, HTML, CSS, JSP, MySQL",
      github: "https://github.com/Adi-ADI2005/Ecommerce",
      liveDemo: "#",
    },
    {
      title: "MedicAI",
      description: "AI medicine recommendation system.",
      image: MadicAi,
      problem: "Finding correct medicine is slow.",
      solution: "Flask + Dataset based recommendation.",
      impact: "Improves healthcare accuracy.",
      technology: "HTML, CSS, Bootstrap, Python, Flask, Pandas, NumPy, pickle",
      github: "https://github.com/Adi-ADI2005/MedicAI",
      liveDemo: "#",
    },
  ];

  return (
    <section className="exp-section">
      <h1>My Projects</h1>

      <div className="exp-content">
        {projects.map((proj, index) => (
          <div className="exp-card" key={index}>
            <div className="project-bg">
              <img src={proj.image} alt={proj.title} className="project-img" />
            </div>

            <h5>{proj.title}</h5>
            <p className="proj-description">{proj.description}</p>

            <div className="proj-info">
              <h6>💡 Problem</h6>
              <p>{proj.problem}</p>

              <h6>🛠 Solution</h6>
              <p>{proj.solution}</p>

              <h6>🌟 Impact</h6>
              <p>{proj.impact}</p>

              <h6>⚡ Technology</h6>

              {/* TECHNOLOGY TAGS */}
              <div className="tech-list">
  {proj.technology.split(",").map((tech, i) => (
    <span className="tech-tag" key={i}>{tech.trim()}</span>
  ))}
</div>

            </div>

            <div className="contact-item">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="click-button github-btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>

              <button
                className="click-button live-btn"
                onClick={() => alert("Live demo coming soon!")}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
