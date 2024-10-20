import React, { useState } from 'react';

export default function RankingsComponent() {
  const [view, setView] = useState('city'); // State to toggle between city and country ranking

  // Enhanced styles for a more attractive and responsive design
  const styles = {
    container: {
      backgroundColor: '#f0f4f7',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto', // Center on larger screens
    },
    rankingsHeader: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    rankingButton: {
      padding: '12px 20px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '8px',
      margin: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      transition: 'background-color 0.3s ease',
      fontWeight: 'bold',
      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
      fontSize: '1rem',
      flex: '1 1 150px', // Responsive flexbox property
    },
    rankingButtonActive: {
      backgroundColor: '#0056b3', // Darker blue for active button
    },
    rankingList: {
      listStyleType: 'none',
      padding: 0,
      display: 'grid',
      gap: '10px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Responsive grid
    },
    rankingItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
    rankingText: {
      fontSize: '1.2em',
      fontWeight: '500',
    },
    rankingAQI: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      backgroundColor: '#e0f7e9',
      color: '#43a047',
      padding: '10px 15px',
      borderRadius: '50%',
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
      {/* Header Buttons */}
      <div style={styles.rankingsHeader}>
        <button
          style={{
            ...styles.rankingButton,
            ...(view === 'city' && styles.rankingButtonActive),
          }}
          onClick={() => setView('city')}
        >
          City Rankings
        </button>
        <button
          style={{
            ...styles.rankingButton,
            ...(view === 'country' && styles.rankingButtonActive),
          }}
          onClick={() => setView('country')}
        >
          Country Rankings
        </button>
      </div>

      {/* Ranking List */}
      <ul style={styles.rankingList}>
        {(view === 'city' ? cityRankings : countryRankings).map((item, index) => (
          <li
            key={index}
            style={styles.rankingItem}
          >
            <span style={styles.rankingText}>
              {item.rank}. {item.flag} {item.location}
            </span>
            <span style={styles.rankingAQI}>{item.aqi}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
