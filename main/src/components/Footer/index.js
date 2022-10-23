import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { FaApplePay, FaCcAmex } from "react-icons/fa";
import { SiZelle, SiVenmo, SiVisa } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <Container fluid className="footerContainer">
        <h2>Join Us For Updates</h2>
        <Row>
          <form className="footerForm">
            <input placeholder="Email Here" />
            <Button variant="none" className="submitEmail">
              <AiOutlineMail className="submitIcon" />
            </Button>
          </form>
        </Row>
        <Row>
          <div className="footerIcons">
            <AiOutlineInstagram className="instagram" />
            <AiFillYoutube className="youtube" />
            <AiFillFacebook className="facebook" />
          </div>
        </Row>
        <Row>
          <div className="footerNav">
            <p>Search</p>
            <p>Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Terms of Service</p>
          </div>
        </Row>
        <Row>
          <ul className="footerPayment">
            <li>
              <FaApplePay className="payment applepay" />
            </li>
            <li>
              <SiVisa className="payment visa" />
            </li>
            <li>
              <FaCcAmex className="payment amex" />
            </li>
            <li>
              <SiZelle className="payment zelle" />
            </li>
            <li>
              <SiVenmo className="payment venmo" />
            </li>
          </ul>
        </Row>
        <Row>
          <div className="footerRights">
            <p>
              © 2022 Choppers<span>Created by Matthew Castoreno</span>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
