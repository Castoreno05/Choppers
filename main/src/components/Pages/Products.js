import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <Container className="productContainer">
        <Row className="items">
          <div className="item">
            <img
              src="images/rascal-molding.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Rascal Molding</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/opove.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Opove Clippers</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/hair-dough.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Hair Dough</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="reviews">2 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
        </Row>
        <Row className="items">
          <div className="item">
            <img
              src="images/equinox-scissors.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Equinox Scissors</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/derby-razor.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Derby Razor</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/victory-clay.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Victory Clay</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="reviews">2 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
        </Row>
        <Row className="items">
          <div className="item">
            <img
              src="images/novah-clippers.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Novah Clippers</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/suavecito-pomade.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Hair Dough</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="reviews">2 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/coolala-scissors.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Opove Clippers</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
        </Row>
        <Row className="items">
          <div className="item">
            <img
              src="images/rascal-molding.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Rascal Molding</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/hair-dough.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Hair Dough</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span className="reviews">2 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
          <div className="item">
            <img
              src="images/opove.jpg"
              alt=""
              style={{ height: "240px", width: "240px" }}
            />
            <h2>Opove Clippers</h2>
            <div className="rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="reviews">4 reviews</span>
            </div>
            <p>$15.99</p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
