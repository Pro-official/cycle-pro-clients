import React from "react";
import breakdown from "../../images/breakdown.png";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div sx={{ mt: 7 }} className="break">
        <h1>Breakdown of Product</h1>
        <h3>A complete breakdown of our prestigious Cycle!</h3>
        <img className="break-img" src={breakdown} alt="" />
      </div>
    </>
  );
};

export default Product;
