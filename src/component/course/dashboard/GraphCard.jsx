import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './GraphCard.css';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

function GraphCard({ completed, inProgress, notStarted, totalHours }) {
  const data = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        label: 'Course Progress',
        data: [completed, inProgress, notStarted],
        backgroundColor: ['#6a00ff', '#00bfff', '#555'],
        borderColor: ['#6a00ff', '#00bfff', '#555'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff', // Adjust text color for dark background
        },
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    maintainAspectRatio: false,
    cutout: '70%',
  };

  return (
    <div className="graph-card">
      <h2 className="graph-title">Learning Progress</h2>
      <div className="graph-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="total-hours">
        <p>Total hours: <strong>{totalHours}</strong></p>
      </div>
    </div>
  );
}

export default GraphCard;
