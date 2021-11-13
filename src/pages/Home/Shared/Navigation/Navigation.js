import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import useAuth from "./../../../../hooks/useAuth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f23b3b",
    },
    secondary: {
      main: "#ffffff",
    },
    nav: {
      main: "#000000",
    },
  },
});

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0, color: "white" }}>
      <ThemeProvider theme={theme}>
        <AppBar color="nav" position="static" sx={{ boxShadow: 0, mb: 4 }}>
          <Toolbar color="nav">
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
                <Typography
                  sx={{ ml: 2, fontWeight: "600", color: "white" }}
                  variant="h6"
                  component="div"
                >
                  Home
                </Typography>
              </IconButton>
            </NavLink>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexDirection: "row", ml: "auto", mr: 2 }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  fontWeight: "600",
                  color: "white",
                }}
                to="/explore"
              >
                {" "}
                Explore
              </NavLink>
            </Typography>

            {user?.email ? (
              <>
                <NavLink
                  style={{ textDecoration: "none", fontWeight: "600" }}
                  to="/dashboard"
                >
                  <Button
                    to="/dashboard"
                    variant="contained"
                    color="secondary"
                    sx={{ border: 1, mr: 2 }}
                  >
                    Dashboard
                  </Button>
                </NavLink>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ mr: 2, color: "white" }}
                >
                  {user?.displayName}
                </Typography>
                <Button
                  onClick={logout}
                  variant="contained"
                  color="primary"
                  sx={{ mr: 2 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <NavLink
                style={{ textDecoration: "none", fontWeight: "600" }}
                to="/login"
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textDecoration: 0, mr: 2 }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Navigation;
