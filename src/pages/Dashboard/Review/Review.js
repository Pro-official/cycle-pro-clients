import React, { useRef } from "react";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const ratingRef = useRef();
  const describeRef = useRef();

  const handleSubmit = (e) => {
    // console.log("Hi");
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const rating = ratingRef.current.value;
    const review = describeRef.current.value;

    const newPlan = { name, email, rating, review };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlan),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Plan Added Successfully");
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div className=" individual">
      <h1>Review Us</h1>
      <form className="detail-form" onSubmit={handleSubmit}>
        <input
          className="mb-2"
          type="text"
          ref={nameRef}
          value={user.displayName}
          required
        />
        <input
          className="mb-2"
          type="text"
          name=""
          id=""
          ref={emailRef}
          value={user.email}
          required
        />

        <input
          className="mb-2"
          type="text"
          ref={ratingRef}
          placeholder="Rate Us"
          required
        />
        <textarea
          className="mb-2"
          type="text"
          ref={describeRef}
          placeholder="Your Review"
        />
        <input className="submit-button" type="submit" value="Add Plan" />
      </form>
    </div>
  );
};

export default Review;
