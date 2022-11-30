import React, { useEffect, useState } from "react";
import Service from "./Service";
import styled from "styled-components";
import { Haircut, Beard, Design, Edge_Up } from "./ServiceData";

export default function Services(props) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [handleSelected, setHandleSelected] = useState(false);

  useEffect(() => {
    if (handleSelected) {
      props.setServiceName(selectedService);
      props.setCalActive(true);
      props.setServicesActive(null);
      console.log(`Service selected: ${selectedService}`);
    }
  }, [props, selectedService, handleSelected]);

  return props.clicker ? (
    <Container>
      <Service
        name={Haircut.service}
        price={Haircut.price}
        time={Haircut.time}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        handleSelected={handleSelected}
        setHandleSelected={setHandleSelected}
      />
      <Service
        name={Beard.service}
        price={Beard.price}
        time={Beard.time}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        handleSelected={handleSelected}
        setHandleSelected={setHandleSelected}
      />
      <Service
        name={Design.service}
        price={Design.price}
        time={Design.time}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        handleSelected={handleSelected}
        setHandleSelected={setHandleSelected}
      />
      <Service
        name={Edge_Up.service}
        price={Edge_Up.price}
        time={Edge_Up.time}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        handleSelected={handleSelected}
        setHandleSelected={setHandleSelected}
      />
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  padding: 0.3rem;
  animation: fadeIn 2s;
  .fade {
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fade:hover {
    background-color: red;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 100%;
  }
`;
