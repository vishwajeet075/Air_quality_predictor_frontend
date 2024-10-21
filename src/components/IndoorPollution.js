import React from 'react';
import pm25Icon from '../assets/images/pm25.png'; // Use the actual path of the icon
import pm10Icon from '../assets/images/pm10.png'; // Use the actual path of the icon
import co2Icon from '../assets/images/co2.png'; // Use the actual path of the icon
import so2Icon from '../assets/images/so2.png'; // Use the actual path of the icon
import tvocIcon from '../assets/images/tvoc.png'; // Use the actual path of the icon
import womanCooking from '../assets/images/womanCooking.jpg'; // Use the actual path of the image

const IndoorPollution = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Stack on smaller screens
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#f5f7fa',
      borderRadius: '15px',
      marginBottom: '40px',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        flexDirection: 'row', // Horizontal layout on larger screens
      },
    },
    imageContainer: {
      position: 'relative',
      width: '100%', // Set width to 100% for responsiveness
      maxWidth: '400px', // Max width for larger screens
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
    pm10: { top: '70%', left: '10%' },
    co2: { top: '50%', left: '40%' },
    so2: { top: '20%', right: '10%' },
    tvoc: { bottom: '10%', right: '10%' },
    textContainer: {
      width: '100%', // Set width to 100% for responsiveness
      maxWidth: '400px', // Max width for larger screens
      padding: '20px',
      textAlign: 'center', // Center text on smaller screens
      '@media (min-width: 768px)': {
        textAlign: 'left', // Align text to the left on larger screens
      },
    },
    header: {
      fontSize: '2rem', // Use rem for scalability
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1rem', // Use rem for scalability
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.container}>
      {/* Image Section with Icons */}
      <div style={styles.imageContainer}>
        <img src={womanCooking} alt="Indoor Scene" style={styles.image} />
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

      {/* Text Section */}
      <div style={styles.textContainer}>
        <h2 style={styles.header}>Protect Your Health From Indoor Pollution</h2>
        <p style={styles.description}>
          Indoor air quality is often worse than outdoor air quality. Keep an eye on your indoor air quality in real-time. Don't take risks with your health. Understanding air quality is the first step to protecting yourself from pollution.
        </p>
      </div>
    </div>
  );
};

export default IndoorPollution;
