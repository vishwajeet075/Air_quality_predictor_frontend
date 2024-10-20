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
      textAlign: 'center',
      margin: '20px auto',
      padding: '20px',
      maxWidth: '1200px',
      backgroundColor: '#f8f8f8',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    subHeading: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '20px',
    },
    scaleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Fixed two columns
      gap: '20px',
    },
    categoryCard: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderLeft: `8px solid`, // Border color will change based on AQI category
    },
    icon: {
      width: '60px',
      height: '60px',
      marginRight: '20px',
    },
    info: {
      textAlign: 'left',
    },
    categoryLabel: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    range: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#555',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Air Quality Index Scale</h2>
      <p style={styles.subHeading}>Know about the category of air quality index (AQI) your ambient air falls in and what it implies.</p>

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
