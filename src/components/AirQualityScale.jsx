import React from 'react';
import goodImage from '../assets/images/good.webp';
import moderateImage from '../assets/images/moderate.webp';
import poorImage from '../assets/images/poor.webp';
import severeImage from '../assets/images/sever.webp';
import unhealthyImage from '../assets/images/unhelathy.webp';
import unhealthyyImage from '../assets/images/unhealtyy.webp';

const AirQualityScale = () => {
  const categories = [
    { label: 'Good', range: '0-50', description: 'The air is fresh and free from toxins. People are not exposed to any health risk.', color: 'green', img: goodImage },
    { label: 'Moderate', range: '51-100', description: 'Acceptable air quality for healthy adults but mild threat to sensitive individuals.', color: 'yellow', img: moderateImage },
    { label: 'Poor', range: '101-200', description: 'Inhaling such air can cause slight discomfort and difficulty in breathing.', color: 'orange', img: poorImage },
    { label: 'Unhealthy', range: '201-300', description: 'This could be typically problematic for children, pregnant women, and the elderly.', color: 'pink', img: unhealthyImage },
    { label: 'Severe', range: '301-400', description: 'Exposure to air can cause chronic morbidities or even organ impairment.', color: 'purple', img: severeImage },
    { label: 'Hazardous', range: '401-500+', description: 'Beware! Your life is in danger. Prolonged exposure can lead to premature death.', color: 'red', img: unhealthyyImage },
  ];

  const styles = {
    container: {
      textAlign: 'center', // Light background for a clean look
    },
    heading: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    subHeading: {
      fontSize: '14px',
      color: '#555',
      marginBottom: '20px',
    },
    scaleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Two columns for larger screens
      gap: '15px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr', // Single column for smaller screens
      },
    },
    categoryCard: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      borderLeft: '6px solid', // Dynamic border color
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    icon: {
      width: '50px',
      height: '50px',
      marginRight: '15px',
    },
    info: {
      textAlign: 'left',
    },
    categoryLabel: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    range: {
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      fontSize: '12px',
      color: '#666',
      marginTop: '3px',
    },
    '@media (max-width: 768px)': {
      scaleGrid: {
        gridTemplateColumns: '1fr', // One column for mobile screens
      },
      categoryCard: {
        flexDirection: 'column',
        textAlign: 'center',
        padding: '10px',
      },
      icon: {
        marginBottom: '10px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Air Quality Index Scale</h2>
      <p style={styles.subHeading}>Understand the air quality index (AQI) and what it means for your health.</p>

      <div style={styles.scaleGrid}>
        {categories.map((category, index) => (
          <div
            key={index}
            style={{ ...styles.categoryCard, borderLeftColor: category.color }}
          >
            <img src={category.img} alt={category.label} style={styles.icon} />
            <div style={styles.info}>
              <h3 style={styles.categoryLabel}>{category.label}</h3>
              <p style={styles.range}>{category.range}</p>
              <p style={styles.description}>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityScale;
