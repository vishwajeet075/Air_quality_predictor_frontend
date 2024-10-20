import React from 'react';
import { FaHome, FaChartLine, FaSearch, FaTv } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();
  const styles = {
    navbar: {
      position: 'fixed',  
      top: 0,              
      left: 0,
      right: 0,
      zIndex: 1000,        
      width: '100%',
      background: 'linear-gradient(90deg, #0052D4 0%, #65C7F7 50%, #9CECFB 100%)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      padding: '10px 0',
    },
    navbarBrand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
    },
    navItem: {
      margin: '0 15px',
      fontSize: '1.2rem',
    },
    navLink: {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      padding: '8px 15px',
      transition: 'color 0.3s ease, transform 0.3s ease',
    },
    navLinkHover: {
      transform: 'scale(1.1)',
    },
    icon: {
      fontSize: '1.5rem',
    },
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <a className="navbar-brand" href="/" style={styles.navbarBrand}>
        AQI Pune
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" style={styles.navItem}>
            <button className="nav-link" onClick={()=>navigate('/')} style={styles.navLink}>
              <FaHome style={styles.icon} /> Home
            </button>
          </li>
          <li className="nav-item" style={styles.navItem}>
            <button className="nav-link" onClick={()=>navigate('/visualize')} style={styles.navLink}>
              <FaChartLine style={styles.icon} /> AQI Data
            </button>
          </li>
          <li className="nav-item" style={styles.navItem}>
            <button className="nav-link" onClick={()=>navigate('/predict')} style={styles.navLink}>
              <FaSearch style={styles.icon} /> Predict AQI
            </button>
          </li>
          <li className="nav-item" style={styles.navItem}>
            <button className="nav-link" onClick={()=>navigate('/monitor')} style={styles.navLink}>
              <FaTv style={styles.icon} /> Monitor
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
