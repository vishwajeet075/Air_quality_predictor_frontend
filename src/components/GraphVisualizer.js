import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fade,
  CircularProgress,
  TextField
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { BarChart } from '@mui/icons-material';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './Navbar'

const theme = createTheme({
  // ... (theme configuration remains unchanged)
});

const graphTypes = [
  { name: 'Pollutant Time Series', value: 'pollutant', icon: '📈', needsPollutant: true, needsDate: true },
  { name: 'Pollutant Heatmap', value: 'pollutant_heatmap', icon: '🔥', needsPollutant: true, needsYear: true },
  { name: 'Normalized Monthly Pollutants', value: 'normalized_monthly_pollutants', icon: '📊', needsTimeGranularity: true },
  { name: 'Correlation Heatmap', value: 'correlation_heatmap', icon: '🔗', needsDate: false },
  { name: 'Subindex Correlation Heatmap', value: 'subindex_correlation_heatmap', icon: '🔬', needsDate: false },
  { name: 'AQI Bucket Distribution', value: 'aqi_bucket_distribution', icon: '📊', needsDate: false },
  { name: 'AQI Over Time', value: 'aqi_over_time', icon: '📉', needsTimeGranularity: true }
];

const pollutants = ['pm2_5', 'pm10', 'no2', 'so2', 'co', 'o3', 'nh3'];
const timeGranularities = ['hourly', 'daily', 'monthly'];

const GraphVisualizer = () => {
  const [graphType, setGraphType] = useState(graphTypes[0]);
  const [graphImage, setGraphImage] = useState('');
  const [fromDate, setFromDate] = useState(new Date('2022-01-01'));
  const [toDate, setToDate] = useState(new Date());
  const [pollutant, setPollutant] = useState(pollutants[0]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [timeGranularity, setTimeGranularity] = useState(timeGranularities[1]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Clear the graph image when graph type changes
    setGraphImage('');
  }, [graphType]);

  const handleGraphRequest = async () => {
    setIsLoading(true);
    try {
      const payload = {
        graph_type: graphType.value,
        time_granularity: timeGranularity
      };

      if (graphType.needsPollutant) {
        payload.pollutant = pollutant;
      }

      if (graphType.needsDate) {
        payload.start_date = fromDate.toISOString().split('T')[0];
        payload.end_date = toDate.toISOString().split('T')[0];
      }

      if (graphType.needsYear) {
        payload.year = year;
      }

      const response = await axios.post('https://air-quality-predictor-backend.onrender.com/generate-graph', payload);
      setGraphImage(`data:image/png;base64,${response.data.graph_data}`);
    } catch (error) {
      console.error('Error fetching graph:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        padding: 4,
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '1000px' }}
        >
          <Paper elevation={6} sx={{ overflow: 'hidden' }}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" align="center" gutterBottom color="primary">
                Enhanced Air Quality Graph Visualizer
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="graph-type-label">Graph Type</InputLabel>
                    <Select
                      labelId="graph-type-label"
                      value={graphType.value}
                      onChange={(e) => setGraphType(graphTypes.find(type => type.value === e.target.value))}
                      label="Graph Type"
                    >
                      {graphTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ mr: 1 }}>{type.icon}</Typography>
                            {type.name}
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {graphType.needsPollutant && (
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="pollutant-label">Pollutant</InputLabel>
                      <Select
                        labelId="pollutant-label"
                        value={pollutant}
                        onChange={(e) => setPollutant(e.target.value)}
                        label="Pollutant"
                      >
                        {pollutants.map((p) => (
                          <MenuItem key={p} value={p}>{p.toUpperCase()}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {graphType.needsTimeGranularity && (
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="time-granularity-label">Time Granularity</InputLabel>
                      <Select
                        labelId="time-granularity-label"
                        value={timeGranularity}
                        onChange={(e) => setTimeGranularity(e.target.value)}
                        label="Time Granularity"
                      >
                        {graphType.value === 'normalized_monthly_pollutants'
                          ? [<MenuItem key="monthly" value="monthly">Monthly</MenuItem>]
                          : timeGranularities.map((tg) => (
                              <MenuItem key={tg} value={tg}>{tg.charAt(0).toUpperCase() + tg.slice(1)}</MenuItem>
                            ))
                        }
                      </Select>
                    </FormControl>
                  </Grid>
                )}
                {graphType.needsYear && (
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Year"
                      type="number"
                      value={year}
                      onChange={(e) => setYear(parseInt(e.target.value))}
                      InputProps={{ inputProps: { min: 2022, max: new Date().getFullYear() } }}
                    />
                  </Grid>
                )}
                {graphType.needsDate && (
                  <>
                    <Grid item xs={12} md={6}>
                      <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        selectsStart
                        startDate={fromDate}
                        endDate={toDate}
                        minDate={new Date('2022-01-01')}
                        maxDate={toDate}
                        customInput={
                          <TextField fullWidth label="From Date" />
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        selectsEnd
                        startDate={fromDate}
                        endDate={toDate}
                        minDate={fromDate}
                        maxDate={new Date()}
                        customInput={
                          <TextField fullWidth label="To Date" />
                        }
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleGraphRequest}
                  disabled={isLoading}
                  startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <BarChart />}
                  sx={{ minWidth: 200 }}
                >
                  {isLoading ? 'Generating...' : 'Generate Graph'}
                </Button>
              </Box>
            </Box>
            <Fade in={!!graphImage} timeout={1000}>
              <Box sx={{ mt: 4, p: 2, display: 'flex', justifyContent: 'center' }}>
                {graphImage && (
                  <img
                    src={graphImage}
                    alt="Generated Graph"
                    style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  />
                )}
              </Box>
            </Fade>
          </Paper>
        </motion.div>
      </Box>
    </ThemeProvider>
    </>
  );
};

export default GraphVisualizer;