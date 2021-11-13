import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ReviewItem = ({ reviews }) => {
  const { name, email, rating, review } = reviews;
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ textAlign: "left", boxShadow: 3 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {review}
            </Typography>
            <Typography
              sx={{ mt: 1.5, fontWeight: "bold" }}
              variant="body2"
              color="text.secondary"
            >
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ReviewItem;
