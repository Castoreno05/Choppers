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
  };

  return (
    <Container>
      <div className="s-card" onClick={handleClick}>
        <div className="service-header">
          <h5>{props.serviceName}</h5>
          <p>{props.serviceTime}</p>
        </div>
        <div className="price">
          <p>{props.servicePrice}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.5s;
  height: 30vh;
  align-items: center;
  .s-card {
    cursor: pointer;
    border-radius: 10px;
    border: solid 0.1rem black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    width: 150px;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
