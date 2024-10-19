import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate(); // Hook to get navigation function

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">AQI Pune</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* Use navigate instead of anchor tags */}
            <span className="nav-link" onClick={() => navigate('/')}>Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => navigate('/visualize')}>AQI Data</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => navigate('/predict')}>Predict AQI</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
