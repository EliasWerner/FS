import * as React from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./offers-gallery.css";

export const OffersGallery = () => {
  return (
    <div className="offersGallery">
      <Carousel
        className="gallery"
        nextIcon={<FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />}
        prevIcon={<FontAwesomeIcon icon={["fas", "arrow-circle-left"]} />}
      >
        <Carousel.Item interval={10000}>
          <img
            src="https://images.by.prom.st/254605923_w640_h640_254605923.jpg"
            alt="First slide"
            height="700px"
          />
          <Carousel.Caption>
            <h3>Кровать</h3>
            <p>Кровать.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            src="https://images.by.prom.st/257235282_w640_h640_257235282.jpg"
            alt="Second slide"
            height="700px"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            src="https://images.by.prom.st/255443229_w640_h640_255443229.jpg"
            alt="Third slide"
            height="700px"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="sales">
        <div className="sale1">Скидка 1</div>
        <div className="sale2">Скидка 2</div>
      </div>
    </div>
  );
};
