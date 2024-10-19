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
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#f5f7fa',
      borderRadius: '15px',
      marginBottom: '40px',
      alignItems: 'center',
    },
    imageContainer: {
      position: 'relative',
      width: '50%', // Set width of image container to 50%
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
    pm10: { top: '70%', left: '10%' },
    co2: { top: '50%', left: '40%' },
    so2: { top: '20%', right: '10%' },
    tvoc: { bottom: '10%', right: '10%' },
    textContainer: {
      width: '50%', // Set width of text container to 50%
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
          Indoor air quality is more worse than outdoor. Keep an eye on your indoor air quality in real-time. Don't take risk on your health. Understanding the air quality is the first step to protect yourself from pollution.
        </p>
      </div>
    </div>
  );
};

export default IndoorPollution;
