import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Grid } from "@mui/material";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useAuth from "../../../hooks/useAuth";

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

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8, border: 1 }} xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              color="#f23b3b"
              gutterBottom
            >
              Cycle Of Pro
            </Typography>
            <Typography variant="body1" gutterBottom>
              Login to Get Discount!!
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <ThemeProvider theme={theme}>
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>

                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </NavLink>
              </ThemeProvider>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {/* {authError && <Alert severity="error">{authError}</Alert>} */}
            </form>
            <hr />
            <ThemeProvider theme={theme}>
              <Button onClick={handleGoogleSignIn} variant="contained">
                Google Sign In
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
