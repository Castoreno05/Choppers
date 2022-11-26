import React, { useState } from "react";
import Booking from "./Booking";
import styled from "styled-components";

export default function Card({ name, image, intro }) {
  const [popup, setPopup] = useState(false);

  return (
    <Container>
      <div className={`barber-${name}`}>
        <div className="barber-info">
          {image}
          <button onClick={() => setPopup(true)}>Book Now</button>
        </div>
        <div className="barber-booking">
          <h1>{name}</h1>
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
  .barber-Tank {
    display: flex;
    justify-content: center;
    height: 50vh;
    .barber-info {
      img {
        padding: 1rem;
        height: 260px;
        width: 210px;
        border-radius: 20px;
      }
      button {
        margin-left: 1rem;
      }
    }
    .barber-booking {
      display: flex;
      justify-content: flext-start;
      flex-direction: column;
      background-color: whitesmoke;
      align-items: flex-start;
      button {
        cursor: pointer;
        width: 100px;
        border: none;
        border-radius: 20px;
        padding: 0.3rem;
        margin: 10px 15px;
      }
      p {
        padding: 1rem;
      }
    }
  }
  .barber-Matthew {
    display: flex;
    justify-content: center;
    height: 50vh;
    .barber-info {
      img {
        padding: 1rem;
        height: 270px;
        width: 240px;
        border-radius: 20px;
      }
      button {
        margin-left: 1rem;
      }
    }
    .barber-booking {
      background-color: whitesmoke;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      button {
        cursor: pointer;
        width: 100px;
        border: none;
        border-radius: 20px;
        padding: 0.3rem;
        margin: 10px 15px;
      }
      p {
        padding: 1rem;
      }
    }
  }
  .barber-Germ {
    display: flex;
    justify-content: center;
    height: 50vh;
    .barber-info {
      img {
        padding: 1rem;
        height: 260px;
        width: 250px;
        border-radius: 20px;
      }
      button {
        margin-left: 1rem;
      }
    }
    .barber-booking {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      background-color: whitesmoke;
      button {
        cursor: pointer;
        width: 100px;
        border: none;
        border-radius: 20px;
        padding: 0.3rem;
        margin: 10px 15px;
      }
      p {
        padding: 1rem;
      }
    }
  }
`;
