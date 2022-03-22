import React, { useEffect, useState } from "react";
import { Form, FormControl, Button, Container, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts();
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("products.jSON")
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data);
      });
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };

  return (
    <div>
      <div>
        <Form className="d-flex mt-4 justify-content-center">
          <FormControl
            onChange={handleSearch}
            type="search"
            placeholder="Search"
            className=" me-2 w-50 shadow-none"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </div>

      <Container className="mt-5">
        <Row xs={2} md={3} lg={4} className="g-4">
          {displayProducts.map((product) => (
            <Products key={product.key} product={product}></Products>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
