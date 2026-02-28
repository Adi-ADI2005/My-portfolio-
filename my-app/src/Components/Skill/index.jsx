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

export default function SkillComponents() {
    return (
        <section className='skill-cont'>
            <div className='d-flex align-items-center g-5 mb-0 skill-tital'>
                
                <div className='spic'>
                    <img src={skill} alt="Skill Icon" className="img-fluid" />
                </div>
                <h2>Skills</h2>
            </div>

            <p>
                I am a skilled programmer in C, Java, and Python with expertise as a Full Stack Web Developer and Machine Learning Developer.
                My skill set spans frontend and backend development, data science, and creative design.
            </p>

            <div className="row">
                {/* Coding Skills */}
                <div className="col-md-3 pic1">
                    <img src={coding} alt="coding" className="img-fluid" />
                    <h3>Coding Skills</h3>
                    <div className="cimg">
                        <div className="skill-icon" data-name="C"><img src={C} alt="C" /></div>
                        <div className="skill-icon" data-name="Python"><img src={Python} alt="Python" /></div>
                        <div className="skill-icon" data-name="Java"><img src={Java} alt="Java" /></div>
                    </div>
                </div>

                {/* Frontend Development */}
                <div className="col-md-3 pic2">
                    <img src={fullstack} alt="fullstack" className="img-fluid" />
                    <h3>Frontend Development</h3>
                    <div className="fimg">
                        <div className="skill-icon" data-name="HTML"><img src={Html} alt="HTML" /></div>
                        <div className="skill-icon" data-name="CSS"><img src={Css} alt="CSS" /></div>
                        <div className="skill-icon" data-name="JavaScript"><img src={Js} alt="JavaScript" /></div>
                        <div className="skill-icon" data-name="Bootstrap"><img src={Bootstrap} alt="Bootstrap" /></div>
                        <div className="skill-icon" data-name="React"><img src={ReactLogo} alt="React" /></div>
                    </div>
                </div>

                {/* Backend Development */}
                <div className="col-md-3 pic3">
                    <img src={db} alt="Database" className="img-fluid" />
                    <h3>Backend Development</h3>
                    <div className="dimg">
                        <div className="skill-icon" data-name="Flask"><img src={Flask} alt="Flask" /></div>
                        <div className="skill-icon" data-name="Django"><img src={Django} alt="Django" /></div>
                        <div className="skill-icon" data-name="Node.js"><img src={Nodejs} alt="Node.js" /></div>
                        <div className="skill-icon" data-name="MongoDB"><img src={Mongodb} alt="MongoDB" /></div>
                        <div className="skill-icon" data-name="MySQL"><img src={Mysql} alt="MySQL" /></div>
                        <div className="skill-icon" data-name="Oracle"><img src={Oracle} alt="Oracle" /></div>
                        <div className="skill-icon" data-name="SQL"><img src={sql} alt="SQL" /></div>
                    </div>
                </div>

                {/* Machine Learning */}
                <div className="col-md-3 pic4">
                    <img src={Ml} alt="ML" className="img-fluid" />
                    <h3>Machine Learning</h3>
                    <div className="mlimg">
                        <div className="skill-icon" data-name="TensorFlow"><img src={Tensorflow} alt="TensorFlow" /></div>
                        <div className="skill-icon" data-name="Pandas"><img src={Pandas} alt="Pandas" /></div>
                        <div className="skill-icon" data-name="NumPy"><img src={Numpy} alt="NumPy" /></div>
                        <div className="skill-icon" data-name="Scikit-Learn"><img src={Sklearn} alt="Scikit-Learn" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
