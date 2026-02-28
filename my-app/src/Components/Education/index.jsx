import './style.css';
import Giet from '../../assets/image/giet.jpeg';
import Talent from '../../assets/image/talent.jpeg';

export default function Educationcomponents() {
  const educationData = [
    {
      title: "Intermediate",
      institute: "Talent's Koraput, Koraput, Odisha",
      course: "Science (Physics, Chemistry, Mathematics & Biology)",
      year: "2021 - 2023",
      image: Talent,
    },
    {
      title: "Engineering",
      institute: "GIET University, Gunupur, Rayagada, Odisha",
      course: "Computer Science Engineering in AI & ML",
      year: "2023 - Continue",
      image: Giet,
    },
  ];

  return (
    <section className="education-section">
      <h1>Education</h1>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <img src={edu.image} alt={edu.institute} className="edu-icon" />
            <div className="edu-text">
              <h5>{edu.institute}</h5>
              <p>{edu.course}</p>
              <span className="year">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
