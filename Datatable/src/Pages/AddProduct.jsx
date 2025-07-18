import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: formData.image,
          name: formData.name,
          price: parseFloat(formData.price)
        })
      });

      if (res.ok) {
        alert('✅ Product added successfully!');
        setFormData({ image: '', name: '', price: '' });
      } else {
        alert('❌ Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error adding product.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, background: 'linear-gradient(135deg, #f3e5f5, #ede7f6)' }}>
        <Typography variant="h4" align="center" gutterBottom color="">
           Add New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            label="📷 Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="🛍️ Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />

          <TextField
            label="💰 Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #8e24aa, #d81b60)',
              '&:hover': {
                background: 'linear-gradient(to right, #d81b60, #8e24aa)',
              }
            }}
          >
            ➕ Add Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddProduct;
