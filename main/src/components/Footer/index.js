import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="left-container">
        <div className="office">
          <h2>Choppers</h2>
          <div className="address">
            <h3>Address</h3>
            <p>1501 South Richey St</p>
            <p>Pasadena Tx, 77502</p>
          </div>
        </div>
        <div className="follow-us">
          <h2>Follow Us</h2>
          <div className="socials">
            <AiOutlineYoutube className="youtube" />
            <AiOutlineTwitter className="twitter" />
            <AiFillFacebook className="facebook" />
            <AiFillInstagram className="instagram" />
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="services">
          <h2>Services</h2>
          <p>Tapers</p>
          <p>Scissor Cuts</p>
          <p>Low Fades</p>
          <p>Mid Fades</p>
          <p>Bald Fades</p>
          <p>Edge Ups</p>
          <p>Mohawks</p>
          <p>Designs</p>
          <p>Beard Trims</p>
          <p>Flat Tops</p>
          <p>Regular Men's Hair Cuts</p>
        </div>
        <div className="operation-hours">
          <h2>Business Hours</h2>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  height: 30vh;
  padding: 1.5rem;
  grid-template-columns: 30% 70%;
  .left-container {
    display: grid;
    grid-template-rows: 50% 50%;
    gap: 0.5rem;
    .office,
    .follow-us {
      h2,
      .address,
      .socials {
        padding: 0.5rem;
      }
      svg {
        color: #bfbfbf;
        height: 35px;
        width: 35px;
      }
    }
  }
  .right-container {
    display: grid;
    grid-template-columns: 50% 50%;
    .services,
    .operation-hours {
      border: solid 0.1rem black;
      h2,
      .services,
      .operation-hours {
        padding: 0.5rem;
      }
    }
  }
`;

export default Footer;
