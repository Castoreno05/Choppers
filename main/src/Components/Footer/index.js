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
      <div className="middle-container">
        <div className="services">
          <h2>Services</h2>
          <div className="group-wrapper">
            <div className="group-one">
              <p>Tapers</p>
              <p>Scissor Cuts</p>
              <p>Low Fades</p>
              <p>Mid Fades</p>
              <p>Bald Fades</p>
            </div>
            <div className="group-two">
              <p>Edge Ups</p>
              <p>Mohawks</p>
              <p>Designs</p>
              <p>Beard Trims</p>
              <p>Flat Tops</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="operation-hours">
          <h2>Business Hours</h2>
          <div className="group-wrapper">
            <div className="group-one">
              <p>Sunday</p>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
            </div>
            <div className="group-two">
              <p>Closed</p>
              <p>Closed</p>
              <p>10AM - 6PM</p>
              <p>10AM - 6PM</p>
              <p>10AM - 6PM</p>
              <p>10AM - 6PM</p>
              <p>10AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  color: whitesmoke;
  // text-shadow: 0 0 10px #ba0d16, 0 0 20px #ba0d16, 0 0 40px #ba0d16,
  //   0 0 80px #ba0d16, 0 0 160px #ba0d16;
  background-color: #000100;
  display: grid;
  padding: 1.5rem;
  grid-template-columns: 33% 33% 33%;
  .left-container {
    display: grid;
    grid-template-rows: 50% 50%;
    justify-content: center;
    align-items: center;
    .office,
    .follow-us {
      h2,
      .address {
        padding: 0.5rem;
      }
      .socials {
        padding: 0.25rem;
        svg {
          color: #fff;
          font-size: 34px;
        }
      }
    }
  }
  .middle-container {
    display: grid;
    justify-content: center;
    .services {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      h2 {
        padding: 0.3rem;
        text-align: center;
      }
      .group-wrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        gap: 2rem;
        line-height: 2;
      }
    }
  }
  .right-container {
    display: grid;
    justify-content: center;
    .operation-hours {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      h2 {
        text-align: center;
        padding: 0.35rem;
      }
      .group-wrapper {
        display: grid;
        grid-template-columns: 40% 60%;
        line-height: 1.5;
        gap: 3rem;
      }
    }
  }
  @media screen and (max-width: 776px) {
    height: auto;
    grid-template-columns: 50% 50%;
    p {
      font-size: 18px;
    }
    .middle-container {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
    .socials {
      .youtube, .twitter, .facebook, .instagram {
        font-size: 24px !important;
      }
    }
  }

  @media screen and (max-width: 558px) {
    height: auto;
    grid-template-columns: 100%;
  }
`;

export default Footer;
