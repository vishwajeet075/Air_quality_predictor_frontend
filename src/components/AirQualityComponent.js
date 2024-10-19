import React from 'react';

export default function AirQualityComponent() {
  
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      width: '90%',
      margin: '20px auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    header: {
      fontWeight: 'bold',
      fontSize: '1.5em',
      marginBottom: '10px',
    },
    subHeader: {
      fontSize: '1.2em',
      color: 'red',
      marginBottom: '10px',
    },
    aqiCircle: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#e0f7e9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px 0',
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#43a047',
    },
    healthAdvice: {
      margin: '20px 0',
    },
    weatherForecast: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    weatherCard: {
      flex: '1',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
      margin: '0 5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    weatherIcon: {
      fontSize: '2em',
      marginBottom: '5px',
    },
    healthIcons: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '10px',
    },
    healthIconItem: {
      textAlign: 'center',
    },
    healthIconImage: {
      width: '30px',
      height: '30px',
      marginBottom: '5px',
    }
  };

  return (
    <div style={styles.container}>
      {/* Location and AQI Info */}
      <div style={styles.header}>
        Hinjewadi Infotech Park Real-time Air Quality Index (AQI) <span style={styles.subHeader}>Live</span>
      </div>
      <p>Current air pollution level and weather condition of your location with the aggregate levels of major air pollutants in the ambient air.</p>
      
      <div style={styles.aqiCircle}>
        43
      </div>
      <div>
        <strong>GOOD</strong>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ marginRight: '10px', fontSize: '2em' }}>26°C</div>
        <div>Patchy rain nearby<br /><small>Local Time: 12:38 | 2024-10-18</small></div>
      </div>
      
      {/* Health Advice */}
      <div style={styles.healthAdvice}>
        <h3>Health Advice</h3>
        <p>How to protect yourself from air pollution around Hinjewadi Infotech Park?</p>
        <div style={styles.healthIcons}>
          <div style={styles.healthIconItem}>
            <img src="/path-to-icon/wear-mask.png" alt="Wear Mask" style={styles.healthIconImage} />
            <p>Wear Mask<br /><small>Not Required</small></p>
          </div>
          <div style={styles.healthIconItem}>
            <img src="/path-to-icon/stay-indoor.png" alt="Stay Indoor" style={styles.healthIconImage} />
            <p>Stay Indoor<br /><small>Not Required</small></p>
          </div>
          <div style={styles.healthIconItem}>
            <img src="/path-to-icon/windows-open.png" alt="Keep Windows Open" style={styles.healthIconImage} />
            <p>Windows<br /><small>Keep Open</small></p>
          </div>
          <div style={styles.healthIconItem}>
            <img src="/path-to-icon/purifier.png" alt="Use Purifier" style={styles.healthIconImage} />
            <p>Use Purifier<br /><small>Not Required</small></p>
          </div>
          <div style={styles.healthIconItem}>
            <img src="/path-to-icon/family-outdoor.png" alt="Family Outdoor" style={styles.healthIconImage} />
            <p>Family<br /><small>Allow Outdoor</small></p>
          </div>
        </div>
      </div>

      {/* Weather Forecast */}
      <div style={styles.weatherForecast}>
        {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
          <div key={index} style={styles.weatherCard}>
            <div style={styles.weatherIcon}>🌧️</div>
            <div>{day}</div>
            <div>Moderate rain</div>
            <div>26°C | 76%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
