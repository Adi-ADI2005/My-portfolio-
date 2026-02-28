import React, { useState } from "react";
import "./style.css";

// Replace these with your actual components
import SkillComponents from "../Skill/index.jsx";
import ExperiencesCompo from "../Experience/index.jsx";
import EducationCompo from "../Education/index.jsx";

export default function Journey() {
  const [activeTab, setActiveTab] = useState("skill");

  return (
    <section className="journey-bg">
      <div className="journey-container">
        {/* === Title === */}
        <h1 className="journey-title">My Journey</h1>

        {/* === Buttons === */}
        <div className="journey-buttons">
          <button
            className={activeTab === "skill" ? "active" : ""}
            onClick={() => setActiveTab("skill")}
          >
            Skills
          </button>
          <button
            className={activeTab === "project" ? "active" : ""}
            onClick={() => setActiveTab("project")}
          >
            Projects
          </button>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* === Content === */}
        <div className="journey-content">
          {activeTab === "skill" && <SkillComponents />}
          {activeTab === "project" && <ExperiencesCompo />}
          {activeTab === "education" && <EducationCompo />}
        </div>
      </div>
    </section>
  );
}
