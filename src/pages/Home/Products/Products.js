import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: 10, mb: 7 }}>
      <Typography variant="h4" component="h1">
        Our Precious Products
      </Typography>
      <Typography variant="h6" component="h1">
        See All The Top Products Made by Our Company.
      </Typography>
      <Container sx={{ mt: 6 }} maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
