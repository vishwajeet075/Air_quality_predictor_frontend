import React from 'react';
import monitoring from '../assets/images/monitoring.webp';
import sensors from '../assets/images/sensors.webp';
import service from '../assets/images/service.webp';

const AirQualityService = () => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    banner: {
      backgroundColor: '#f7f9fc',
      padding: '50px 20px',
    },
    bannerHeading: {
      fontSize: '2.5em',
      color: '#1a73e8',
      marginBottom: '10px',
    },
    bannerText: {
      fontSize: '1.2em',
      color: '#333',
    },
    services: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    serviceCard: {
      position: 'relative',
      width: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    serviceCardHover: {
      transform: 'scale(1.05)',
    },
    serviceCardImg: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '20px',
      backgroundColor: '#fff',
    },
    cardHeading: {
      fontSize: '1.5em',
      margin: '0 0 10px',
      color: '#333',
    },
    btn: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#1a73e8',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    btnHover: {
      backgroundColor: '#1558b3',
    },
  };

  return (
    <div style={styles.container}>
      {/* Welcome Banner Section */}
      <section style={styles.banner}>
        <h1 style={styles.bannerHeading}>Know What You Breathe</h1>
        <p style={styles.bannerText}>
          Prana Air and AQI are one-stop solution providers for indoor and outdoor air quality problems.
        </p>
        <p style={styles.bannerText}>Protecting our health and well-being from air pollution.</p>
      </section>

      {/* Services Section */}
      <section style={styles.services}>
        <div style={styles.serviceCard} className="service-card">
          <img
            src={monitoring}
            alt="Air quality monitors"
            style={styles.serviceCardImg}
          />
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeading}>Air quality monitors</h2>
            <a href="https://www.pranaair.com/in/air-quality-monitor/" style={styles.btn} className="btn">
              Know More
            </a>
          </div>
        </div>

        <div style={styles.serviceCard} className="service-card">
          <img
            src={sensors}
            alt="Air quality sensors"
            style={styles.serviceCardImg}
          />
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeading}>Air quality sensors</h2>
            <a href="https://www.pranaair.com/in/air-quality-sensor/" style={styles.btn} className="btn">
              Know More
            </a>
          </div>
        </div>

        <div style={styles.serviceCard} className="service-card">
          <img
            src={service}
            alt="AQI API service"
            style={styles.serviceCardImg}
          />
          <div style={styles.cardContent}>
            <h2 style={styles.cardHeading}>AQI API service</h2>
            <a href="https://www.aqi.in/contact-us" style={styles.btn} className="btn">
              Know More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirQualityService;
