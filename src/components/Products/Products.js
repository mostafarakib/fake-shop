import React, { useContext, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Products.css";
import { CartContext } from "../../App";
import ViewDetails from "../ViewDetails/ViewDetails";

const Products = (props) => {
  const [modalShow, setModalShow] = useState(false);

  // const [modalContent, setModalContent] = useState([]);

  const handleViewDetails = (product) => {
    console.log(product);

    // setModalContent(product);
  };

  const handleAddToCart = useContext(CartContext);
  const { name, img, price, star, stock, seller } = props.product;

  return (
    <div>
      <Col>
        <Card className="card-container">
          <Card.Img className="w-75 rounded mx-auto" variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title>
              <small>{name}</small>
            </Card.Title>
            <p>
              By: <small>{seller}</small>
            </p>
            <p>
              Price: <small>{price}$</small>
            </p>
            <p>
              <small>Only {stock} left in the stock</small>
            </p>
            <Rating
              initialRating={star}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>
            <div className="btn-container mt-3">
              <Button
                onClick={() => {
                  setModalShow(true);

                  handleViewDetails(props.product);
                }}
                variant="outline-dark"
              >
                View Details
              </Button>

              <ViewDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
              ></ViewDetails>

              <Button
                variant="outline-dark"
                onClick={() => handleAddToCart(props.product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Products;
// export {matchedProduct}
