import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from '@mui/material';

const Home = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from JSON server
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:3000/item')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3000/item/${id}`, {
        method: 'DELETE',
      });
      fetchProducts(); // Refresh the list
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleEdit = (id) => {
    alert(`Navigate to edit page for product ID: ${id}`);
    // Optional: navigate(`/edit/${id}`) if using React Router
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
         Product List
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                boxShadow: 3,
                background: 'linear-gradient(135deg, #f5f5f5, #f0f0f0)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 250, objectFit: 'contain', p: 2 }}
              />

              <CardContent>
                <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase' }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="secondary">
                  ₹ {product.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ mt: 'auto', justifyContent: 'space-between', px: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color=""
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
