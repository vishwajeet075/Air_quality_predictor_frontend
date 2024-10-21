import React, { useState } from 'react';
import camera_option from '../assets/images/camera_option.png';
import AQI_Ranking from '../assets/images/AQI_Ranking.png';
import home_app from '../assets/images/home_app.png';
import explore_location from '../assets/images/explore_location.png';
import historic_data from '../assets/images/historic_data.png';
import health_advice from '../assets/images/health_advice.png';

const AqiApp = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // State to track selected section

  // Data for each section
  const sections = [
    { title: 'Real-time Air Quality', description: 'Find out the air quality level you are breathing at your location through AQI monitor.', image: home_app },
    { title: 'Historic Air Quality', description: 'Access to the AQI information showing you level of various parameters contributing to the AQI values of your city.', image: historic_data },
    { title: 'Explore Locations', description: 'With the help of a pollution map in the app, explore AQI values of different locations.', image: explore_location },
    { title: 'AQI Ranking', description: 'Check the most air polluted city and country through AQI ranking and also know the rank of your city.', image: AQI_Ranking },
    { title: 'Use The Camera Option', description: 'Share a photograph of your location with real-time AQI information on social media.', image: camera_option },
    { title: 'Health Advice', description: 'With the AQI of your current location, get health advice that is helpful during high pollution days.', image: health_advice },
  ];

  // Handling section click
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  // Splitting sections for left and right groups
  const leftSections = sections.slice(0, 3);
  const rightSections = sections.slice(3);

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftRightContainer}>
        {leftSections.map((section, index) => (
          <div
            key={index}
            style={{
              ...styles.textBlock,
              backgroundColor: selectedIndex === index ? '#007bff' : '#fff',
              color: selectedIndex === index ? '#fff' : '#000',
            }}
            onClick={() => handleClick(index)}
          >
            <h3 style={styles.heading}>{index + 1}. {section.title}</h3>
            <p style={styles.description}>{section.description}</p>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <img src={sections[selectedIndex].image} alt={sections[selectedIndex].title} style={styles.image} />
      </div>

      {/* Right Section */}
      <div style={styles.leftRightContainer}>
        {rightSections.map((section, index) => (
          <div
            key={index + 3} // Index adjustment for the second group
            style={{
              ...styles.textBlock,
              backgroundColor: selectedIndex === index + 3 ? '#007bff' : '#fff',
              color: selectedIndex === index + 3 ? '#fff' : '#000',
            }}
            onClick={() => handleClick(index + 3)}
          >
            <h3 style={styles.heading}>{index + 4}. {section.title}</h3>
            <p style={styles.description}>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    gap: '50px',
  },
  leftRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '7px',
  },
  textBlock: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    width: '250px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '18px',
  },
  description: {
    fontSize: '14px',
  },
  imageWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '250px', // Adjust this size for the image
    height: '500px',
    borderRadius: '10px',
  },
};

export default AqiApp;
