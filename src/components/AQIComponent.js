import React, { useState } from 'react';

// Inline styles for the AQIComponent (or you can use a CSS file)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  tab: {
    padding: '10px 20px',
    margin: '0 5px',
    cursor: 'pointer',
    border: '1px solid lightgray',
    borderRadius: '5px',
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#28a745',
    color: 'white',
  },
  dataContainer: {
    width: '80%',
    padding: '20px',
    border: '1px solid lightgray',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
};

const AQIComponent = () => {
  const [activeTab, setActiveTab] = useState('24 Hours'); // Default active tab

  const tabs = ['Real-time', '24 Hours', '7 Days', 'Month'];

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <div
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Data Display Area */}
      <div style={styles.dataContainer}>
        <h2>{activeTab} AQI Data</h2>
        <p>
          This is where your dynamic AQI data will appear for the selected time
          period: {activeTab}.
        </p>
        {/* You will fetch and display the dynamic AQI data here */}
      </div>
    </div>
  );
};

export default AQIComponent;
