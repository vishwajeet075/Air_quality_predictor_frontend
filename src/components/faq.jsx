import React, { useState } from 'react';
import NavBar from './Navbar'; 

const FaqSection = () => {
  const [activePm25, setActivePm25] = useState(false);
  const [activeTemperature, setActiveTemperature] = useState(false);
  const [activeHumidity, setActiveHumidity] = useState(false);
  const [activeNoise, setActiveNoise] = useState(false);
  const [activeAQI, setActiveAQI] = useState(false); // AQI section state

  const [activePm25Index, setActivePm25Index] = useState(null);
  const [activeTemperatureIndex, setActiveTemperatureIndex] = useState(null);
  const [activeHumidityIndex, setActiveHumidityIndex] = useState(null);
  const [activeNoiseIndex, setActiveNoiseIndex] = useState(null);
  const [activeAQIIndex, setActiveAQIIndex] = useState(null); // AQI question index state

  const pm25Faqs = [
    { question: 'What is PM 2.5?', answer: 'Mixture of solid particulate (particle) matter & liquid droplets found in the air.' },
    { question: 'What are the examples of PM2.5?', answer: 'Dust, dirt, smoke or ash, etc.' },
    { question: 'What are the health conditions that can cause due to an increase in PM2.5 level?', answer: 'Aggravated respiratory issues, lung damage, etc.' },
    { question: 'What should I do to be safe from PM2.5?', answer: 'Wear an air pollution mask before stepping out of the home. Install HEPA air purifier which removes indoor air particles.' },
    { question: 'What I shouldn\'t do when there\'s a PM2.5 alert?', answer: 'Avoid activities that make you breathe faster or more deeply. Don’t smoke indoors or burn candles or incense sticks.' },
    { question: 'What is the standard PM2.5 for a healthy life?', answer: '0–8.9 μg/m3 is considered low as per 24-hour PM2.5.' },
    { question: 'What is the difference between PM 2.5 and 10?', answer: 'PM 2.5 is particulate matter 2.5 micrometers or less in diameter whereas PM 10 is particulate matter 10 micrometers or less in diameter. PM 2.5 is generally described as fine particles.' },
    { question: 'Is PM2.5 greater than PM10?', answer: 'No. PM 2.5 is fine particulate matter (inhalable particles of respirable particles) which is 2.5 micrometers or less in diameter.' },
    { question: 'Is PM2.5 harmful to health?', answer: 'PM2.5 (particles less than 2.5 micrometers in diameter) can penetrate deeply into the lung, irritate and corrode the alveolar wall, and consequently impair lung function.' },
    { question: 'How does PM2.5 affect people who have heart conditions?', answer: 'Breathing air induced with PM 2.5 can cause inflammatory effects on the heart, causing chronic cardiovascular problems.' },
  ];

  const temperatureFaqs = [
    { question: 'What is the temperature?', answer: 'Higher temperature can result in better air quality.' },
    { question: 'What are the examples of temperature?', answer: 'Thermal pollution, etc.' },
    { question: 'What are the health conditions that can cause due to an increase in temperature level?', answer: 'Respiratory infections, cardiac failure, stroke, etc.' },
    { question: 'What should I do to be safe from temperature?', answer: 'Cover yourself properly to avoid sunburn.' },
    { question: 'What I shouldn\'t do when there is a temperature alert?', answer: 'Never step outside without a water bottle and an umbrella.' },
    { question: 'What is the standard temperature for a healthy life?', answer: 'Owing to variations in humidity and climate, the standard temperature during summer is 23 to 25.5°C and in winters is 20 to 23.5°C.' },
    { question: 'How does temperature affect people who have heart conditions?', answer: 'An extremely important factor affecting exercise heart rate is temperature. Warmer temperatures cause the heart to beat faster and place considerable strain on the body.' },
  ];

  const humidityFaqs = [
    { question: 'What is humidity?', answer: 'The higher humidity level can result in better air quality.' },
    { question: 'What are the examples of humidity?', answer: 'Poor ventilation system, mist, and fog, etc.' },
    { question: 'What are the health conditions that can cause due to an increase in humidity level?', answer: 'Exhaustion, fatigue, restlessness, damage to the skin, etc.' },
    { question: 'What should I do to be safe from humidity?', answer: 'Drink lots of water to stay hydrated. Eat salads and fresh fruits.' },
    { question: 'What I shouldn\'t do when there is an alert on humidity level?', answer: 'Avoid being outside for too long.' },
    { question: 'What is the standard of humidity for a healthy life?', answer: 'The ideal indoor humidity level must range between 40-60%.' },
  ];

  const noiseFaqs = [
    { question: 'What is noise pollution?', answer: 'An unpleasant sound that creates discomfort to the ears.' },
    { question: 'What are examples of noise pollution?', answer: 'Vehicle, horns, loudspeakers, construction sites, etc.' },
    { question: 'What health conditions can be caused due to an increase in noise level?', answer: 'Elevated workplace or environmental noise can cause hearing impairment, tinnitus, hypertension, ischemic heart disease, annoyance, and sleep disturbance.' },
    { question: 'What should I do to be safe from noise pollution?', answer: (
        <ul>
          <li>Use earphones in public areas.</li>
          <li>Turn your music down, especially when using headphones.</li>
          <li>Know which noises can cause damage (those at or above 85 decibels).</li>
        </ul>
      )},
    { question: 'What I shouldn\'t do that can lead to noise pollution?', answer: (
        <ul>
          <li>Don't honk unnecessarily during high traffic days.</li>
          <li>Follow the limits of noise level.</li>
          <li>Shut the door when using noisy machines.</li>
        </ul>
      )},
    { question: 'What is the standard NOISE for a healthy life?', answer: '45 decibels is considered to be a permissible noise level for the city.' },
  ];

  const aqiFaqs = [
    { question: 'What is AQI?', answer: 'AQI stands for Air Quality Index, which is a system used to assess air pollution levels.' },
    { question: 'What does AQI measure?', answer: 'AQI measures pollutants like PM2.5, PM10, ozone, nitrogen dioxide, sulfur dioxide, and carbon monoxide.' },
    { question: 'Why is AQI important?', answer: 'AQI helps people understand the quality of air they are breathing and take necessary precautions when pollution levels are high.' },
    { question: 'How is AQI calculated?', answer: 'AQI is calculated based on the concentrations of pollutants, and each pollutant is given a specific index score.' },
    { question: 'What is a good AQI range?', answer: 'A good AQI is between 0 and 50, indicating healthy air quality.' },
    { question: 'What AQI range is considered unhealthy?', answer: 'An AQI between 151 and 200 is considered unhealthy, especially for sensitive groups.' },
    { question: 'How does AQI affect health?', answer: 'High AQI levels can cause respiratory issues, aggravate asthma, and lead to cardiovascular problems.' },
    { question: 'How often is AQI updated?', answer: 'AQI is usually updated hourly based on real-time air monitoring data.' },
    { question: 'What are the common sources of high AQI?', answer: 'High AQI can result from vehicle emissions, industrial activities, wildfires, and dust storms.' },
    { question: 'Can AQI differ by location?', answer: 'Yes, AQI can vary greatly by region and even within a city, depending on the sources of pollution.' },
  ];

  const togglePm25 = () => {
    setActivePm25(!activePm25);
    setActiveTemperature(false);
    setActiveHumidity(false);
    setActiveNoise(false);
    setActiveAQI(false);
  };

  const toggleTemperature = () => {
    setActiveTemperature(!activeTemperature);
    setActivePm25(false);
    setActiveHumidity(false);
    setActiveNoise(false);
    setActiveAQI(false);
  };

  const toggleHumidity = () => {
    setActiveHumidity(!activeHumidity);
    setActivePm25(false);
    setActiveTemperature(false);
    setActiveNoise(false);
    setActiveAQI(false);
  };

  const toggleNoise = () => {
    setActiveNoise(!activeNoise);
    setActivePm25(false);
    setActiveTemperature(false);
    setActiveHumidity(false);
    setActiveAQI(false);
  };

  const toggleAQI = () => {
    setActiveAQI(!activeAQI);
    setActivePm25(false);
    setActiveTemperature(false);
    setActiveHumidity(false);
    setActiveNoise(false);
  };

  const togglePm25Index = (index) => {
    setActivePm25Index(activePm25Index === index ? null : index);
  };

  const toggleTemperatureIndex = (index) => {
    setActiveTemperatureIndex(activeTemperatureIndex === index ? null : index);
  };

  const toggleHumidityIndex = (index) => {
    setActiveHumidityIndex(activeHumidityIndex === index ? null : index);
  };

  const toggleNoiseIndex = (index) => {
    setActiveNoiseIndex(activeNoiseIndex === index ? null : index);
  };

  const toggleAQIIndex = (index) => {
    setActiveAQIIndex(activeAQIIndex === index ? null : index);
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const containerStyle = {
    maxWidth: '700px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const headerStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1e40af',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const faqTitleStyle = {
    backgroundColor: '#e0f2fe',
    padding: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const faqItemStyle = {
    marginBottom: '10px',
  };

  const questionStyle = {
    backgroundColor: '#f0f9ff',
    padding: '10px',
    cursor: 'pointer',
  };

  const answerStyle = {
    padding: '10px',
    backgroundColor: '#e5e7eb',
  };

  const symbolStyle = {
    marginLeft: 'auto',
    fontSize: '18px',
  };

  return (
    <div style={sectionStyle}>
      
      <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      <div style={containerStyle}>
        <h2 style={headerStyle}>Frequently Asked Questions</h2>

        {/* PM 2.5 Section */}
        <div style={faqItemStyle}>
          <div style={faqTitleStyle} onClick={togglePm25}>
            <span>PM 2.5 Related Questions</span>
            <span style={symbolStyle}>{activePm25 ? '-' : '+'}</span>
          </div>
          {activePm25 &&
            pm25Faqs.map((faq, index) => (
              <div key={index}>
                <div style={questionStyle} onClick={() => togglePm25Index(index)}>
                  {faq.question}
                </div>
                {activePm25Index === index && <div style={answerStyle}>{faq.answer}</div>}
              </div>
            ))}
        </div>

        {/* Temperature Section */}
        <div style={faqItemStyle}>
          <div style={faqTitleStyle} onClick={toggleTemperature}>
            <span>Temperature Related Questions</span>
            <span style={symbolStyle}>{activeTemperature ? '-' : '+'}</span>
          </div>
          {activeTemperature &&
            temperatureFaqs.map((faq, index) => (
              <div key={index}>
                <div style={questionStyle} onClick={() => toggleTemperatureIndex(index)}>
                  {faq.question}
                </div>
                {activeTemperatureIndex === index && <div style={answerStyle}>{faq.answer}</div>}
              </div>
            ))}
        </div>

        {/* Humidity Section */}
        <div style={faqItemStyle}>
          <div style={faqTitleStyle} onClick={toggleHumidity}>
            <span>Humidity Related Questions</span>
            <span style={symbolStyle}>{activeHumidity ? '-' : '+'}</span>
          </div>
          {activeHumidity &&
            humidityFaqs.map((faq, index) => (
              <div key={index}>
                <div style={questionStyle} onClick={() => toggleHumidityIndex(index)}>
                  {faq.question}
                </div>
                {activeHumidityIndex === index && <div style={answerStyle}>{faq.answer}</div>}
              </div>
            ))}
        </div>

        {/* Noise Section */}
        <div style={faqItemStyle}>
          <div style={faqTitleStyle} onClick={toggleNoise}>
            <span>Noise Related Questions</span>
            <span style={symbolStyle}>{activeNoise ? '-' : '+'}</span>
          </div>
          {activeNoise &&
            noiseFaqs.map((faq, index) => (
              <div key={index}>
                <div style={questionStyle} onClick={() => toggleNoiseIndex(index)}>
                  {faq.question}
                </div>
                {activeNoiseIndex === index && <div style={answerStyle}>{faq.answer}</div>}
              </div>
            ))}
        </div>

        {/* AQI Section */}
        <div style={faqItemStyle}>
          <div style={faqTitleStyle} onClick={toggleAQI}>
            <span>AQI Related Questions</span>
            <span style={symbolStyle}>{activeAQI ? '-' : '+'}</span>
          </div>
          {activeAQI &&
            aqiFaqs.map((faq, index) => (
              <div key={index}>
                <div style={questionStyle} onClick={() => toggleAQIIndex(index)}>
                  {faq.question}
                </div>
                {activeAQIIndex === index && <div style={answerStyle}>{faq.answer}</div>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
