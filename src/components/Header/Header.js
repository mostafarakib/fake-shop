import { Carousel } from "react-bootstrap";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="w-100 h-75">
      <Carousel className="carousel-container">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img img-fluid"
            src="camera.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="tagline-box">
            <h3 className="tagline">Live Your Day</h3>
            <p>Combining quality and reliability in one</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-img img-fluid"
            src="laptop.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="tagline-box-2">
            <h3 className="tagline">
              Much Stock <br /> Vast Stow
            </h3>
            <p>Combining quality and reliability in one</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img img-fluid"
            src="headphone.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="tagline-box">
            <h3 className="tagline">
              Your E-commerce <br /> Right Away
            </h3>
            <p>Combining quality and reliability in one</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
