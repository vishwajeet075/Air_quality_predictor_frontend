import React from 'react';
import pm25Icon from '../assets/images/pm25.png';
import pm10Icon from '../assets/images/pm10.png';
import co2Icon from '../assets/images/co2.png';
import so2Icon from '../assets/images/so2.png';
import tvocIcon from '../assets/images/tvoc.png';
import trafficImage from '../assets/images/traffic.jpg';

const OutdoorPollution = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Stack items on small screens
      padding: '20px',
      backgroundColor: '#f5f7fa',
      borderRadius: '15px',
      marginBottom: '40px',
      alignItems: 'center',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    textContainer: {
      width: '100%', // Make text container full width
      textAlign: 'center',
      padding: '20px',
      marginBottom: '20px',
    },
    header: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '600px', // Limit max width for larger screens
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      borderRadius: '15px',
      width: '100%',
      height: 'auto',
    },
    icon: {
      position: 'absolute',
      width: '50px', // Reduce icon size for smaller screens
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '14px',
      color: '#00a3ff',
    },
    pm25: { top: '10%', left: '5%' },
    pm10: { bottom: '10%', left: '10%' },
    co2: { top: '50%', left: '40%' },
    so2: { top: '20%', right: '10%' },
    tvoc: { bottom: '10%', right: '10%' },
    
    '@media (min-width: 600px)': {
      container: {
        flexDirection: 'row', // Switch back to row on larger screens
      },
      textContainer: {
        width: '50%', // Set width of text container to 50% on larger screens
        textAlign: 'left',
      },
      imageContainer: {
        width: '50%', // Set width of image container to 50% on larger screens
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Text Section */}
      <div style={styles.textContainer}>
        <h2 style={styles.header}>
          Exposure To Outdoor Air Pollutants Will Increase Risk of Arrhythmia, Ischemia, Cardiac Failure, and Stroke.
        </h2>
        <p style={styles.description}>
          Find out how harmful the quality of air you breathe outside by the harmful gases like NO2, SO2, CO, CO2, O3, etc. 
          Take precautions to stay healthy and safe from outdoor air pollution.
        </p>
      </div>

      {/* Image Section with Icons */}
      <div style={styles.imageContainer}>
        <img src={trafficImage} alt="Outdoor Scene" style={styles.image} />
        <div style={{ ...styles.icon, ...styles.pm25 }}>
          <img src={pm25Icon} alt="PM2.5" style={{ width: '30px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.pm10 }}>
          <img src={pm10Icon} alt="PM10" style={{ width: '30px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.co2 }}>
          <img src={co2Icon} alt="CO2" style={{ width: '30px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.so2 }}>
          <img src={so2Icon} alt="SO2" style={{ width: '30px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.tvoc }}>
          <img src={tvocIcon} alt="TVOC" style={{ width: '30px' }} />
        </div>
      </div>
    </div>
  );
};

export default OutdoorPollution;
