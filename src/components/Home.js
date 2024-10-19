import React from 'react';
import NavBar from './Navbar';
import Map from './Map';
import AirQualityScale from './AirQualityScale';
import AQIComponent from './AQIComponent';
import AirQualityComponent from './AirQualityComponent';


export default function Home() {

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    mapContainer: {
      height: '90vh', // 90% of viewport height
      width: '100%',
      position: 'relative',
      zIndex: 1, // Ensures the map is on top of other elements
    },
    contentContainer: {
      padding: '20px',
      backgroundColor: '#f8f8f8', // Light background for the air quality scale section
      zIndex: 2,
      display: 'flex', // This makes the content display side by side
      justifyContent: 'space-between', // Add space between the two components
    },
    leftPanel: {
      flex: 1, // This makes the left panel take up equal space
      marginRight: '10px', // Adds some spacing between the panels
    },
    rightPanel: {
      flex: 1, // This makes the right panel take up equal space
    },
  };

  return (
    <>
      <NavBar />
      <div style={styles.pageContainer}>
        <div style={styles.mapContainer}>
          <Map />
        </div>
        <div style={styles.contentContainer}>
          <AirQualityScale /> {/* Air Quality Scale appears after the map */}
        </div>
        <div style={styles.contentContainer}>
          <div style={styles.leftPanel}>
            <AQIComponent /> {/* This will display AQIComponent */}
          </div>
          <div style={styles.rightPanel}>
            <AirQualityComponent />  {/* This will display AirQualityComponent */}
          </div>
        </div>
      </div>
    </>
  );
}
