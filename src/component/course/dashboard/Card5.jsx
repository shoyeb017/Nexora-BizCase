import React from 'react';
import { FaCamera, FaPencilAlt, FaFlask, FaCode, FaArrowRight } from 'react-icons/fa';
import './Card5.css';

const tasks = [
  {
    icon: <FaCamera />,
    title: 'Create Task One',
    daysRemaining: 2,
  },
  {
    icon: <FaPencilAlt />,
    title: 'Create Task Two',
    daysRemaining: 3,
  },
  {
    icon: <FaFlask />,
    title: 'Create Task Three',
    daysRemaining: 4,
  },
  {
    icon: <FaCode />,
    title: 'Create Task Four',
    daysRemaining: 6,
  },
];

const Card5 = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-title">Course Tasks</div>
        <button className="view-all-button">View All</button>
      </div>

      <div className="card-body">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <div className="icon-container">{task.icon}</div>
            <div className="task-details">
              <div className="task-title">{task.title}</div>
              <div className="days-remaining">{task.daysRemaining} days remaining</div>
            </div>
            <div className="arrow-icon">
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card5;
