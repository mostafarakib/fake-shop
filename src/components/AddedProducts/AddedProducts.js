import React from "react";
import { Button } from "react-bootstrap";
import "./AddedProducts.css";

const AddedProducts = (props) => {
  const { img, name, price, stock, key } = props.addedProducts;
  return (
    <div className="d-flex added-products p-4">
      <img src={img} alt="productImage" />
      <div className="added-products-details">
        <h5>{name}</h5>
        <p>
          Price: <small>{price}$</small>
        </p>
        <p>Only {stock} available in the stock</p>
        <Button onClick={() => props.handleRemove(key)} variant="outline-dark">
          Remove From Cart
        </Button>
      </div>
    </div>
  );
};

export default AddedProducts;
