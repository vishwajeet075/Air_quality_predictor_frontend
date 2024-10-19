import React from 'react';
import NavBar from './Navbar'; 
import Map from './Map';
import AirQualityScale from './AirQualityScale';
import AirQualityComponent from './AirQualityComponent';
import AQIComponent from './AQIComponent';
import AQIApp from './AQIApp';
import AirQualityService from './AirQualityService';
import Monitor from './Monitor';

export default function Home() {
  // Function to handle scroll on down arrow click
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    mapContainer: {
      height: '100vh',
      width: '100%',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    },
    downArrow: {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '2rem',
      cursor: 'pointer',
      zIndex: 2,
    },
    contentContainer: {
      padding: '20px',
      backgroundColor: '#f8f8f8',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
    },
    airQualitySection: {
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
  };

  return (
    <>
      {/* Sticky Navbar */}
      <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />

      {/* Page Container */}
      <div style={styles.pageContainer}>
        
        {/* Map Container */}
        <div style={styles.mapContainer}>
          <Map />
          {/* Down arrow that scrolls to the next section */}
          <div style={styles.downArrow} onClick={scrollToContent}>
            ⬇️
          </div>
        </div>

        {/* Content Section */}
        <div id="content-section" style={styles.contentContainer}>

        <div style={styles.airQualitySection}>
            <AQIComponent />
          </div>
          
          <div style={styles.airQualitySection}>
          {/* Air Quality Scale Section */}
            <AirQualityScale />
          </div>
     

          {/* Air Quality Component Section */}
          <div style={styles.airQualitySection}>
            <AirQualityComponent />
          </div>

          {/* AQI App Section */}
          <div style={styles.airQualitySection}>
            <AQIApp /> {/* AQIApp component with its responsive styles */}
          </div>

          <div style={styles.airQualitySection}>
            <AirQualityService /> {/* AQIApp component with its responsive styles */}
          </div>

          <div style={styles.airQualitySection}>
            <Monitor /> {/* AQIApp component with its responsive styles */}
          </div>
          

        </div>
      </div>
    </>
  );
}
