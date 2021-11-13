import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import ReviewItem from "./ReviewItem";

const ReviewsItem = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
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
          {reviews.map((reviews) => (
            <ReviewItem reviews={reviews} key={reviews._id}></ReviewItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewsItem;
