import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <ReviewsItem></ReviewsItem>
    </div>
  );
};

export default Home;
