import React from 'react';
import Mobile from '../assets/images/mobile.png';
import Dashboard from '../assets/images/dashboard.svg';
import Real from '../assets/images/real-time.svg';
import World from '../assets/images/world_air.svg';
import app from '../assets/images/app_store.png';
import play from '../assets/images/google_play.png';

const AQIApp = () => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '10px auto',
      padding: '15px',
      maxWidth: '1000px',
      backgroundColor: '#f8f8f8',
    },
    heading: {
      fontSize: '22px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '10px',
    },
    subHeading: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '15px',
      textAlign: 'center',
    },
    contentWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      gap: '10px', // Reduced gap between elements
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '20px',
      },
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mobileImage: {
      maxWidth: '180px', // Reduced image size for compactness
      width: '100%',
      height: 'auto',
    },
    textContainer: {
      flex: '2',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px', // Reduced grid gap
      '@media (max-width: 1024px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    categoryCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      padding: '15px', // Reduced padding
      textAlign: 'center',
      borderLeft: '6px solid', // Border color based on AQI category
    },
    cardIcon: {
      width: '60px', // Reduced icon size
      height: '60px',
      marginBottom: '10px',
    },
    categoryLabel: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    range: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#555',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px', // Reduced gap between buttons
      marginTop: '15px', // Reduced top margin to bring the buttons upwards
    },
    storeButton: {
      height: '45px', // Reduced button height
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>AQI Air Quality App</h2>
      <p style={styles.subHeading}>
        Free AQI Mobile App For Your IOS, Android, And Smart TV Devices
      </p>

      {/* Content Wrapper */}
      <div style={styles.contentWrapper}>
        {/* Mobile Image on Left */}
        <div style={styles.imageContainer}>
          <img
            src={Mobile}
            alt="AQI App Mockup"
            style={styles.mobileImage}
          />
        </div>

        {/* Text and Grid Content on Right */}
        <div style={styles.textContainer}>
          {/* Individual Cards */}
          <div style={styles.categoryCard}>
            <img src={Real} alt="Real-time Feature" style={styles.cardIcon} />
            <h3 style={styles.categoryLabel}>Real-time air quality</h3>
            <p style={styles.range}>API for accurate global data</p>
          </div>

          <div style={styles.categoryCard}>
            <img src={World} alt="World Pollution Map" style={styles.cardIcon} />
            <h3 style={styles.categoryLabel}>World air pollution map</h3>
            <p style={styles.range}>and weather map</p>
          </div>

          <div style={styles.categoryCard}>
            <img src={Dashboard} alt="Monitoring Dashboard" style={styles.cardIcon} />
            <h3 style={styles.categoryLabel}>Insightful Air quality monitoring</h3>
            <p style={styles.range}>dashboard</p>
          </div>
        </div>
      </div>

      {/* Store Buttons Centered at Bottom */}
      <div style={styles.buttonContainer}>
        <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en&utm_source=play%20store&utm_medium=android&utm_campaign=android_app_install%27">
          <img src={play} alt="Google Play Store" style={styles.storeButton} />
        </a>

        <a href="https://apps.apple.com/tt/app/aqi/id1439684571?utm_campaign=ios_app_install%27&utm_medium=iOS+app&utm_source=app+store">
          <img src={app} alt="Apple App Store" style={styles.storeButton} />
        </a>
      </div>
    </div>
  );
};

export default AQIApp;
