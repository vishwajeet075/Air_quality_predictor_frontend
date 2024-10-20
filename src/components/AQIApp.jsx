import React from 'react';
import Mobile from '../assets/images/mobile.png';
import Dashboard from '../assets/images/dashboard.svg';
import Real from '../assets/images/real-time.svg';
import World from '../assets/images/world_air.svg';
import app from '../assets/images/app_store.png';
import play from '../assets/images/google_play.png';



const AQIApp = () => {

    
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
          textAlign: 'center',
          
        },
        subHeading: {
          fontSize: '16px',
          color: '#777',
          marginBottom: '20px',
          textAlign: 'center',
        },
          scaleGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // Fixed two columns
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
              <h2 style={styles.heading}>AQI Air Quality App</h2>
              <p style={styles.subHeading}>Free AQI Mobile App For Your IOS, Android, And Smart TV Devices</p>

              <div className="flex justify-center items-start">
                    <img
                    src={Mobile}
                    alt="AQI App Mockup"
                    className="w-full"
                    style={{ maxWidth: '300px', height: 'auto' }} // Adjusted to match the image more closely
                    />
                </div>
              <div style={styles.scaleGrid}>
                  <div style={{ ...styles.categoryCard}}>
                        <img src={Real} alt="API Feature" className="mx-auto" style={styles.icon}/>
                    <div style={styles.info}>
                        <h3 style={styles.categoryLabel}>Real-time air quality</h3>
                        <p style={styles.range}>API for accurate global data</p>
                    </div>
                  </div>

                  <div style={{ ...styles.categoryCard}}>
                        <img src={World} alt="API Feature" className="mx-auto" style={styles.icon}/>
                    <div style={styles.info}>
                        <h3 style={styles.categoryLabel}>World air pollution map</h3>
                        <p style={styles.range}>and weather map</p>
                    </div>
                  </div>

                  <div style={{ ...styles.categoryCard}}>
                        <img src={Dashboard} alt="API Feature" className="mx-auto" style={styles.icon}/>
                    <div style={styles.info}>
                        <h3 style={styles.categoryLabel}>Insightful Air quality monitoring</h3>
                        <p style={styles.range}>dashboard</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <a href="https://play.google.com/store/apps/details?id=com.aqi.data&hl=en&utm_source=play%20store&utm_medium=android&utm_campaign=android_app_install%27">
                        <img
                        src={play}
                        alt="Google Play Store"
                        className="h-12"
                        />
                    </a>

                    <a href="https://apps.apple.com/tt/app/aqi/id1439684571?utm_campaign=ios_app_install%27&utm_medium=iOS+app&utm_source=app+store">
                        <img
                        src={app}
                        alt="Apple App Store"
                        className="h-12"
                        />
                    </a>
                 </div>

             </div>
              </div>
    
            
          );



};

export default AQIApp;
