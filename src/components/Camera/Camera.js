import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Cameras from "../Cameras/Cameras";

const Camera = () => {
  const [products] = useProducts();
  // console.log(products);
  const cameras = products.filter((pd) => pd.category === "camera");

  return (
    <div>
      <div className="cart-img-container">
        <Link to="/cart">
          <img className="cart-img" src="cart.png" alt="cart" />
        </Link>
      </div>
      <Container className="mt-5">
        <Row xs={2} md={3} lg={4} className="g-4">
          {cameras.map((product) => (
            <Cameras key={product.key} product={product}></Cameras>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Camera;
