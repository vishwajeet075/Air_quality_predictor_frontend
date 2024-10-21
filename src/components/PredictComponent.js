import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';
import Navbar from './Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const AQICard = ({ title, value, color }) => (
  <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, justifyContent: 'center', alignItems: 'center' }}>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {title}
    </Typography>
    <Typography component="p" variant="h4" style={{ color }}>
      {value}
    </Typography>
  </Paper>
);

const getAQIColor = (aqi) => {
  if (aqi <= 50) return '#00e400';
  if (aqi <= 100) return '#ffff00';
  if (aqi <= 150) return '#ff7e00';
  if (aqi <= 200) return '#ff0000';
  if (aqi <= 300) return '#8f3f97';
  return '#7e0023';
};

const AQIDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);

  const fetchPredictions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://air-quality-predictor-backend.onrender.com/predict');
      const { predictions } = response.data;

      if (!predictions || !Array.isArray(predictions)) {
        throw new Error('Invalid data format received from API');
      }

      const formattedPredictions = predictions.map((value, index) => ({
        time: dayjs().add(index, 'hour').format('MMM D, HH:mm'),
        aqi: value,
      }));

      setPredictions(formattedPredictions);
    } catch (error) {
      setError('Failed to fetch predictions: ' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  const getCurrentAQI = () => predictions.length > 0 ? predictions[0].aqi.toFixed(2) : 'N/A';
  const getAverageAQI = () => predictions.length > 0 ? (predictions.reduce((sum, p) => sum + p.aqi, 0) / predictions.length).toFixed(2) : 'N/A';

  const dailyData = predictions.filter((_, index) => index % 24 === 0);

  return (
    <>
    <Navbar/>
    <div style={{marginTop:'100px'}}></div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography component="h1" variant="h3" color="primary" gutterBottom>
          AQI Prediction Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <AQICard title="Current AQI" value={getCurrentAQI()} color={getAQIColor(parseFloat(getCurrentAQI()))} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AQICard title="7-Day Average AQI" value={getAverageAQI()} color={getAQIColor(parseFloat(getAverageAQI()))} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, justifyContent: 'center', alignItems: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={fetchPredictions}
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} color="inherit" />}
              >
                {loading ? 'Updating...' : 'Update Predictions'}
              </Button>
            </Paper>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                7-Day AQI Forecast
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={dailyData}
                  margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
                >
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="aqi" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Hourly AQI Predictions (Next 24 Hours)
              </Typography>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={predictions.slice(0, 24)}
                  margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24,
                  }}
                >
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="aqi" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default AQIDashboard;