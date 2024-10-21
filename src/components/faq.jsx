import React, { useState } from 'react';
import NavBar from './Navbar';

const FaqSection = () => {
  const [activePm25, setActivePm25] = useState(false);
  const [activeTemperature, setActiveTemperature] = useState(false);
  const [activeHumidity, setActiveHumidity] = useState(false);
  const [activeNoise, setActiveNoise] = useState(false);

  const [activePm25Index, setActivePm25Index] = useState(null);
  const [activeTemperatureIndex, setActiveTemperatureIndex] = useState(null);
  const [activeHumidityIndex, setActiveHumidityIndex] = useState(null);
  const [activeNoiseIndex, setActiveNoiseIndex] = useState(null);

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

  const togglePm25 = () => {
    setActivePm25(!activePm25);
    setActiveTemperature(false);
    setActiveHumidity(false);
    setActiveNoise(false);
  };

  const toggleTemperature = () => {
    setActiveTemperature(!activeTemperature);
    setActivePm25(false);
    setActiveHumidity(false);
    setActiveNoise(false);
  };

  const toggleHumidity = () => {
    setActiveHumidity(!activeHumidity);
    setActivePm25(false);
    setActiveTemperature(false);
    setActiveNoise(false);
  };

  const toggleNoise = () => {
    setActiveNoise(!activeNoise);
    setActivePm25(false);
    setActiveTemperature(false);
    setActiveHumidity(false);
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

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        
        <NavBar style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} />
      
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-lg mt-10">
        
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">" "</h2>
        
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">" " </h2>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Frequently Asked Questions</h2>

        <div className="mb-6 border border-blue-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-blue-100">
            <h3 className="mb-0">
              <button
                className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-200 focus:outline-none"
                onClick={togglePm25}
                aria-expanded={activePm25}
              >
                PM 2.5 Related Questions
                <span className={`transition-transform duration-200 ${activePm25 ? 'rotate-180' : ''}`}>▼</span>
              </button>
            </h3>
          </div>
          {activePm25 && (
            <div className="space-y-4 bg-white p-4">
              {pm25Faqs.map((faq, index) => (
                <div key={index} className="border border-blue-300 rounded-lg">
                  <div className="bg-blue-50">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left text-blue-700 focus:outline-none hover:bg-blue-200 transition"
                      onClick={() => togglePm25Index(index)}
                      aria-expanded={activePm25Index === index}
                    >
                      {faq.question}
                      <span className={`transition-transform duration-200 ${activePm25Index === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                  </div>
                  {activePm25Index === index && (
                    <div className="p-4 text-blue-800">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 border border-blue-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-blue-100">
            <h3 className="mb-0">
              <button
                className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-200 focus:outline-none"
                onClick={toggleTemperature}
                aria-expanded={activeTemperature}
              >
                Temperature Related Questions
                <span className={`transition-transform duration-200 ${activeTemperature ? 'rotate-180' : ''}`}>▼</span>
              </button>
            </h3>
          </div>
          {activeTemperature && (
            <div className="space-y-4 bg-white p-4">
              {temperatureFaqs.map((faq, index) => (
                <div key={index} className="border border-blue-300 rounded-lg">
                  <div className="bg-blue-50">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left text-blue-700 focus:outline-none hover:bg-blue-200 transition"
                      onClick={() => toggleTemperatureIndex(index)}
                      aria-expanded={activeTemperatureIndex === index}
                    >
                      {faq.question}
                      <span className={`transition-transform duration-200 ${activeTemperatureIndex === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                  </div>
                  {activeTemperatureIndex === index && (
                    <div className="p-4 text-blue-800">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 border border-blue-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-blue-100">
            <h3 className="mb-0">
              <button
                className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-200 focus:outline-none"
                onClick={toggleHumidity}
                aria-expanded={activeHumidity}
              >
                Humidity Related Questions
                <span className={`transition-transform duration-200 ${activeHumidity ? 'rotate-180' : ''}`}>▼</span>
              </button>
            </h3>
          </div>
          {activeHumidity && (
            <div className="space-y-4 bg-white p-4">
              {humidityFaqs.map((faq, index) => (
                <div key={index} className="border border-blue-300 rounded-lg">
                  <div className="bg-blue-50">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left text-blue-700 focus:outline-none hover:bg-blue-200 transition"
                      onClick={() => toggleHumidityIndex(index)}
                      aria-expanded={activeHumidityIndex === index}
                    >
                      {faq.question}
                      <span className={`transition-transform duration-200 ${activeHumidityIndex === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                  </div>
                  {activeHumidityIndex === index && (
                    <div className="p-4 text-blue-800">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6 border border-blue-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-blue-100">
            <h3 className="mb-0">
              <button
                className="flex justify-between items-center w-full p-4 text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-200 focus:outline-none"
                onClick={toggleNoise}
                aria-expanded={activeNoise}
              >
                Noise Related Questions
                <span className={`transition-transform duration-200 ${activeNoise ? 'rotate-180' : ''}`}>▼</span>
              </button>
            </h3>
          </div>
          {activeNoise && (
            <div className="space-y-4 bg-white p-4">
              {noiseFaqs.map((faq, index) => (
                <div key={index} className="border border-blue-300 rounded-lg">
                  <div className="bg-blue-50">
                    <button
                      className="flex justify-between items-center w-full p-4 text-left text-blue-700 focus:outline-none hover:bg-blue-200 transition"
                      onClick={() => toggleNoiseIndex(index)}
                      aria-expanded={activeNoiseIndex === index}
                    >
                      {faq.question}
                      <span className={`transition-transform duration-200 ${activeNoiseIndex === index ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                  </div>
                  {activeNoiseIndex === index && (
                    <div className="p-4 text-blue-800">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
