import React, { useRef } from "react";

const AddProduct = () => {
  // const { user } = useAuth();
  const nameRef = useRef();
  const priceRef = useRef();
  const lengthRef = useRef();
  const imgRef = useRef();
  const describeRef = useRef();

  const handleSubmit = (e) => {
    console.log("Hi");
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const length = lengthRef.current.value;
    const img = imgRef.current.value;
    const describe = describeRef.current.value;

    const newPlan = { name, price, length, describe, img };

    fetch("http://localhost:5000/orders", {
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
      <h1>Place Your Order</h1>
      <form className="detail-form" onSubmit={handleSubmit}>
        <input
          className="mb-2"
          type="text"
          ref={nameRef}
          placeholder="Your Plan Name"
          required
        />
        <input
          className="mb-2"
          type="text"
          name=""
          id=""
          ref={priceRef}
          placeholder="Price"
          required
        />
        <input
          className="mb-2"
          type="text"
          ref={lengthRef}
          placeholder="Length"
          required
        />
        <input
          className="mb-2"
          type="text"
          ref={imgRef}
          placeholder="image url"
          required
        />
        <textarea
          className="mb-2"
          type="text"
          ref={describeRef}
          placeholder="Write Short Description"
        />
        <input className="submit-button" type="submit" value="Add Plan" />
      </form>
    </div>
  );
};

export default AddProduct;
