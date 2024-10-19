import React, { useState } from 'react';
import wearMask from '../assets/images/wear.png';
import stayIndoor from '../assets/images/Indoors.png';
import windowsOpen from '../assets/images/Openings.png';
import purifier from '../assets/images/purifier.png';
import familyOutdoor from '../assets/images/family.png';

export default function AirQualityComponent() {
  
  const [view, setView] = useState('city'); // State to toggle between city and country ranking

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',  // Two-column layout
      gap: '20px',
      fontFamily: 'Arial, sans-serif',
      width: '90%',
      margin: '20px auto',
    },
    leftPanel: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    rightPanel: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    header: {
      fontWeight: 'bold',
      fontSize: '1.5em',
      marginBottom: '10px',
      textAlign: 'center',
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
      margin: '10px auto',  // Center AQI circle
      fontSize: '2em',
      fontWeight: 'bold',
      color: '#43a047',
    },
    rankingsHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    rankingButton: {
      padding: '10px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
    },
    rankingList: {
      listStyleType: 'none',
      padding: 0,
    },
    rankingItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #ddd',
    },
    healthIcons: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    weatherForecast: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    weatherCard: {
      textAlign: 'center',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  };

  // Sample dynamic data for rankings
  const cityRankings = [
    { rank: 1, location: 'Mumbai', aqi: 43, flag: '🇮🇳' },
    { rank: 2, location: 'Berlin', aqi: 50, flag: '🇩🇪' },
    { rank: 3, location: 'New York', aqi: 60, flag: '🇺🇸' },
  ];

  const countryRankings = [
    { rank: 1, location: 'Germany', aqi: 45, flag: '🇩🇪' },
    { rank: 2, location: 'India', aqi: 70, flag: '🇮🇳' },
    { rank: 3, location: 'USA', aqi: 65, flag: '🇺🇸' },
  ];

  return (
    <div style={styles.container}>
      {/* Left Panel - Dynamic Ranking */}
      <div style={styles.leftPanel}>
        <div style={styles.rankingsHeader}>
          <button
            style={styles.rankingButton}
            onClick={() => setView('city')}
          >
            City Rankings
          </button>
          <button
            style={styles.rankingButton}
            onClick={() => setView('country')}
          >
            Country Rankings
          </button>
        </div>
        <ul style={styles.rankingList}>
          {(view === 'city' ? cityRankings : countryRankings).map((item, index) => (
            <li key={index} style={styles.rankingItem}>
              <span>{item.rank}. {item.flag} {item.location}</span>
              <span>{item.aqi}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel - AQI Info */}
      <div style={styles.rightPanel}>
        <div style={styles.header}>
          Hinjewadi Infotech Park Real-time Air Quality Index (AQI) <span style={styles.subHeader}>Live</span>
        </div>
        <p>Current air pollution level and weather condition of your location with the aggregate levels of major air pollutants in the ambient air.</p>
        <div style={styles.aqiCircle}>43</div>
        <div style={{ textAlign: 'center' }}><strong>GOOD</strong></div>
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <div style={{ fontSize: '2em' }}>26°C</div>
          <div>Mist<br /><small>Local Time: 12:38 | 2024-10-19</small></div>
        </div>

        {/* Health Advice */}
        <h3>Health Advice</h3>
        <div style={styles.healthIcons}>
          <div><img src={wearMask} alt="Wear Mask" /><p>Wear Mask<br /><small>Not Required</small></p></div>
          <div><img src={stayIndoor} alt="Stay Indoor" /><p>Stay Indoor<br /><small>Not Required</small></p></div>
          <div><img src={windowsOpen} alt="Keep Windows Open" /><p>Windows<br /><small>Keep Open</small></p></div>
          <div><img src={purifier} alt="Use Purifier" /><p>Use Purifier<br /><small>Not Required</small></p></div>
          <div><img src={familyOutdoor} alt="Family Outdoor" /><p>Family<br /><small>Allow Outdoor</small></p></div>
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
