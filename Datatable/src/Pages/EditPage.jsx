import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Avatar,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
  });

  useEffect(() => {
    fetch(`http://localhost:3000/item/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await fetch(`http://localhost:3000/item/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#4A148C',
            textShadow: '1px 1px #fff',
          }}
        >
           Edit Product 
        </Typography>

        {formData.image && (
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar
              src={formData.image}
              alt="Product"
              sx={{ width: 120, height: 120, border: '2px solid #fff' }}
              variant="rounded"
            />
          </Box>
        )}

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="🖼️ Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ bgcolor: '#ffffffcc', borderRadius: 2 }}
          />
          <TextField
            label="📦 Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ bgcolor: '#ffffffcc', borderRadius: 2 }}
          />
          <TextField
            label="💰 Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ bgcolor: '#ffffffcc', borderRadius: 2 }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              borderRadius: 3,
              background: 'linear-gradient(to right, #ff6a00, #ee0979)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, #ee0979, #ff6a00)',
              },
            }}
          >
             Update Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Edit;
