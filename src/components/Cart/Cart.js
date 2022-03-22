import React from "react";
import { Button } from "react-bootstrap";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import AddedProducts from "../AddedProducts/AddedProducts";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Cart = (props) => {
  let addedProducts = props.cart;
  const { cart, setCart } = props;
  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    history.push("/placeOrder");
    setCart([]);
    clearTheCart();
  };

  let totalQuantity = 0;
  let total = 0;
  for (const addedProduct of cart) {
    addedProduct.quantity = !addedProduct.quantity ? 1 : addedProduct.quantity;
    total = total + addedProduct.price * addedProduct.quantity;
    totalQuantity = totalQuantity + addedProduct.quantity;
  }
  let shippingCost = 0;
  for (const shippingPrice of cart) {
    shippingCost = shippingCost + shippingPrice.shipping;
  }
  const tax = (total + shippingCost) * 0.1;
  const grandTotal = total + shippingCost + tax;
  return (
    <div className="cart-container">
      <div>
        {addedProducts.map((product) => (
          <AddedProducts
            key={product.key}
            addedProducts={product}
            handleRemove={handleRemove}
          ></AddedProducts>
        ))}
      </div>
      <div className="price-container p-4">
        <h3>Order Summary</h3>
        <h4>
          Items Ordered: <span>{totalQuantity}</span>
        </h4>
        <p className="mt-4">
          Price of products: <span>{total.toFixed(2)}$</span>
        </p>
        <p>
          Shipping: <span>{shippingCost.toFixed(2)}$</span>
        </p>
        <p>
          Tax: <span>{tax.toFixed(2)}$</span>
        </p>
        <p>
          Total: <span>{grandTotal.toFixed(2)}$</span>
        </p>
        <Link to="/placeOrder">
          <Button
            onClick={handlePlaceOrder}
            className="mt-4"
            variant="outline-dark"
          >
            <FontAwesomeIcon icon={faCartArrowDown} />
            <span> Place Order</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
