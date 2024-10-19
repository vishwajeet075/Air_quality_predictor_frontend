import React from 'react';
import AQIComponent from './AQIComponent'; // Assuming you have AQIComponent
import goodImage from '../assets/images/good.webp';
import moderateImage from '../assets/images/moderate.webp';
import poorImage from '../assets/images/poor.webp';
import severeImage from '../assets/images/sever.webp';
import unhealthyImage from '../assets/images/unhelathy.webp';
import unhealthyyImage from '../assets/images/unhealtyy.webp'; // Double 'y' for consistency with your naming

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
      maxWidth: '900px',
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
    scale: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    category: {
      display: 'flex',
      alignItems: 'center',
      width: '48%', // Two columns
      backgroundColor: '#f9f9f9',
      margin: '10px 0',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      padding: '10px',
    },
    icon: {
      width: '50px',
      height: '50px',
      marginRight: '20px',
    },
    info: {
      textAlign: 'left',
    },
    categoryLabel: {
      fontSize: '18px',
      margin: '0',
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

      <div style={styles.scale}>
        {categories.map((category, index) => (
          <div key={index} style={{ ...styles.category, borderLeft: `5px solid ${category.color}` }}>
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

const MainPage = () => {
  const mainContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const leftSideStyles = {
    flex: '1',
    marginRight: '20px',
  };

  const rightSideStyles = {
    flex: '1',
  };

  return (
    <div style={mainContainerStyles}>
      {/* Left Side - AirQualityScale */}
      <div style={leftSideStyles}>
        <AirQualityScale />
      </div>

      {/* Right Side - AQIComponent */}
      <div style={rightSideStyles}>
        <AQIComponent />
      </div>
    </div>
  );
};

export default MainPage;
