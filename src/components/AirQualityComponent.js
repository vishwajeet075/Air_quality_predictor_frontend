import React from 'react';
import wearMask from '../assets/images/wear.png';
import stayIndoor from '../assets/images/Indoors.png';
import windowsOpen from '../assets/images/Openings.png';
import purifier from '../assets/images/purifier.png';
import familyOutdoor from '../assets/images/family.png';

export default function AirQualityComponent() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '90%',
      maxWidth: '800px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
    },
    panel: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      width: '100%',
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
      margin: '20px auto',
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#43a047',
    },
    healthIcons: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
      flexWrap: 'wrap',
    },
    healthIcon: {
      textAlign: 'center',
      width: '80px',
      marginBottom: '10px',
    },
    weatherForecast: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      flexWrap: 'wrap',
    },
    weatherCard: {
      textAlign: 'center',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '5px',
      flex: '1 1 calc(33.333% - 10px)', // Makes 3 cards per row
    },
    '@media (max-width: 768px)': {
      weatherCard: {
        flex: '1 1 calc(50% - 10px)', // Makes 2 cards per row on smaller screens
      },
    },
    '@media (max-width: 480px)': {
      weatherCard: {
        flex: '1 1 100%', // Single column for smallest screens
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <div style={styles.header}>
          Hinjewadi Infotech Park Real-time Air Quality Index (AQI) <span style={styles.subHeader}>Live</span>
        </div>
        <p>Current air pollution level and weather condition of your location with the aggregate levels of major air pollutants in the ambient air.</p>
        <div style={styles.aqiCircle}>43</div>
        <div><strong>GOOD</strong></div>
        <div style={{ margin: '10px 0' }}>
          <div style={{ fontSize: '2em' }}>26°C</div>
          <div>Mist<br /><small>Local Time: 12:38 | 2024-10-19</small></div>
        </div>

        {/* Health Advice */}
        <h3>Health Advice</h3>
        <div style={styles.healthIcons}>
          <div style={styles.healthIcon}><img src={wearMask} alt="Wear Mask" /><p>Wear Mask<br /><small>Not Required</small></p></div>
          <div style={styles.healthIcon}><img src={stayIndoor} alt="Stay Indoor" /><p>Stay Indoor<br /><small>Not Required</small></p></div>
          <div style={styles.healthIcon}><img src={windowsOpen} alt="Keep Windows Open" /><p>Windows<br /><small>Keep Open</small></p></div>
          <div style={styles.healthIcon}><img src={purifier} alt="Use Purifier" /><p>Use Purifier<br /><small>Not Required</small></p></div>
          <div style={styles.healthIcon}><img src={familyOutdoor} alt="Family Outdoor" /><p>Family<br /><small>Allow Outdoor</small></p></div>
        </div>

        {/* Weather Forecast */}
        <div style={styles.weatherForecast}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} style={styles.weatherCard}>
              <div>🌧️</div>
              <div>{day}</div>
              <div>Moderate rain</div>
              <div>26°C | 76%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
