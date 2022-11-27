import React from "react";
import { Matthew, Tank, Germ, Jimmy } from "../EmployeeData";
import Professional from "../Professional";
import styled from "styled-components";

function Appointments() {
  const data = { Matthew, Tank, Germ, Jimmy };

  console.log(data);

  return (
    <Container>
      <h1>Choose a professional</h1>
      <div className="appointment-wrapper">
        <div className="professionals">
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Germ.name} img={Germ.img} />
          <Professional name={Tank.name} img={Tank.img} />
          <Professional name={Matthew.name} img={Matthew.img} />
          <Professional name={Matthew.name} img={Matthew.img} />
          <Professional name={Germ.name} img={Germ.img} />
          <Professional name={Germ.name} img={Germ.img} />
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
  h1 {
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
