import React from 'react';
import './port6.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const dummyData = [
  { skill: 'JavaScript', current: 70, required: 90 },
  { skill: 'ReactJS', current: 60, required: 85 },
  { skill: 'NodeJS', current: 50, required: 75 },
  { skill: 'UI/UX', current: 40, required: 80 },
  { skill: 'Database', current: 55, required: 70 },
];

const Port6 = () => {
  return (
    <div className="port6-skill-gap-analysis">
      <div className="port6-chart-container">
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={dummyData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" />
          <PolarRadiusAxis />
          <Radar name="Current Skills" dataKey="current" stroke="#4fd1c5" fill="#4fd1c5" fillOpacity={0.6} />
          <Radar name="Required Skills" dataKey="required" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </div>
      <div className="port6-recommendations">
        <h3>Recommendations:</h3>
        <ul>
          <li>Focus on improving ReactJS and UI/UX skills.</li>
          <li>Practice backend development using NodeJS.</li>
          <li>Take advanced courses on JavaScript and databases.</li>
        </ul>
      </div>
    </div>
  );
};

export default Port6;
