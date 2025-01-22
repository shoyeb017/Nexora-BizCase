import React, { useState } from "react";
import { FaPlus, FaTrash, FaUserGraduate, FaMedal, FaStar } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import "./port2.css";

const port2 = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "React", proficiency: "Advanced" },
    { id: 2, name: "Communication", proficiency: "Intermediate" },
  ]);
  const [certificates, setCertificates] = useState([
    { id: 1, file: null, additionalInfo: "Certification in React" },
  ]);

  const addSkill = () => {
    setSkills([...skills, { id: Date.now(), name: "", proficiency: "Beginner" }]);
  };

  const updateSkill = (id, key, value) => {
    setSkills(skills.map((skill) => (skill.id === id ? { ...skill, [key]: value } : skill)));
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const addCertificate = () => {
    setCertificates([...certificates, { id: Date.now(), file: null, additionalInfo: "" }]);
  };

  const updateCertificate = (id, key, value) => {
    setCertificates(certificates.map((cert) => (cert.id === id ? { ...cert, [key]: value } : cert)));
  };

  const removeCertificate = (id) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };

  return (
    <div className="pro2-container">
      <div className="pro2-section1">
        <label className="pro2-subtitle">Skills</label>
        {skills.map((skill) => (
          <div key={skill.id} className="pro2-skill-slot">
            <input
              type="text"
              placeholder="Skill Name"
              className="pro2-input"
              value={skill.name}
              onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
            />
            <div className="pro2-proficiency">
              <FaUserGraduate
                className={`pro2-proficiency-icon ${skill.proficiency === "Beginner" ? "selected" : ""}`}
                onClick={() => updateSkill(skill.id, "proficiency", "Beginner")}
              />
              <FaMedal
                className={`pro2-proficiency-icon ${skill.proficiency === "Intermediate" ? "selected" : ""}`}
                onClick={() => updateSkill(skill.id, "proficiency", "Intermediate")}
              />
              <FaStar
                className={`pro2-proficiency-icon ${skill.proficiency === "Advanced" ? "selected" : ""}`}
                onClick={() => updateSkill(skill.id, "proficiency", "Advanced")}
              />
            </div>
            <button className="pro2-remove-btn" onClick={() => removeSkill(skill.id)}>
            <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))}
        <button className="pro2-add-btn" onClick={addSkill}>
          <FaPlus /> Add Skill
        </button>
      </div>

      {/* Certifications Section */}
      <div className="pro2-section2">
        <label className="pro2-subtitle">Certifications or Projects</label>
        {certificates.map((cert) => (
          <div key={cert.id} className="pro2-cert-slot">
            <div className="pro2-file-upload">
              <AiOutlineUpload className="pro2-upload-icon" />
              <input
  type="file"
  id={`file-input-${cert.id}`}
  className="pro2-input-file"
  onChange={(e) => updateCertificate(cert.id, "file", e.target.files[0])}
/>
<label htmlFor={`file-input-${cert.id}`} className="custom-file-label">
  Choose File
</label>

            </div>
            <textarea
              placeholder="Additional Information"
              className="pro2-textarea"
              value={cert.additionalInfo}
              onChange={(e) => updateCertificate(cert.id, "additionalInfo", e.target.value)}
            />
            <button className="pro2-remove-btn" onClick={() => removeCertificate(cert.id)}>
            <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))}
        <button className="pro2-add-btn" onClick={addCertificate}>
          <FaPlus /> Add Certification/Project
        </button>
      </div>

      {/* <button className="pro2-submit-btn">Submit</button> */}
    </div>
  );
};

export default port2;