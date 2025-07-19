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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredProducts = products.filter((product) => {
    const nameMatch = selectedName
      ? product.name.toLowerCase() === selectedName.toLowerCase()
      : true;
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return Number(a.price) - Number(b.price);
    } else if (sortOrder === 'highToLow') {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });

  const uniqueNames = [...new Set(products.map((p) => p.name))];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom color="#898AC4">
        Product List
      </Typography>

      {/* Filters Box with colorful style */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
          flexWrap: 'wrap',
          gap: 2,
          background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
          p: 3,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* Filter by Name */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel
            id="name-filter-label"
            sx={{ color: '#6A0572', fontWeight: 'bold' }}
          >
            Filter by Name
          </InputLabel>
          <Select
            labelId="name-filter-label"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            label="Filter by Name"
            sx={{
              backgroundColor: '#F3E5F5',
              borderRadius: 2,
              fontWeight: 500,
            }}
          >
            <MenuItem value="">All</MenuItem>
            {uniqueNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sort by Price */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel
            id="sort-label"
            sx={{ color: '#1F618D', fontWeight: 'bold' }}
          >
            Sort by Price
          </InputLabel>
          <Select
            labelId="sort-label"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label="Sort by Price"
            sx={{
              backgroundColor: '#E8F8F5',
              borderRadius: 2,
              fontWeight: 500,
            }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="lowToHigh">Low to High</MenuItem>
            <MenuItem value="highToLow">High to Low</MenuItem>
          </Select>
        </FormControl>

        {/* Search by Name */}
        <TextField
          label="Search by Name"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            minWidth: 250,
            backgroundColor: '#FDF2E9',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFB6C1',
              },
              '&:hover fieldset': {
                borderColor: '#EC407A',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#E91E63',
              },
            },
          }}
        />
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4}>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '400px',
                  width: '300px',
                  margin: '5%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: 4,
                  background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 250, objectFit: 'contain', p: 2 }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ textTransform: 'lowercase', fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    ₹ {product.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: 'space-between', px: 2, mt: 'auto' }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleEdit(product.id)}
                    sx={{ backgroundColor: '#FEC5F6', color: 'black' }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleDelete(product.id)}
                    sx={{ backgroundColor: '#FEC5F6', color: 'black' }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
            No matching products found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
