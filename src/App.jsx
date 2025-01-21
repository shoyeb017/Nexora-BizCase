import React, { useState } from 'react';
import NavbarLearner from './NavbarLearner';
import NavbarManagement from './NavbarManagement';
import 'react-toggle/style.css'; // Import default toggle styles
import './App.css';

function App() {
  const [isLearner, setIsLearner] = useState(true);

  const toggleMode = () => {
    setIsLearner(prevState => !prevState);
  };

  return (
    <div className="container">
      {isLearner ? <NavbarLearner toggleMode={toggleMode} /> : <NavbarManagement toggleMode={toggleMode} />}
      <main>
        <h1>{isLearner ? 'Learner Dashboard' : 'Management Dashboard'}</h1>
        <p>{isLearner ? 'This is dummy content for learners.' : 'This is dummy content for management.'}</p>
      </main>
    </div>
  );
}

export default App;
