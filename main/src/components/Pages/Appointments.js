import React, { useEffect, useState } from "react";
import {
  Matthew,
  Tank,
  Germ,
  Jimmy,
  Victor,
  Stan,
  Dennis,
  Mark,
} from "../EmployeeData";
import Services from "../Services";
import Professional from "../Professional";
import styled from "styled-components";

function Appointments() {
  const [myClass, setMyClass] = useState("professionals");
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  const [selected, setSelected] = useState(false);
  const [services, setServices] = useState(false);

  useEffect(() => {
    if (selected) {
      setMyClass("professionals-disabled");
      setServices(true);
    }
  }, [selected]);

  return (
    <Container>
      <h1>Choose a professional</h1>
      <div className="appointment-wrapper">
        <div className={myClass}>
          <Professional
            name={Tank.name}
            img={Tank.img}
            selected={selected}
            setSelected={setSelected}
            number={Tank.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Jimmy.name}
            img={Jimmy.img}
            selected={selected}
            setSelected={setSelected}
            number={Jimmy.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Germ.name}
            img={Germ.img}
            selected={selected}
            setSelected={setSelected}
            number={Germ.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Victor.name}
            img={Victor.img}
            selected={selected}
            setSelected={setSelected}
            number={Victor.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Matthew.name}
            img={Matthew.img}
            selected={selected}
            setSelected={setSelected}
            number={Matthew.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Stan.name}
            img={Stan.img}
            selected={selected}
            setSelected={setSelected}
            number={Stan.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Dennis.name}
            img={Dennis.img}
            selected={selected}
            setSelected={setSelected}
            number={Dennis.eNumber}
            setValue={setValue}
            setName={setName}
          />
          <Professional
            name={Mark.name}
            img={Mark.img}
            selected={selected}
            setSelected={setSelected}
            number={Mark.eNumber}
            setValue={setValue}
            setName={setName}
          />
        </div>
        <Services trigger={services} setServices={setServices} />
        <div className="items-selected">
          <div className="shopping-cart">
            <h2>Your Order</h2>
            <div className="barber-selected">
              <p>
                Employee #: <strong>{value}</strong>
              </p>
              <p>
                Professional: <strong>{name}</strong>
              </p>
            </div>
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
  h1,
  p {
    text-align: center;
    padding: 1rem 2.5rem;
  }
  .appointment-wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    overflow: hidden;
    .professionals-disabled {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      transform: translateX(-200%);
      transition: transform ease-out 2s;
      position: absolute;
    }
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
        .barber-selected {
          p {
            font-size: 24px;
            padding: 0.2rem;
          }
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
  @media screen and (max-width: 550px) {
    .barber-selected {
      p {
        font-size: 16px !important;
      }
    }
  }
`;

export default Appointments;
