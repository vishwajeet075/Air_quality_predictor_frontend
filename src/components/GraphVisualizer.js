import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon, ChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const graphTypes = [
  { name: 'Box Plot', value: 'boxplot', icon: '📊' },
  { name: 'Heatmap', value: 'heatmap', icon: '🔥' },
  { name: 'Time Series', value: 'timeseries', icon: '📈' },
  { name: 'Scatter Plot', value: 'scatterplot', icon: '🔵' },
  { name: 'Histogram', value: 'histogram', icon: '📊' },
  { name: 'Line Plot', value: 'lineplot', icon: '📉' }
];

const GraphVisualizer = () => {
  const [graphType, setGraphType] = useState(graphTypes[0]);
  const [graphImage, setGraphImage] = useState('');
  const [fromDate, setFromDate] = useState(new Date('2020-11-27'));
  const [toDate, setToDate] = useState(new Date('2024-09-30'));
  const [isLoading, setIsLoading] = useState(false);

  const handleGraphRequest = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://air-quality-predictor-backend.onrender.com/generate_graph', {
        graph_type: graphType.value,
        from_date: fromDate.toISOString().split('T')[0],
        to_date: toDate.toISOString().split('T')[0]
      });
      setGraphImage(`data:image/png;base64,${response.data.image}`);
      toast.success('Graph generated successfully!');
    } catch (error) {
      console.error('Error fetching graph:', error);
      toast.error('Failed to generate graph. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-6 sm:p-8 md:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">Air Quality Graph Visualizer</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Graph Type</label>
              <Menu as="div" className="relative">
                <Menu.Button className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span>{graphType.icon} {graphType.name}</span>
                  <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" aria-hidden="true" />
                </Menu.Button>
                <Menu.Items className="absolute z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {graphTypes.map((type) => (
                      <Menu.Item key={type.value}>
                        {({ active }) => (
                          <button
                            onClick={() => setGraphType(type)}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } group flex items-center w-full px-4 py-2 text-sm`}
                          >
                            {type.icon} {type.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    selectsStart
                    startDate={fromDate}
                    endDate={toDate}
                    maxDate={toDate}
                    dateFormat="yyyy-MM-dd"
                    className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex-1">
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    selectsEnd
                    startDate={fromDate}
                    endDate={toDate}
                    minDate={fromDate}
                    maxDate={new Date('2024-09-30')}
                    dateFormat="yyyy-MM-dd"
                    className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center text-lg font-semibold transition-colors duration-200"
            onClick={handleGraphRequest}
            disabled={isLoading}
          >
            {isLoading ? (
              <ArrowPathIcon className="animate-spin h-6 w-6 mr-3" />
            ) : (
              <ChartBarIcon className="h-6 w-6 mr-3" />
            )}
            {isLoading ? 'Generating...' : 'Generate Graph'}
          </button>

          {graphImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-8 flex justify-center"
            >
              <img 
                src={graphImage} 
                alt="Generated Graph" 
                className="max-w-full h-auto rounded-lg shadow-lg" 
                style={{ maxHeight: '60vh' }}  // Limit height to 60% of viewport height
              />
            </motion.div>
          )}
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default GraphVisualizer;