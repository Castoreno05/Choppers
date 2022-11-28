import React, { useState } from "react";
import { Matthew, Tank, Germ } from "../EmployeeData";
import Services from "./Services";
import Professional from "../Professional";
import styled from "styled-components";

function Appointments() {
  const [services, setServices] = useState(false);
  
  return (
    <Container>
      <h1>Choose a professional</h1>
      <div className="appointment-wrapper">
        <div className="professionals" onClick={() => setServices(true)}>
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Germ.name} img={Germ.img} />
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Matthew.name} img={Matthew.img} />
          <Professional name={Matthew.name} img={Matthew.img} />
          <Professional name={Germ.name} img={Germ.img} />
          <Professional name={Germ.name} img={Germ.img} />
        </div>
        <Services trigger={services} setServices={setServices} />
        <div className="items-selected">
          <div className="shopping-cart">
            <h2>Your Order</h2>
            <div className="time-div">
              <button>Choose a time</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  h1 {
    text-align: center;
    padding: 1rem 2.5rem;
  }
  .appointment-wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    overflow: hidden;
    .professionals {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
    .items-selected {
      padding: 1rem;
      .shopping-cart {
        display: flex;
        flex-direction: column;
        border: solid 0.1rem black;
        h2 {
          text-align: center;
          padding: 0.5rem;
        }
        .time-div {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1020px) {
    .appointment-wrapper {
      grid-template-columns: 50% 50%;
      .professionals {
        grid-template-columns: 50% 50% !important;
      }
    }
  }
  @media screen and (max-width: 735px) {
    .appointment-wrapper {
      grid-template-columns: 50% 50%;
      .professionals {
        grid-template-columns: 100% !important;
      }
    }
  }
`;

export default Appointments;
