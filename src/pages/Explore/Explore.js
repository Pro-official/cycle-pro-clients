import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ExploreProduct from "./ExploreProduct";
import Navigation from "../Home/Shared/Navigation/Navigation";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://cryptic-shelf-02140.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 7 }}>
        <Typography variant="h4" component="h1">
          Our Precious Products
        </Typography>
        <Typography variant="h6" component="h1">
          See All The Top Products Made by Our Company.
        </Typography>
        <Container
          style={{ marginTop: "3%", marginLeft: "auto", marginRight: "auto" }}
          maxWidth="lg"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {products.map((product) => (
              <ExploreProduct
                product={product}
                key={product._id}
              ></ExploreProduct>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Explore;
