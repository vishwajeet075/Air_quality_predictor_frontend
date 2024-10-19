import React from 'react';
import pm25Icon from '../assets/images/pm25.png'; // Use the actual path of the icon
import pm10Icon from '../assets/images/pm10.png'; // Use the actual path of the icon
import co2Icon from '../assets/images/co2.png'; // Use the actual path of the icon
import so2Icon from '../assets/images/so2.png'; // Use the actual path of the icon
import tvocIcon from '../assets/images/tvoc.png'; // Use the actual path of the icon
import trafficImage from '../assets/images/traffic.jpg'; // Use the actual path of the image

const OutdoorPollution = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#f5f7fa',
      borderRadius: '15px',
      marginBottom: '40px',
      alignItems: 'center',
    },
    textContainer: {
      width: '50%',
      padding: '20px',
    },
    header: {
      fontSize: '2.4rem',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#555',
      lineHeight: '1.6',
    },
    imageContainer: {
      position: 'relative',
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
    },
    image: {
      borderRadius: '15px',
      width: '90%',
      height: 'auto',
    },
    icon: {
      position: 'absolute',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      color: '#00a3ff',
    },
    pm25: { top: '10%', left: '5%' },
    pm10: { bottom: '10%', left: '10%' },
    co2: { top: '50%', left: '40%' },
    so2: { top: '20%', right: '10%' },
    tvoc: { bottom: '10%', right: '10%' },
  };

  return (
    <div style={styles.container}>
      {/* Text Section */}
      <div style={styles.textContainer}>
        <h2 style={styles.header}>Exposure To Outdoor Air Pollutants Will Increase Risk of Arrhythmia, Ischemia, Cardiac Failure, and Stroke.</h2>
        <p style={styles.description}>
          Find out how harmful the quality of air you breathe outside by the harmful gases like NO2, SO2, CO, CO2, O3, etc. Take precautions to stay healthy and safe from outdoor air pollution.
        </p>
      </div>

      {/* Image Section with Icons */}
      <div style={styles.imageContainer}>
        <img src={trafficImage} alt="Outdoor Scene" style={styles.image} />
        <div style={{ ...styles.icon, ...styles.pm25 }}>
          <img src={pm25Icon} alt="PM2.5" style={{ width: '35px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.pm10 }}>
          <img src={pm10Icon} alt="PM10" style={{ width: '35px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.co2 }}>
          <img src={co2Icon} alt="CO2" style={{ width: '35px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.so2 }}>
          <img src={so2Icon} alt="SO2" style={{ width: '35px' }} />
        </div>
        <div style={{ ...styles.icon, ...styles.tvoc }}>
          <img src={tvocIcon} alt="TVOC" style={{ width: '35px' }} />
        </div>
      </div>
    </div>
  );
};

export default OutdoorPollution;
