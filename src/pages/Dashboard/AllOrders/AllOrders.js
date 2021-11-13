import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
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

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://cryptic-shelf-02140.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const sure = window.confirm("Do you want to delete this plan? ");
    if (sure) {
      fetch(`https://cryptic-shelf-02140.herokuapp.com//${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingPlans = orders.filter((order) => order._id !== id);
            setOrders(remainingPlans);
          }
        });
    }
  };

  return (
    <div>
      <h2>Orders: {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Orders table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Order</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.orderName}</TableCell>
                <TableCell align="right">
                  <ThemeProvider theme={theme}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </ThemeProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllOrders;
