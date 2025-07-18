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
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:3000/item');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`http://localhost:3000/item/${id}`, {
          method: 'DELETE',
        });
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom color="#898AC4">
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
                boxShadow: 4,
                background: 'linear-gradient(135deg, #fafafa, #e0e0e0)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 250, objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="secondary">
                  ₹ {product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, mt: 'auto' }}>
                <Button size="small" variant="contained" color="black" onClick={() => handleEdit(product.id)} sx={{
                   backgroundColor:"#FEC5F6"
                }}>
                  Edit
                </Button>
                <Button size="small" variant="contained" color="black" onClick={() => handleDelete(product.id)} sx={{
                  backgroundColor:"#FEC5F6"
                }}>
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
