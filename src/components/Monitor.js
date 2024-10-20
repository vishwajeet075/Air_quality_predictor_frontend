import React from 'react';
import indoor from '../assets/images/indoor.jpg';
import outdoor from '../assets/images/outdoor.jpg';
import IndoorPollution from './IndoorPollution';
import OutdoorPollution from './OutdoorPollution';
import AirQualityDashboard from './AirQualityDashboard';
import NavBar from './Navbar'; 

const Monitor = () => {
  const styles = {
    section: {
      padding: '80px',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    steps: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    stepCard: {
      width: '200px',
      padding: '20px',
      backgroundColor: '#00a3ff',
      color: '#fff',
      borderRadius: '10px',
      position: 'relative',
      textAlign: 'center',
    },
    stepNumber: {
      position: 'absolute',
      top: '-15px',
      left: 'calc(50% - 15px)',
      backgroundColor: '#fff',
      color: '#00a3ff',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      border: '2px solid #00a3ff',
    },
    monitors: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    monitorCard: {
      position: 'relative',
      width: '400px',
      height: '250px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease-in-out',
    },
    monitorImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    monitorContent: {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      padding: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#fff',
      textAlign: 'left',
      boxSizing: 'border-box',
    },
    monitorTitle: {
      fontSize: '1.8em',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    monitorText: {
      fontSize: '1em',
      lineHeight: '1.5',
    },
    yourSection: {
      padding: '30px',
      backgroundColor: '#f9fafb',
      borderRadius: '15px',
      marginBottom: '50px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    newSection: {
      padding: '40px',
      backgroundColor: '#eef5ff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
    },
    newHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subheader: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      width: '300px',
      padding: '20px',
      backgroundColor: '#ffffff',
      color: '#333',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    cardText: {
      fontSize: '18px',
      marginBottom: '10px',
      fontWeight: 'normal',
    },
    cardSource: {
      fontSize: '14px',
      color: '#1e90ff',
      textDecoration: 'none',
    },
    sections: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      },
  };

  return (
    <div style={styles.section}>
         <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      {/* Your Section */}
      <div style={styles.yourSection}>
        {/* Step Cards */}
        <div style={styles.steps}>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>1</div>
            <h5>Know the quality of air you breathe</h5>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>2</div>
            <h5>Monitor indoor & outdoor air pollutants</h5>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>3</div>
            <h5>Control your air quality with a purifier & mask</h5>
          </div>
          <div style={styles.stepCard}>
            <div style={styles.stepNumber}>4</div>
            <h5>Stay safe and healthy</h5>
          </div>
        </div>

        {/* Monitor Cards */}
        <div style={styles.monitors}>
          <div style={styles.monitorCard}>
            <img
              src={indoor}
              alt="Indoor Monitors"
              style={styles.monitorImage}
            />
            <div style={styles.monitorContent}>
              <h2 style={styles.monitorTitle}>Indoor Monitors</h2>
              <p style={styles.monitorText}>
                Know the quality of air you breathe at your home, office, hotel, or anywhere indoors with our smart air quality monitors.
              </p>
            </div>
          </div>

          <div style={styles.monitorCard}>
            <img
              src={outdoor}
              alt="Outdoor Monitors"
              style={styles.monitorImage}
            />
            <div style={styles.monitorContent}>
              <h2 style={styles.monitorTitle}>Outdoor Monitors</h2>
              <p style={styles.monitorText}>
                Before you step out from your home, office, hotel & restaurant, find out how good or bad the quality of air is outdoors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div style={styles.newSection}>
        <h2 style={styles.newHeader}>
          We consume 1 million breaths of air every month without knowing how the air quality affects our bodies, mind, and comfort.
        </h2>
        <div style={styles.subheader}>
          <div style={styles.card}>
            <p style={styles.cardText}>
              92% of the world population is exposed to harmful levels of air pollution.
            </p>
            <a href="https://www.who.int/" style={styles.cardSource}>
              World Health Organization
            </a>
          </div>
          <div style={styles.card}>
            <p style={styles.cardText}>
              The indoor air quality we breathe is 2 to 5 times worse than outdoors.
            </p>
            <a href="https://www.epa.gov/" style={styles.cardSource}>
              Environmental Protection Agency
            </a>            
          </div>
        </div>
      </div>
      <div style={styles.sections}>
        <IndoorPollution />
      </div>

      {/* Outdoor Pollution Section */}
      <div style={styles.sections}>
        <OutdoorPollution />
      </div>

      <div style={styles.sections}>
        <AirQualityDashboard />
      </div>
    </div>
  );
};

export default Monitor;
