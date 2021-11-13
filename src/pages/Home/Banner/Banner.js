import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import banner from "../../../images/banner.png";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: -5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid sx={{ my: "auto", width: 1 }} item xs={12} sm={12} md={5}>
          <Box
            sx={{
              width: "75%",
              ml: "auto",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{ lineHeight: 1.5, fontFamily: "monospace" }}
              variant="h5"
              component="h2"
            >
              For A Better Ride...
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.2,
                fontSize: "50px",
                fontWeight: "700",
                fontFamily: "monospace",
              }}
              variant="h3"
              component="h2"
            >
              Find Your
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.2,
                fontSize: "50px",
                fontWeight: "700",
                color: "#f23b3b",
                fontFamily: "monospace",
              }}
              variant="h3"
              component="h2"
            >
              Desired
            </Typography>
            <Typography
              sx={{
                lineHeight: 1.2,
                fontSize: "50px",
                fontWeight: "700",
                mb: "10px",
                fontFamily: "monospace",
              }}
              variant="h3"
              component="h2"
            >
              Ride
            </Typography>
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "black",
              }}
              to="/explore"
            >
              {" "}
              <ThemeProvider theme={theme}>
                <Button color="primary" variant="contained">
                  Explore
                </Button>
              </ThemeProvider>
            </NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <img style={{ width: "100%" }} src={banner} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
