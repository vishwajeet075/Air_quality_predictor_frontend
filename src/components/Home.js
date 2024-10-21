import React from 'react';
import NavBar from './Navbar'; 
import Map from './Map';
import AirQualityScale from './AirQualityScale';
import AirQualityComponent from './AirQualityComponent';
import AQIApp from './AQIApp';
import AirQualityService from './AirQualityService';
import Monitor from './Monitor';

const Home = () => {
  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentContainer: {
      padding: '80px',
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
      borderRadius: '8px', // Added border radius for better aesthetics
    },
    // Responsive Styles
    '@media (max-width: 768px)': {
      contentContainer: {
        padding: '40px', // Reduce padding on smaller screens
      },
      airQualitySection: {
        padding: '15px',
        marginBottom: '15px',
      },
    },
    '@media (max-width: 480px)': {
      contentContainer: {
        padding: '20px',
      },
      airQualitySection: {
        padding: '10px',
        marginBottom: '10px',
      },
    },
  };

  return (
    <>
      <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      <div style={styles.pageContainer}>
        <div id="map-section" style={{ height: '100vh', width: '100%' }}>
          <Map />
        </div>
        <div id="content-section" style={styles.contentContainer}>

          <div style={styles.airQualitySection}>
            <AirQualityScale />
          </div>
          <div style={styles.airQualitySection}>
            <AirQualityComponent />
          </div>
          <div style={styles.airQualitySection}>
            <AQIApp />
          </div>
          <div style={styles.airQualitySection}>
            <AirQualityService />
          </div>
          <div style={styles.airQualitySection}>
            <Monitor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
