import React, { useState } from "react";
import Booking from "./Booking";
import styled from "styled-components";

export default function Card({ name, image, intro }) {
  const [popup, setPopup] = useState(false);

  return (
    <Container>
      <div className={`barber-${name}`}>
        <div className="barber-info">{image}</div>
        <div className="barber-booking">
          <h1>{name}</h1>
          <button onClick={() => setPopup(true)}>Book Now</button>
          <p>{intro}</p>
        </div>
      </div>
      <Booking trigger={popup} setPopup={setPopup}></Booking>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: dotted 0.1rem black;
  .barber-Tank,
  .barber-Matthew,
  .barber-Germ {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .barber-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        padding: 1rem;
        height: 270px;
        width: 220px;
        border-radius: 20px;
      }
    }
    .barber-booking {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      button {
        cursor: pointer;
        width: 100px;
        border: none;
        border-radius: 20px;
        padding: 0.3rem;
        margin: 10px 15px;
      }
      p {
        line-height: 2;
        padding: 1rem;
      }
    }
  }
  .barber-Matthew {
    .barber-info {
      img {
        height: 280px !important;
        width: 250px !important;
      }
    }
  }
  .barber-Germ {
    .barber-info {
      img {
        height: 260px !important;
        width: 250px !important;
      }
    }
  }
`;
