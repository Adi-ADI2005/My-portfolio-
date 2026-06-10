import './style.css';

import skill from '../../assets/skill.png';
import coding from '../../assets/coding.png';
import fullstack from '../../assets/fullstack.png';
import db from '../../assets/db.jpeg';

import Bootstrap from '../../assets/skil-img/bootstrap-5.png';
import C from '../../assets/skil-img/c.png';
import Css from '../../assets/skil-img/css.png';
import Django from '../../assets/skil-img/Django.png';
import Flask from '../../assets/skil-img/Flask.png';
import Html from '../../assets/skil-img/html-icon.png';
import Java from '../../assets/skil-img/java.png';
import Js from '../../assets/skil-img/js.png';
import Mongodb from '../../assets/skil-img/MongoDB.png';
import Mysql from '../../assets/skil-img/MySQL.png';
import Nodejs from '../../assets/skil-img/nodejs.png';
import Oracle from '../../assets/skil-img/Oracle.png';
import Python from '../../assets/skil-img/python.png';
import ReactLogo from '../../assets/skil-img/react.png';
import sql from '../../assets/skil-img/SQL.png';

import Ml from '../../assets/skil-img/ml.png';
import Tensorflow from '../../assets/skil-img/TensorFlow.png';
import Pandas from '../../assets/skil-img/Pandas.png';
import Numpy from '../../assets/skil-img/NumPy.png';
import Sklearn from '../../assets/skil-img/scikit-learn.png';

const categories = [
  {
    img: coding,
    title: "Coding Skills",
    containerClass: "cimg",
    icons: [
      { src: C, alt: "C", name: "C" },
      { src: Python, alt: "Python", name: "Python" },
      { src: Java, alt: "Java", name: "Java" },
    ],
  },
  {
    img: fullstack,
    title: "Frontend",
    containerClass: "fimg",
    icons: [
      { src: Html, alt: "HTML", name: "HTML" },
      { src: Css, alt: "CSS", name: "CSS" },
      { src: Js, alt: "JavaScript", name: "JavaScript" },
      { src: Bootstrap, alt: "Bootstrap", name: "Bootstrap" },
      { src: ReactLogo, alt: "React", name: "React" },
    ],
  },
  {
    img: db,
    title: "Backend & DB",
    containerClass: "dimg",
    icons: [
      { src: Flask, alt: "Flask", name: "Flask" },
      { src: Django, alt: "Django", name: "Django" },
      { src: Nodejs, alt: "Node.js", name: "Node.js" },
      { src: Mongodb, alt: "MongoDB", name: "MongoDB" },
      { src: Mysql, alt: "MySQL", name: "MySQL" },
      { src: Oracle, alt: "Oracle", name: "Oracle" },
      { src: sql, alt: "SQL", name: "SQL" },
    ],
  },
  {
    img: Ml,
    title: "Machine Learning",
    containerClass: "mlimg",
    icons: [
      { src: Tensorflow, alt: "TensorFlow", name: "TensorFlow" },
      { src: Pandas, alt: "Pandas", name: "Pandas" },
      { src: Numpy, alt: "NumPy", name: "NumPy" },
      { src: Sklearn, alt: "Scikit-Learn", name: "Scikit-Learn" },
    ],
  },
];

export default function SkillComponents() {
  return (
    <section className="skill-cont">
      <div className="skill-tital">
        <div className="spic">
          <img src={skill} alt="Skill Icon" className="img-fluid" />
        </div>
        <h2>Skills</h2>
      </div>

      <p>
        Skilled in C, Java, and Python with full-stack web development and ML expertise —
        spanning frontend, backend, data science, and intelligent systems.
      </p>

      <div className="row">
        {categories.map((cat, ci) => (
          <div key={ci} className="col-md-3">
            <img src={cat.img} alt={cat.title} className="img-fluid" />
            <h3>{cat.title}</h3>
            <div className={cat.containerClass}>
              {cat.icons.map((icon, ii) => (
                <div className="skill-icon" key={ii} data-name={icon.name}>
                  <img src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
