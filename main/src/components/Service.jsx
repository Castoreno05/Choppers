import React from "react";
import styled from "styled-components";

export default function Service(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setTitle("SELECT AN AVAILABLE DATE");
    props.setServiceName(`${props.serviceName}`);
    props.setServiceTime(`${props.serviceTime}`);
    props.setServicePrice(`${props.servicePrice}`);
    props.setCalendarActive(true);
    // props.setServiceActive(undefined);
  };

  return (
    <Container>
      <div className="s-card" onClick={handleClick}>
        <div className="service-header">
          <h5>{props.serviceName}</h5>
          <p>{props.serviceTime}</p>
        </div>
        <div className="price">
          <p>${props.servicePrice}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .s-card {
    cursor: pointer;
    border-radius: 10px;
    border: solid 0.1rem black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    .service-header {
      padding: 0.5rem;
    }
    .price {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem;
    }
  }
  .s-card:hover {
    background-color: black;
    color: #fff;
  }
`;
