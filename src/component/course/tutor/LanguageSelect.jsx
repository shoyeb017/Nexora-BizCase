import React, { useState, useEffect } from "react";
import "./LanguageSelect.css";

const LanguageSelect = () => {
  const languages = [
    { language: "English", accent: "American" },
    { language: "English", accent: "British" },
    { language: "Spanish", accent: "Castilian" },
    { language: "Spanish", accent: "Latin American" },
    { language: "French", accent: "Parisian" },
    { language: "French", accent: "Quebecois" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: "English",
    accent: "American", // Default selection
  });

  const [result, setResult] = useState("");

  // Update result whenever selectedLanguage changes
  useEffect(() => {
    setResult(
      `You selected: ${selectedLanguage.language} - ${selectedLanguage.accent}`
    );
  }, [selectedLanguage]);

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lang.accent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (lang) => {
    setSelectedLanguage(lang);
    setSearchQuery(""); // Clear search bar after selection
    setShowDropdown(false); // Close dropdown
  };

  return (
    <div className="language-select">
      <h3>Select Language and Accent</h3>
      <input
        type="text"
        placeholder="Search language or accent..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowDropdown(e.target.value.trim() !== "");
        }}
        className="search-input"
        onFocus={() => setShowDropdown(searchQuery.trim() !== "")}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
      />
      {showDropdown && (
        <div className="languages-dropdown">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((lang, index) => (
              <div
                key={index}
                className={`language-card ${
                  selectedLanguage?.language === lang.language &&
                  selectedLanguage?.accent === lang.accent
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSelect(lang)}
              >
                <h4>{lang.language}</h4>
                <p>{lang.accent}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      )}
      {result && (
        <div className="selected-language">
          <h4>{result}</h4>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
