import React, { useState } from "react";
import "./port1.css";

const Port1 = () => {
    const [skills, setSkills] = useState([]);
    const [search, setSearch] = useState("");
    const allSkills = [
      "No Technical Skills",
      "Basic Programming Knowledge",
      "Understanding of Generative AI",
      "Experience in UI/UX Design",
      "Machine Learning",
      "Project Management",
      "Data Analysis",
      "Cloud Computing",
    ];
  
    const addSkill = (skill) => {
      if (!skills.includes(skill)) {
        setSkills([...skills, skill]);
      }
      setSearch(""); // Clear search
    };
  
    const removeSkill = (skill) => {
      setSkills(skills.filter((s) => s !== skill));
    };


  return (
    <div className="modal">
      <form className="form">
        <i className="fa-solid fa-circle-user"></i>
        <h2 className="form_title">Idea Submission Form</h2>

        {/* Basic Information */}
        <div className="input_container">
          <label htmlFor="name" className="input_label">Full Name</label>
          <input
            id="name"
            className="input_field"
            type="text"
            placeholder="e.g., Robert Alison"
            required
          />
        </div>

        <div className="input_container">
          <label htmlFor="email" className="input_label">Email</label>
          <input
            id="email"
            className="input_field"
            type="email"
            placeholder="e.g., robert@gmail.com"
            required
          />
        </div>

        {/* Idea Details */}
        <div className="input_container">
          <label htmlFor="ideaTitle" className="input_label">Idea Title</label>
          <input
            id="ideaTitle"
            className="input_field"
            type="text"
            placeholder="e.g., AI-Powered Language Learning App"
            required
          />
        </div>

        <div className="input_container">
          <label htmlFor="ideaDescription" className="input_label">Idea Description</label>
          <textarea
            id="ideaDescription"
            className="input_field textarea_field"
            placeholder="Describe your idea in detail..."
            rows="4"
            required
          ></textarea>
        </div>

        {/* Target Audience */}
        <div className="input_container">
          <label htmlFor="audience" className="input_label">Primary Audience</label>
          <select id="audience" className="input_field" required>
            <option value="" disabled selected>Select audience</option>
            <option value="individuals">Individuals</option>
            <option value="small-businesses">Small Businesses</option>
            <option value="enterprises">Enterprises</option>
            <option value="nonprofits">Nonprofits</option>
          </select>
        </div>

        {/* Relevant Skills with Search */}
        <div className="input_container">
          <label htmlFor="skills" className="input_label">Relevant Skills</label>
          <div className="search_dropdown">
            <input
              id="skillsSearch"
              className="input_field"
              type="text"
              placeholder="Search and add skills"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <ul className="dropdown_list">
                {allSkills
                  .filter((skill) =>
                    skill.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filteredSkill) => (
                    <li
                      key={filteredSkill}
                      className="dropdown_item"
                      onClick={() => addSkill(filteredSkill)}
                    >
                      {filteredSkill}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="selected_skills">
            {skills.map((skill) => (
              <button
                key={skill}
                className="skill_button"
                onClick={(e) => {
                  e.preventDefault();
                  removeSkill(skill);
                }}
              >
                {skill} <span className="remove_skill">×</span>
              </button>
            ))}
          </div>
        </div>


        {/* Challenges and Support */}
        <div className="input_container">
          <label htmlFor="challenges" className="input_label">Biggest Challenges</label>
          <textarea
            id="challenges"
            className="input_field textarea_field"
            placeholder="Describe the challenges you're facing..."
            rows="3"
          ></textarea>
        </div>
{/* File Upload */}
        <div className="input_container">
          <label htmlFor="fileUpload" className="input_label">Upload Supporting Files</label>
          <label htmlFor="fileUpload" className="file_upload_label">
            Choose File
            <input id="fileUpload" className="file_upload_input" type="file" />
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit_button">
          Submit Idea
        </button>
      </form>
    </div>
  );
};

export default Port1;
