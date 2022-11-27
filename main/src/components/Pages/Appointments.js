import React from "react";
import { Matthew, Tank, Germ, Jimmy } from "../EmployeeData";
import Professionals from "../Professionals";
import styled from "styled-components";

function Appointments() {
  const data = { Matthew, Tank, Germ, Jimmy};

  return (
    <Container>
      <h1>Choose a professional</h1>
      <div className="appointment-wrapper">
        <div className="professionals">
          <Professionals name={Tank.name} img={Tank.img}/>
          <Professionals name={Tank.name} img={Tank.img}/>
          <Professionals name={Germ.name} img={Germ.img}/>
          <Professionals name={Tank.name} img={Tank.img}/>
          <Professionals name={Matthew.name} img={Matthew.img}/>
          <Professionals name={Matthew.name} img={Matthew.img}/>
          <Professionals name={Germ.name} img={Germ.img}/>
          <Professionals name={Germ.name} img={Germ.img}/>
        </div>
        <div className="items-selected"></div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  h1{
    padding: 1rem;
  }
  .appointment-wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    .professionals {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
`;

export default Appointments;
