import React, { useState } from 'react';
import { FaHome, FaChartLine, FaSearch, FaTv } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the navbar open/close
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State for Resources dropdown

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen); // Toggle the Resources dropdown state
  };


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
    icon: {
      fontSize: '1.5rem',
    },
    mobileMenu: {
      display: isOpen ? 'block' : 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 82, 212, 0.9)', // Darker background for dropdown
      padding: '10px 0',
      zIndex: 999,
    },
    mobileNavItem: {
      textAlign: 'center',
      padding: '10px 0',
    },
    togglerButton: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      marginRight: '20px',
    },
    desktopMenu: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    hidden: {
      display: 'none',
    },
    resourcesDropdown: {
      position: 'relative',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: isResourcesOpen ? 'block' : 'none',
      zIndex: 1001,
    },
    dropdownLink: {
      color: '#0052D4',
      padding: '10px 20px',
      display: 'block',
      textDecoration: 'none',
      fontWeight: 'bold',
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
        onClick={toggleNavbar} // Toggle the navbar on button click
        aria-expanded={isOpen} // Update aria attribute based on state
        style={styles.togglerButton}
      >
        {isOpen ? '✖' : '☰'} {/* Toggle icon: Hamburger or Close */}
      </button>
      
      {/* Show desktop menu for larger screens */}
      <div style={window.innerWidth >= 768 ? styles.desktopMenu : styles.hidden}>
        <ul className="navbar-nav">
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
          <li className="nav-item" style={styles.navItem}>
            <button className="nav-link" onClick={()=>navigate('/faq')} style={styles.navLink}>
              <FaTv style={styles.icon} />
            </button>
          </li>

          {/* Resources section with dropdown */}
          <li className="nav-item" style={{ ...styles.navItem, ...styles.resourcesDropdown }}>
            <a className="nav-link" href="#resources" style={styles.navLink} onClick={toggleResourcesDropdown}>
              Resources
            </a>
            {isResourcesOpen && (
              <div style={styles.dropdownMenu}>
                <a className="dropdown-link" href="/faq" style={styles.dropdownLink}>
                  FAQ
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Show mobile menu when open */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <ul className="navbar-nav">
            <li className="nav-item" style={styles.mobileNavItem}>
              <a className="nav-link" href="/" style={styles.navLink} onClick={toggleNavbar}>
                <FaHome style={styles.icon} /> Home
              </a>
            </li>
            <li className="nav-item" style={styles.mobileNavItem}>
              <a className="nav-link" href="/visualize" style={styles.navLink} onClick={toggleNavbar}>
                <FaChartLine style={styles.icon} /> AQI Data
              </a>
            </li>
            <li className="nav-item" style={styles.mobileNavItem}>
              <a className="nav-link" href="/predict" style={styles.navLink} onClick={toggleNavbar}>
                <FaSearch style={styles.icon} /> Predict AQI
              </a>
            </li>
            <li className="nav-item" style={styles.mobileNavItem}>
              <a className="nav-link" href="/monitor" style={styles.navLink} onClick={toggleNavbar}>
                <FaTv style={styles.icon} /> Monitor
              </a>
            </li>
            {/* Mobile Resources Dropdown */}
            <li className="nav-item" style={styles.mobileNavItem}>
              <a className="nav-link" href="/faq" style={styles.navLink} onClick={toggleNavbar}>
                Resources: FAQ
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
