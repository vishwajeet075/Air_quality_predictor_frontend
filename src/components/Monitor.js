import React from 'react';
import indoor from '../assets/images/indoor.jpg';
import outdoor from '../assets/images/outdoor.jpg';
import IndoorPollution from './IndoorPollution';
import OutdoorPollution from './OutdoorPollution';
import AirQualityDashboard from './AirQualityDashboard';
import NavBar from './Navbar'; 
import Aqi from './Aqi';

const Monitor = () => {
  const styles = {
    section: {
      padding: '20px',
      marginTop: '50px',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    steps: {
      display: 'flex',
      flexWrap: 'wrap', // Allow wrapping for smaller screens
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    stepCard: {
      flex: '1 1 200px', // Responsive card size
      padding: '20px',
      backgroundColor: '#00a3ff',
      color: '#fff',
      borderRadius: '10px',
      position: 'relative',
      textAlign: 'center',
      minWidth: '180px', // Minimum width for cards
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
      flexWrap: 'wrap', // Allow wrapping for smaller screens
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    monitorCard: {
      position: 'relative',
      flex: '1 1 400px', // Responsive card size
      height: '250px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease-in-out',
      minWidth: '350px', // Minimum width for cards
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
      fontSize: '1.5em',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    monitorText: {
      fontSize: '0.9em',
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
      fontSize: '1.8em',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    subheader: {
      display: 'flex',
      flexWrap: 'wrap', // Allow wrapping for smaller screens
      justifyContent: 'center',
      gap: '20px',
    },
    card: {
      flex: '1 1 300px', // Responsive card size
      padding: '20px',
      backgroundColor: '#ffffff',
      color: '#333',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      minWidth: '250px', // Minimum width for cards
    },
    cardText: {
      fontSize: '1em',
      marginBottom: '10px',
      fontWeight: 'normal',
    },
    cardSource: {
      fontSize: '0.9em',
      color: '#1e90ff',
      textDecoration: 'none',
    },
    sections: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      width: '100%', // Full width for sections
      maxWidth: '1200px', // Max width for large screens
    },
  };

  return (
    <div style={styles.section}>
      <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      
      {/* Your Section */}
      <div style={styles.yourSection}>
        {/* Step Cards */}
        <div style={styles.steps}>
          {['Know the quality of air you breathe', 'Monitor indoor & outdoor air pollutants', 'Control your air quality with a purifier & mask', 'Stay safe and healthy'].map((text, index) => (
            <div style={styles.stepCard} key={index}>
              <div style={styles.stepNumber}>{index + 1}</div>
              <h5>{text}</h5>
            </div>
          ))}
        </div>

        {/* Monitor Cards */}
        <div style={styles.monitors}>
          <div style={styles.monitorCard}>
            <img src={indoor} alt="Indoor Monitors" style={styles.monitorImage} />
            <div style={styles.monitorContent}>
              <h2 style={styles.monitorTitle}>Indoor Monitors</h2>
              <p style={styles.monitorText}>
                Know the quality of air you breathe at your home, office, hotel, or anywhere indoors with our smart air quality monitors.
              </p>
            </div>
          </div>

          <div style={styles.monitorCard}>
            <img src={outdoor} alt="Outdoor Monitors" style={styles.monitorImage} />
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
          {[
            {
              text: '92% of the world population is exposed to harmful levels of air pollution.',
              source: 'World Health Organization',
              link: 'https://www.who.int/',
            },
            {
              text: 'The indoor air quality we breathe is 2 to 5 times worse than outdoors.',
              source: 'Environmental Protection Agency',
              link: 'https://www.epa.gov/',
            },
          ].map(({ text, source, link }, index) => (
            <div style={styles.card} key={index}>
              <p style={styles.cardText}>{text}</p>
              <a href={link} style={styles.cardSource} target="_blank" rel="noopener noreferrer">
                {source}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Pollution Sections */}
      <div style={styles.sections}>
        <IndoorPollution />
      </div>

      <div style={styles.sections}>
        <OutdoorPollution />
      </div>

      <div style={styles.sections}>
        <AirQualityDashboard />
      </div>

      <div style={styles.sections}>
        <Aqi />
      </div>
    </div>
  );
};

export default Monitor;
