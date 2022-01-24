import React from "react";
import Product from "../../Product/Product";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

import Products from "../Products/Products";
// import ReviewsItem from "../ReviewsItem/ReviewsItem";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Product></Product>
      <Footer></Footer>
      {/* <ReviewsItem></ReviewsItem> */}
    </div>
  );
};

export default Home;
