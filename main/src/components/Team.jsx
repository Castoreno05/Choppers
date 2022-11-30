import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Professional from "./Professional";
import {
  Matthew,
  Tank,
  Germ,
  Jimmy,
  Victor,
  Stan,
  Dennis,
  Mark,
} from "./EmployeeData";

export default function Team(props) {
  const [selected, setSelected] = useState(false);
  const [handleClick, setHandleClick] = useState(false);
  const [eNumberSelected, setENumberSelected] = useState(null);
  const [eSelected, setESelected] = useState(null);

  useEffect(() => {
    if (handleClick) {
      props.setTeamActive(false);
    }
  }, [props, selected, handleClick]);

  return props.teamActive ? (
    <Container>
      <Professional
        number={Tank.eNumber}
        name={Tank.name}
        img={Tank.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Jimmy.eNumber}
        name={Jimmy.name}
        img={Jimmy.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Germ.eNumber}
        name={Germ.name}
        img={Germ.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Victor.eNumber}
        name={Victor.name}
        img={Victor.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Matthew.eNumber}
        name={Matthew.name}
        img={Matthew.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Stan.eNumber}
        name={Stan.name}
        img={Stan.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Dennis.eNumber}
        name={Dennis.name}
        img={Dennis.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <Professional
        number={Mark.eNumber}
        name={Mark.name}
        img={Mark.img}
        selected={selected}
        setSelected={setSelected}
        eNumberSelected={eNumberSelected}
        setENumberSelected={setENumberSelected}
        eSelected={eSelected}
        setESelected={setESelected}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1020px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 725px) {
    grid-template-columns: 100%;
  }
`;
