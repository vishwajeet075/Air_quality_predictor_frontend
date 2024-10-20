import React, { useState } from 'react';
import dashboard_export from '../assets/images/dashboard_export.png';
import dashboard_health_advice from '../assets/images/dashboard_health_advice.png';
import dashboard_historic from '../assets/images/dashboard_historic.png';
import dashboard_my_dashboard from '../assets/images/dashboard_my_dashboard.png';
import dashboard_settings from '../assets/images/dashboard_realtime.png';

const AirQualityDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    { id: 1, image: dashboard_my_dashboard, title: 'Air Quality Dashboard', description: 'Keep track of the air quality measured by your pollution monitor in real-time and historic data. Analyze your air quality you breathe everyday from your dashboard.' },
    { id: 2, image: dashboard_settings, title: 'REAL-TIME AIR QUALITY', description: 'Monitor your air quality of different pollutants in real-time and get insightful analysis of data in your monitors dashboard.' },
    { id: 3, image: dashboard_historic, title: 'HISTORIC DATA', description: 'Analyze historic data of your air quality hourly, weekly and monthly basis. Understand how good or bad your air quality is.' },
    { id: 4, image: dashboard_health_advice, title: 'HEALTH ADVICE', description: 'Get health advice of your air quality measured by your monitor and take precautions of what you have to do and not to do.' },
    { id: 5, image: dashboard_export, title: 'EXPORT DATA', description: 'The air quality data measured by your monitor is your data. Export your data anytime for analysis.' },
  ];

  // Function to handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f8ff',
      padding: '20px',
      flexDirection: 'row', // Changed to row for side-by-side layout
    },
    contentWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1200px',
    },
    imageContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
    },
    image: {
      maxWidth: '400px',
      height: 'auto',
      border: '1px solid #ccc',
      borderRadius: '10px',
    },
    textContent: {
      width: '50%',
      paddingLeft: '20px',
      textAlign: 'left',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '16px',
      marginTop: '10px',
    },
    arrowControls: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    arrowButton: {
      backgroundColor: '#007bff',
      border: 'none',
      padding: '10px 20px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '18px',
      margin: '0 10px',
    },
    bottomDots: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    dummyButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      margin: '0 10px',
    },
  };

  return (
    <div style={styles.container}>
      <button onClick={handlePrev} style={styles.arrowButton}>←</button>
      <div style={styles.contentWrapper}>
        <div style={styles.imageContent}>
          <img src={data[currentIndex].image} alt={data[currentIndex].title} style={styles.image} />
        </div>
        <div style={styles.textContent}>
          <h1 style={styles.title}>{data[currentIndex].title}</h1>
          <p style={styles.description}>{data[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={handleNext} style={styles.arrowButton}>→</button>
    </div>
  );
};

export default AirQualityDashboard;
