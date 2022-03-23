import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Laptops from "../Laptops/Laptops";

const Laptop = () => {
  const [products] = useProducts();

  const laptops = products.filter((pd) => pd.category === "laptop");

  return (
    <Container className="mt-5">
      <Row xs={2} md={3} lg={4} className="g-4">
        {laptops.map((product) => (
          <Laptops key={product.key} product={product}></Laptops>
        ))}
      </Row>
    </Container>
  );
};

export default Laptop;
