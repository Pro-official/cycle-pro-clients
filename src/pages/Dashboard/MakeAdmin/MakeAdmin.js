import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://cryptic-shelf-02140.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h2>Make admin</h2>
      <form sx={{ border: 1 }} onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <ThemeProvider theme={theme}>
          <Button sx={{ mt: 1 }} type="submit" variant="contained">
            Make Admin
          </Button>
        </ThemeProvider>
      </form>
      {success && <Alert severity="success">Admin Making Done!</Alert>}
    </div>
  );
};

export default MakeAdmin;
