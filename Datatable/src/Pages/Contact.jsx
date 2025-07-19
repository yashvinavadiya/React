import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        minHeight: '100vh',
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 4, backgroundColor: '#ffffffcc' }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#6A1B9A' }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: '#555' }}
          >
            We'd love to hear from you. Please fill out the form below.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} direction="column">
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    backgroundColor: '#F3E5F5',
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    backgroundColor: '#E1F5FE',
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{
                    backgroundColor: '#FFF3E0',
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
                    color: '#fff',
                    px: 5,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 3,
                    '&:hover': {
                      background: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
