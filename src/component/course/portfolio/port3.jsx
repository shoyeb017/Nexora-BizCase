import React, { useState, useEffect } from "react";
import "./port3.css";
import { FaTimes } from "react-icons/fa";

const jobSuggestions = [
  "Software Engineer",
  "Data Scientist",
  "Graphic Designer",
  "Product Manager",
  "Cybersecurity Analyst",
];
const industrySuggestions = [
  "Technology",
  "Healthcare",
  "Education",
  "Finance",
  "Entertainment",
];

const Port3 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const [selectedJobs, setSelectedJobs] = useState([]);
  useEffect(() => {
    // Pre-select some dummy job suggestions
    setSelectedJobs(["Software Engineer", "Data Scientist"]);
    setSelectedIndustries(["Technology"]);
  }, []);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [thoughts, setThoughts] = useState("");

  const jobTypes = ["Remote", "On-site", "Freelance"];

  const handleSelect = (item, list, setter) => {
    if (!list.includes(item)) setter([...list, item]);
  };

  const handleRemove = (item, list, setter) => {
    setter(list.filter((i) => i !== item));
  };

  const toggleJobType = (type) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter((t) => t !== type));
    } else {
      setJobType([...jobType, type]);
    }
  };

  return (
    <div className="port3-container">
      {/* Job Role Search */}
      <div className="port3-container-search-section">
        <label className="port3-container-label" htmlFor="job-search">
          Search Job Roles
        </label>
        <input
          type="text"
          id="job-search"
          placeholder="Search job roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div className="port3-container-search-results">
            {jobSuggestions
              .filter((job) =>
                job.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((job, index) => (
                <div
                  key={index}
                  className="port3-container-result-item"
                  onClick={() =>
                    handleSelect(job, selectedJobs, setSelectedJobs)
                  }
                >
                  {job}
                </div>
              ))}
          </div>
        )}
        <div className="port3-container-selected-items">
          {selectedJobs.map((job, index) => (
            <button key={index} className="port3-container-tag">
              {job}{" "}
              <FaTimes
                onClick={() => handleRemove(job, selectedJobs, setSelectedJobs)}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Industry Search */}
      <div className="port3-container-search-section">
        <label className="port3-container-label" htmlFor="industry-search">
          Search Industries
        </label>
        <input
          type="text"
          id="industry-search"
          placeholder="Search industries..."
          value={industrySearch}
          onChange={(e) => setIndustrySearch(e.target.value)}
        />
        {industrySearch && (
          <div className="port3-container-search-results">
            {industrySuggestions
              .filter((industry) =>
                industry.toLowerCase().includes(industrySearch.toLowerCase())
              )
              .map((industry, index) => (
                <div
                  key={index}
                  className="port3-container-result-item"
                  onClick={() =>
                    handleSelect(
                      industry,
                      selectedIndustries,
                      setSelectedIndustries
                    )
                  }
                >
                  {industry}
                </div>
              ))}
          </div>
        )}
        <div className="port3-container-selected-items">
          {selectedIndustries.map((industry, index) => (
            <button key={index} className="port3-container-tag">
              {industry}{" "}
              <FaTimes
                onClick={() =>
                  handleRemove(
                    industry,
                    selectedIndustries,
                    setSelectedIndustries
                  )
                }
              />
            </button>
          ))}
        </div>
      </div>

      {/* Job Type Selection */}
      <div className="port3-container-job-types">
        <label className="port3-container-label">Job Type</label>
        <div className="port3-container-type-buttons">
          {jobTypes.map((type) => (
            <button
              key={type}
              className={`port3-container-job-type-button ${
                jobType.includes(type) ? "selected" : ""
              }`}
              onClick={() => toggleJobType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Thoughts Section */}
      <div className="port3-container-thoughts-section">
        <h3 className="port3-container-thoughts-h3">Unsure about your job role or industry?</h3>
        <p className="port3-container-thoughts-p">Don't worry—share your thoughts and story with us below.</p>
        <textarea
          placeholder="Write your thoughts..."
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Port3;
