import React, { useState } from 'react';
import NavBar from './Navbar';
import AirQualityService from './AirQualityService';
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
  CircularProgress
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { BarChart } from '@mui/icons-material';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

const graphTypes = [
  { name: 'Box Plot', value: 'boxplot', icon: '📊' },
  { name: 'Heatmap', value: 'heatmap', icon: '🔥' },
  { name: 'Time Series', value: 'timeseries', icon: '📈' },
  { name: 'Scatter Plot', value: 'scatterplot', icon: '🔵' },
  { name: 'Histogram', value: 'histogram', icon: '📊' },
  { name: 'Line Plot', value: 'lineplot', icon: '📉' }
];

const UpdatedGraphVisualizer = () => {
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
    } catch (error) {
      console.error('Error fetching graph:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          padding: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', maxWidth: '1000px' }}
        >
          <Paper elevation={6} sx={{ overflow: 'hidden' }}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4" align="center" gutterBottom color="primary">
                Air Quality Graph Visualizer
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                    selectsStart
                    startDate={fromDate}
                    endDate={toDate}
                    maxDate={toDate}
                    customInput={
                      <Button variant="outlined" fullWidth>
                        {fromDate.toDateString()}
                      </Button>
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                    selectsEnd
                    startDate={fromDate}
                    endDate={toDate}
                    minDate={fromDate}
                    maxDate={new Date('2024-09-30')}
                    customInput={
                      <Button variant="outlined" fullWidth>
                        {toDate.toDateString()}
                      </Button>
                    }
                  />
                </Grid>
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
      <AirQualityService />
    </ThemeProvider>
  );
};

export default UpdatedGraphVisualizer;
