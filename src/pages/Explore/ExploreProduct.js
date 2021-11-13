import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f23b3b",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const ExploreProducts = ({ product }) => {
  const { name, img, description, _id, price } = product;
  return (
    <Grid item xs={12} sm={12} md={3}>
      <Card sx={{ textAlign: "left", boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            width="100%"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}...
            </Typography>
            <Typography
              sx={{ mt: 1.5, fontWeight: "bold" }}
              variant="body2"
              color="text.secondary"
            >
              $ {price}
            </Typography>
          </CardContent>
          <ThemeProvider theme={theme}>
            <NavLink to={`/buynow/${_id}`} style={{ textDecoration: "none" }}>
              <Button
                sx={{ m: 1 }}
                variant="contained"
                size="small"
                color="primary"
              >
                Buy Now
              </Button>
            </NavLink>
          </ThemeProvider>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ExploreProducts;
