import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BuyNow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  const handleOrderSubmit = (e) => {
    // collect data
    const order = {
      ...orderInfo,
      orderName: product.name,
      orderPrice: product.price,
      orderDescription: product.description,
    };
    console.log(order);
    // send to the server
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Added Successfully");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <div className=" individual">
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {product?.name}
          </Typography>
          <form onSubmit={handleOrderSubmit}>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Phone Number"
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="name"
              onBlur={handleOnBlur}
              value={product.name}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="price"
              onBlur={handleOnBlur}
              value={product.price}
              size="small"
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default BuyNow;
