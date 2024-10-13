import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Typography, 
  Box,
  CircularProgress,
  Snackbar,
  Alert
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const PredictionForm = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      hour: new Date().getHours(),
      pm10: '',
      no2: '',
      so2: '',
      co: '',
      no: '',
      o3: '',
      nh3: '',
    }
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://air-quality-predictor-backend.onrender.com/predict', data);
      setPrediction(response.data.pm2_5);
      setOpenSnackbar(true);
    } catch (err) {
      setError('An error occurred while making the prediction.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    reset();
    setPrediction(null);
    setError(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#f0f4f8' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
          <Typography variant="h4" gutterBottom component="div" sx={{ mb: 4, color: theme.palette.primary.main }}>
            Air Quality Prediction
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {['year', 'month', 'day', 'hour', 'pm10', 'no2', 'so2', 'co', 'no', 'o3', 'nh3'].map((field) => (
                <Grid item xs={12} sm={6} key={field}>
                  <Controller
                    name={field}
                    control={control}
                    rules={{ required: 'This field is required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField
                        label={field.toUpperCase()}
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                disabled={loading}
                sx={{ width: '48%' }}
              >
                {loading ? <CircularProgress size={24} /> : 'Predict'}
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outlined" 
                color="secondary"
                sx={{ width: '48%' }}
              >
                Reset
              </Button>
            </Box>
          </form>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
              Prediction successful! PM2.5: {prediction?.toFixed(2)}
            </Alert>
          </Snackbar>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default PredictionForm;